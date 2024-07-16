<script setup lang="ts">
const { mode, index, color } = storeToRefs(useLine())
const showPresetSelector = ref(false)
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="form items-center gap-x-4 gap-y-2">
      <span class="text-nowrap">Mode de transport</span>
      <ModeSelect v-model="mode" />

      <label class="text-nowrap">Indice de ligne</label>
      <IndexSelect v-model="index" :mode="mode" />

      <span class="text-nowrap">Couleur du plan</span>
      <ColorSelect v-model="color" />
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
