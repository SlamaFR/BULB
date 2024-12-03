<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { findLineByValue, getLinesByMode } from '~/data/lines'
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'

const { mode } = defineProps<{
  mode: Mode | null
}>()
const emit = defineEmits<{
  updateColor: [color: string | null]
}>()
const index = defineModel<LineIndex | null>({ required: true })
const { getModeIndices, findIndexById } = useCustomLineIndices()
const { t } = useI18n()

const availableDefaultLines = computed(() => getLinesByMode(mode))
const availableCustomLines = computed(() => getModeIndices(mode).map((it: CustomLineIndexDescription) => ({
  value: {
    mode: it.mode,
    $customLineIndex: { id: it.id },
  },
  label: t('components.line_index_select.line_name', { index: `${it.prefix}${it.index}${it.suffix}` }),
})))
const availableLines = computed(() => {
  let options: { label: string, items: any[] }[] = []
  if (availableDefaultLines.value.length > 0) {
    options = options.concat({
      label: t('components.line_index_select.official_indices'),
      items: availableDefaultLines.value,
    })
  }
  if (availableCustomLines.value.length > 0) {
    options = options.concat({
      label: t('components.line_index_select.custom_indices'),
      items: availableCustomLines.value,
    })
  }
  return options
})

watch(index, val => emit('updateColor', indexToChoice(val)?.color ?? null))

function isBuiltin(index: LineIndex | null): index is BuiltinLineIndex {
  if (index === null) return false
  return '$builtinLineIndex' in index
}
function isCustom(index: LineIndex | null): index is CustomLineIndex {
  if (index === null) return false
  return '$customLineIndex' in index
}

function indexToChoice(index: LineIndex | null): IndexChoice<LineIndex> | null {
  if (index === null) return null
  if (isBuiltin(index)) {
    return findLineByValue(index)
  }
  if (isCustom(index)) {
    const customIndex = findIndexById(index.$customLineIndex.id)
    if (customIndex === null) return null
    return {
      value: index,
      label: t('components.line_index_select.line_name', { index: `${customIndex.prefix}${customIndex.index}${customIndex.suffix}` }),
      color: customIndex.color,
    }
  }
  return null
}
</script>

<template>
  <Select
    v-model="index"
    :options="availableLines"
    :placeholder="$t('components.line_index_select.placeholder')"
    option-group-children="items"
    option-group-label="label"
    option-value="value"
    option-label="label"
    class="flex-auto"
    filter
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <LineIndex class="text-1.25em" :mode="mode" :index="slotProps.value" />
        <span>{{ indexToChoice(slotProps.value)?.label ?? $t('components.line_index_select.unknown_index') }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <LineIndex class="text-1.25em" :mode="mode" :index="slotProps.option.value" />
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
