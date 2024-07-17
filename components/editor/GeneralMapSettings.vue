<script setup lang="ts">
const { mode, index, color, stopSpacing } = storeToRefs(useLine())

const showPresetSelector = ref(false)
const showExportDialog = ref(false)

const importProject = useLoadProject()
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
      <Button text label="Utiliser un préréglage" icon="i-tabler-adjustments" @click="showPresetSelector = true" />
    </div>
  </div>

  <Divider />

  <div class="flex flex-row items-center content-end flex-grow gap-4">
    <Button class="flex-grow" label="Importer un projet" icon="i-tabler-file-import" @click="importProject()" />
    <Button class="flex-grow" label="Exporter le projet" icon="i-tabler-file-export" @click="showExportDialog = true" />
  </div>

  <PresetSelector v-model:visible="showPresetSelector" />
  <ExportDialog v-model:visible="showExportDialog" />
</template>

<style scoped>
.form {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
