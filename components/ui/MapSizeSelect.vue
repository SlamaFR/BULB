<script setup lang="ts">
import { ref, watch } from 'vue'

interface SizeChoice {
  value: number
  label: string
}

const SIZES: SizeChoice[] = [
  { label: 'data.map_size.normal', value: 15 },
  { label: 'data.map_size.large', value: 20 },
  { label: 'data.map_size.big', value: 30 },
  { label: 'data.map_size.huge', value: 50 },
]

function findMapSizeByValue(value: number | null) {
  return SIZES.find(size => size.value === value) ?? { label: 'data.map_size.custom', value }
}

const size = defineModel<number | null>({ required: true })
const selectedSize = ref<SizeChoice | null>(findMapSizeByValue(size.value))

watch(selectedSize, val => size.value = val?.value ?? null)
watch(size, val => selectedSize.value = findMapSizeByValue(val))
</script>

<template>
  <Select
    v-model="selectedSize"
    :options="SIZES"
    :placeholder="$t('components.map_size_select.placeholder')"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-1">
        <span>{{ $t(slotProps.value.label) }}</span>
        <span class="opacity-50">{{ slotProps.value.value }}em</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-1">
        <span>{{ $t(slotProps.option.label) }}</span>
        <span v-if="slotProps.option.value" class="opacity-50">{{ slotProps.option.value }}em</span>
      </div>
    </template>
  </Select>
</template>
