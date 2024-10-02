<script setup lang="ts">
import { ref, watch } from 'vue'

interface LineStyleChoice {
  value: LineStyle
  label: string
}

const STYLES: LineStyleChoice[] = [
  { label: 'data.line_style.plain', value: 'PLAIN' },
  { label: 'data.line_style.striped', value: 'STRIPED' },
]

function findShapeByValue(value: LineStyle | null) {
  return STYLES.find(shape => shape.value === value) ?? null
}

const style = defineModel<LineStyle | null>({ required: true })
const selectedStyle = ref<LineStyleChoice | null>(findShapeByValue(style.value))

watch(selectedStyle, val => style.value = val?.value ?? null)
watch(style, val => selectedStyle.value = findShapeByValue(val))
</script>

<template>
  <Select
    v-model="selectedStyle"
    :options="STYLES"
    :placeholder="$t('components.line_style_select.placeholder')"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <LineStyle :style="slotProps.value.value" />
        <span>{{ $t(slotProps.value.label.toLowerCase()) }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <LineStyle :style="slotProps.option.value" />
        <span>{{ $t(slotProps.option.label.toLowerCase()) }}</span>
      </div>
    </template>
  </Select>
</template>
