<script setup lang="ts">
const shape = defineModel<number | null>({ required: true })

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
</script>

<template>
  <Select
    v-model="shape"
    :options="SIZES"
    :option-label="option => $t(option.label)"
    option-value="value"
    :placeholder="$t('components.map_size_select.placeholder')"
    class="flex-auto"
  />
</template>
