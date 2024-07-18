<script setup lang="ts">
const { mode, index, color, stopSpacing } = storeToRefs(useLine())

const showPresetSelector = ref(false)
const showSaveDialog = ref(false)

const importProject = useLoadProject()
const exportSignal = useEventBus(ExportSignal)

function resetMap() {
  mode.value = null
  index.value = null
  color.value = null
  stopSpacing.value = 1
}

function exportMap() {
  exportSignal.emit()
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="form items-center gap-x-5 gap-y-2">
      <span class="text-nowrap">Mode de transport</span>
      <ModeSelect v-model="mode" />

      <label class="text-nowrap">Indice de ligne</label>
      <IndexSelect v-model="index" :mode="mode" />

      <span class="text-nowrap">Couleur du plan</span>
      <ColorSelect v-model="color" />

      <span>Espacement minimum<br>des arrêts</span>
      <InputNumber
        v-model="stopSpacing"
        class="flex-auto"
        :min="1"
        :allow-empty="false"
        suffix=" unité(s)"
        show-buttons
        button-layout="horizontal"
      >
        <template #incrementbuttonicon>
          <span class="i-tabler-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="i-tabler-minus" />
        </template>
      </InputNumber>
    </div>

    <div class="mt-4 flex flex-row justify-end">
      <Button text severity="secondary" label="Réinitialiser" icon="i-tabler-arrow-back-up" @click="resetMap()" />
      <Button text label="Utiliser un préréglage" icon="i-tabler-adjustments" @click="showPresetSelector = true" />
    </div>
  </div>

  <Divider />

  <div class="flex flex-row items-center content-end flex-grow gap-4">
    <Button severity="secondary" class="flex-grow" label="Charger" icon="i-tabler-upload" @click="importProject()" />
    <Button severity="secondary" class="flex-grow" label="Sauvegarder" icon="i-tabler-download" @click="showSaveDialog = true" />
    <Button class="flex-grow" label="Exporter" icon="i-tabler-map-share" @click="exportMap()" />
  </div>

  <PresetSelector v-model:visible="showPresetSelector" />
  <SaveDialog v-model:visible="showSaveDialog" />
</template>

<style scoped>
.form {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
