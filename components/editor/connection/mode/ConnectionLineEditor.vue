<script setup lang="ts">
import { METRO_LINES, RER_LINES, TRAIN_LINES, TRAM_LINES } from '~/utils/data'

const {
  index,
  groupIndex,
  total,
  mode,
} = defineProps<{
  index: number
  groupIndex: number
  total: number
  mode: Mode
}>()

const availableLines = computed(() => {
  switch (mode) {
    case 'METRO':
      return METRO_LINES
    case 'RER':
      return RER_LINES
    case 'TRAIN':
      return TRAIN_LINES
    case 'TRAM':
      return TRAM_LINES
    default:
      return []
  }
})

const line = defineModel<ConnectionLine>('line', { required: true })
const selectedLine = ref(availableLines.value.find(it => it.value === line.value.lineIndex) ?? availableLines.value[0])
watch(selectedLine, val => line.value.lineIndex = val.value)

const showOrnamentEditor = ref(false)
</script>

<template>
  <div class="p-3 p-panel flex flex-col gap-2">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3">
        <Select
          v-model="selectedLine"
          :options="availableLines"
          placeholder="Selectionner une ligne"
          class="flex-auto"
        >
          <template #value="slotProps">
            <div class="flex items-center gap-3">
              <div class="w-1.25em" :class="{ 'bg-white rounded': slotProps.value.mode === 'TRAM' }">
                <LineIndex class="text-xl" :mode="slotProps.value.mode" :index="slotProps.value.value" />
              </div>
              <span>{{ slotProps.value.label }}</span>
            </div>
          </template>
          <template #option="slotProps">
            <div class="flex items-center gap-3">
              <div :class="{ 'bg-white rounded': slotProps.option.mode === 'TRAM' }">
                <LineIndex class="text-xl" :mode="slotProps.option.mode" :index="slotProps.option.value" />
              </div>
              <span>{{ slotProps.option.label }}</span>
            </div>
          </template>
        </Select>
      </div>
      <div class="flex flex-row items-center gap-3">
        <Checkbox v-model="line.walk" :input-id="`walk_connection_${groupIndex}_line_${index}`" binary />
        <label :for="`walk_connection_${groupIndex}_line_${index}`" class="text-nowrap">Correspondance piétonne</label>
      </div>

      <div class="flex flex-row gap-2 items-center">
        <Button outlined class="flex-grow" size="small" label="Décoration" @click="showOrnamentEditor = true" />
        <!--
        <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-left" :disabled="index <= 0" />
        <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-right" :disabled="index >= total - 1" />
        -->
        <Button size="small" severity="danger" icon="i-tabler-trash" />
      </div>
    </div>
  </div>

  <OrnamentEditor v-model="line.ornament" v-model:visible="showOrnamentEditor" />
</template>
