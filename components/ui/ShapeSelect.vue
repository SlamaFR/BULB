<script setup lang="ts">
import { findShapeByValue, SHAPES } from '~/data/shapes'

const {
  filter = () => true,
} = defineProps<{
  filter?: (shape: ShapeChoice) => boolean
}>()
const shape = defineModel<IndexShape | null>({ required: true })
const selectedShape = ref<ShapeChoice | null>(findShapeByValue(shape.value))

watch(selectedShape, val => shape.value = val?.value ?? null)
watch(shape, val => selectedShape.value = findShapeByValue(val))
</script>

<template>
  <Select
    v-model="selectedShape"
    :options="SHAPES"
    :placeholder="$t('components.shape_select.placeholder')"
    class="flex-auto"
    :option-disabled="filter"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <Shape class="text-xl" :shape="slotProps.value.value" color="var(--p-text-color)" />
        <span>{{ $t(slotProps.value.label.toLowerCase()) }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Shape class="text-xl" :shape="slotProps.option.value" color="var(--p-text-color)" />
        <span>{{ $t(slotProps.option.label.toLowerCase()) }}</span>
      </div>
    </template>
  </Select>
</template>
