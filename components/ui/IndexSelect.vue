<script setup lang="ts">
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'

const { mode } = defineProps<{
  mode: Mode | null
}>()
const index = defineModel<string | CustomLineIndex | null>({ required: true })
const { getModeIndices } = useCustomLineIndices()

const selectedIndex = ref<IndexChoice | null>(indexToChoice(index.value, mode))
const availableDefaultLines = computed(() => getLinesByMode(mode))
const availableCustomLines = computed(() => getModeIndices(mode).map(it => ({
  value: it,
  label: `Ligne ${it.prefix}${it.index}${it.suffix}`,
  color: it.color,
  mode,
})))
const availableLines = computed(() => [
  {
    label: 'Indices officiels',
    items: availableDefaultLines.value,
  },
  {
    label: 'Indices personnalisés',
    items: availableCustomLines.value,
  },
])

watch(selectedIndex, val => index.value = val?.value ?? null)
watch([() => mode, index], val => selectedIndex.value = indexToChoice(val[1], val[0]))

function indexToChoice(index: string | CustomLineIndex | null, mode: Mode | null) {
  if (index === null) return null
  if (isDefaultIndex(index)) return findLineByValueAndMode(index, mode)
  if (isCustomIndex(index)) {
    return {
      value: index,
      label: `Ligne ${index.prefix}${index.index}${index.suffix}`,
      color: index.color,
      mode,
    } as IndexChoice
  }
  return null
}
</script>

<template>
  <Select
    v-model="selectedIndex"
    :options="availableLines"
    placeholder="Selectionner un indice"
    option-group-children="items"
    option-group-label="label"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <div class="w-1.25em" :class="{ 'bg-white rounded-sm': ['BOAT', 'BUS', 'CABLE', 'TRAM', 'VELO'].includes(slotProps.value.mode) }">
          <LineIndex class="text-xl" :mode="slotProps.value.mode" :index="slotProps.value.value" />
        </div>
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <div :class="{ 'bg-white rounded-sm': ['BOAT', 'BUS', 'CABLE', 'TRAM', 'VELO'].includes(slotProps.option.mode) }">
          <LineIndex class="text-xl" :mode="slotProps.option.mode" :index="slotProps.option.value" />
        </div>
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
