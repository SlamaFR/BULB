<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const color = defineModel<string | null>({ required: true })
const { t } = useI18n()

const fallbackColor = t('data.colors.custom')
const selectedColor = ref<ColorChoice | null>(findColorByValue(color.value, fallbackColor))

watch(selectedColor, val => color.value = val?.value ?? null)
watch(color, val => selectedColor.value = findColorByValue(val, fallbackColor))
</script>

<template>
  <Select
    v-model="selectedColor"
    :options="COLORS"
    :placeholder="$t('components.color_select.placeholder')"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div
        v-if="slotProps.value"
        :style="{
          backgroundColor: slotProps.value.value,
          color: textContrast(slotProps.value.value) ? 'white' : '#231f20',
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
          color: textContrast(slotProps.option.value) ? 'white' : '#231f20',
        }" class="rounded px-1.5 py-.5 text-sm"
      >
        {{ slotProps.option.label }}
      </div>
    </template>
  </Select>
</template>
