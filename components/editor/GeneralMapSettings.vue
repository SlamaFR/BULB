<script setup lang="ts">
import {
  METRO_LINES,
  RER_LINES,
  TRAIN_LINES,
  TRAM_LINES,
  findColorByValue,
  findLineByValueAndMode,
  findModeByValue,
} from '~/utils/data'

const { mode, index, color } = storeToRefs(useLine())

const availableLines = computed(() => {
  switch (mode.value) {
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

const selectedMode = ref(findModeByValue(mode.value))
watch(selectedMode, val => mode.value = val.value)

const selectedLine = ref(findLineByValueAndMode(index.value, mode.value))
watch(selectedLine, val => index.value = val.value)

const selectedColor = ref(findColorByValue(color.value))
watch(selectedColor, val => color.value = val.value)

watch([mode, index, color], (val) => {
  selectedMode.value = findModeByValue(val[0])
  selectedLine.value = findLineByValueAndMode(val[1], val[0])
  selectedColor.value = findColorByValue(val[2])
})

onMounted(() => {
  selectedMode.value = findModeByValue(mode.value)
  selectedLine.value = findLineByValueAndMode(index.value, mode.value)
  selectedColor.value = findColorByValue(color.value)
})

const showPresetSelector = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="form items-center gap-x-4 gap-y-2">
      <span class="text-nowrap">Mode de transport</span>
      <Select
        v-model="selectedMode"
        :options="MODES"
        placeholder="Selectionner un mode"
        class="flex-auto"
      >
        <template #value="slotProps">
          <div class="flex items-center gap-3">
            <div :class="{ 'bg-white rounded': slotProps.value.background, 'rounded-full': slotProps.value.round }">
              <Mode class="text-xl" :mode="slotProps.value.value" />
            </div>
            <span>{{ slotProps.value.label }}</span>
          </div>
        </template>
        <template #option="slotProps">
          <div class="flex items-center gap-3">
            <div :class="{ 'bg-white rounded': slotProps.option.background, 'rounded-full': slotProps.option.round }">
              <Mode class="text-xl" :mode="slotProps.option.value" />
            </div>
            <span>{{ slotProps.option.label }}</span>
          </div>
        </template>
      </Select>

      <label class="text-nowrap">Indice de ligne</label>
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

      <span class="text-nowrap">Couleur du plan</span>
      <Select
        v-model="selectedColor"
        :options="COLORS"
        placeholder="Selectionner une couleur"
        class="flex-auto"
      >
        <template #value="slotProps">
          <div
            :style="{
              backgroundColor: slotProps.value.value,
              color: slotProps.value.textColor,
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
              color: slotProps.option.textColor,
            }" class="rounded px-1.5 py-.5 text-sm"
          >
            {{ slotProps.option.label }}
          </div>
        </template>
      </Select>
    </div>

    <div class="mt-4 flex flex-row justify-end">
      <Button text label="Utiliser un préréglage" icon="i-tabler-adjustments" @click="showPresetSelector = true" />
    </div>
  </div>

  <Divider />

  <div class="flex flex-row items-center content-end flex-grow gap-4">
    <Button class="flex-grow" label="Importer un projet" icon="i-tabler-file-import" />
    <Button class="flex-grow" label="Exporter le projet" icon="i-tabler-file-export" />
  </div>

  <PresetSelector v-model:visible="showPresetSelector" />
</template>

<style scoped>
.form {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
