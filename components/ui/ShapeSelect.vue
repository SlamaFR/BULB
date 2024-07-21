<script setup lang="ts">
const shape = defineModel<IndexShape | null>({ required: true })

const selectedShape = ref<ShapeChoice | null>(findShapeByValue(shape.value))

watch(selectedShape, val => shape.value = val?.value ?? null)
watch(shape, val => selectedShape.value = findShapeByValue(val))
</script>

<template>
  <Select
    v-model="selectedShape"
    :options="SHAPES"
    placeholder="Selectionner une forme"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <Shape class="text-xl" :shape="slotProps.value.value" color="var(--p-text-color)" />
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Shape class="text-xl" :shape="slotProps.option.value" color="var(--p-text-color)" />
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
