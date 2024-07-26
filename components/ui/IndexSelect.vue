<script setup lang="ts">
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'

const { mode } = defineProps<{
  mode: Mode | null
}>()
const index = defineModel<LineIndex | null>({ required: true })
const { getModeIndices, findIndexById } = useCustomLineIndices()

const selectedIndex = ref<IndexChoice<LineIndex> | null>(indexToChoice(index.value))
const availableDefaultLines = computed(() => getLinesByMode(mode))
const availableCustomLines = computed(() => getModeIndices(mode).map(it => ({
  value: {
    id: it.id,
    mode: it.mode,
  },
  label: `Ligne ${it.prefix}${it.index}${it.suffix}`,
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
watch(index, val => selectedIndex.value = indexToChoice(val))

function indexToChoice(index: LineIndex | null): IndexChoice<LineIndex> | null {
  if (index === null) return null
  if (isDefaultIndex(index)) {
    return findLineByValue(index)
  }
  if (isCustomIndex(index)) {
    const customIndex = findIndexById(index.id)
    if (customIndex === null) return null
    return {
      value: index,
      label: `Ligne ${customIndex.prefix}${customIndex.index}${customIndex.suffix}`,
    }
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
          <LineIndex class="text-xl" :index="slotProps.value.value" />
        </div>
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <div :class="{ 'bg-white rounded-sm': ['BOAT', 'BUS', 'CABLE', 'TRAM', 'VELO'].includes(slotProps.option.mode) }">
          <LineIndex class="text-xl" :index="slotProps.option.value" />
        </div>
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
