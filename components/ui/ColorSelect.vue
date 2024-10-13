<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { COLORS, findColorByValue } from '~/data/colors'
import { textContrast } from '~/utils/colors'

const color = defineModel<string | null>({ required: true })
const { t } = useI18n()

const fallbackColor = t('data.colors.custom')
const selectedColor = ref<ColorChoice | null>(findColorByValue(color.value, fallbackColor))

watch(selectedColor, val => color.value = val?.value ?? null)
watch(color, val => selectedColor.value = findColorByValue(val, fallbackColor))

function textColor(color: string) {
  return textContrast(color) ? 'white' : '#231f20'
}
</script>

<template>
  <Select
    v-model="selectedColor"
    :options="COLORS"
    :placeholder="$t('components.color_select.placeholder')"
    option-label="label"
    class="flex-auto"
    filter
  >
    <template #value="slotProps">
      <div
        v-if="slotProps.value"
        :style="{
          backgroundColor: slotProps.value.value,
          color: textColor(slotProps.value.value),
          width: 'fit-content',
        }" class="rounded px-1.5 py-.5 text-sm"
      >
        {{ slotProps.value.label }}
      </div>
    </template>
    <template #option="slotProps">
      <div
        :style="{
          backgroundColor: slotProps.option.value,
          color: textColor(slotProps.option.value),
        }" class="rounded px-1.5 py-.5 text-sm"
      >
        {{ slotProps.option.label }}
      </div>
    </template>
  </Select>
</template>
