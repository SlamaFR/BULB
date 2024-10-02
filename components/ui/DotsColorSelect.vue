<script setup lang="ts">
const color = defineModel<DotsColorPolicy | null>({ required: true })

interface DotsColorChoice {
  value: DotsColorPolicy
  label: string
}

const OPTIONS: DotsColorChoice[] = [
  { label: 'data.dots_color.inherit', value: 'INHERIT' },
  { label: 'data.dots_color.white', value: 'WHITE' },
]
</script>

<template>
  <Select
    v-model="color"
    :options="OPTIONS"
    :option-label="option => $t(option.label)"
    option-value="value"
    :placeholder="$t('components.dots_color_select.placeholder')"
    class="flex-auto"
  />
</template>
