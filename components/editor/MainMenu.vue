<script setup lang="ts">
const { mode, index, color, stopSpacing, stops } = storeToRefs(useLine())

const showLineIndexDirectory = ref(false)
const showSaveDialog = ref(false)

const importProject = useLoadProject()
const exportSignal = useEventBus(ExportSignal)
const confirm = useConfirm()

function newProject() {
  confirm.require({
    header: 'Pas si vite !',
    message: 'Avez-vous penser à sauvegarder votre projet actuel ? Si vous continuez, vous perdrez toutes les modifications non sauvegardées.',
    acceptProps: {
      label: 'Nouveau projet',
      severity: 'warn',
    },
    rejectProps: {
      label: 'Annuler',
      severity: 'secondary',
      text: true,
    },
    accept: () => {
      mode.value = null
      index.value = null
      color.value = null
      stopSpacing.value = 1
      stops.value = []
    },
  })
}

function exportMap() {
  exportSignal.emit()
}
</script>

<template>
  <div class="flex flex-col items-stretch flex-grow">
    <Button text pt:root:class="important-justify-start" label="Indices personnalisés" severity="secondary" icon="i-tabler-edit-circle" @click="showLineIndexDirectory = true" />
    <Divider />
    <Button text pt:root:class="important-justify-start" label="Nouveau projet" severity="secondary" icon="i-tabler-file" @click="newProject()" />
    <Button text pt:root:class="important-justify-start" label="Ouvrir" severity="secondary" icon="i-tabler-folder" @click="importProject()" />
    <Button text pt:root:class="important-justify-start" label="Sauvegarder" severity="secondary" icon="i-tabler-device-floppy" @click="showSaveDialog = true" />
    <Button text pt:root:class="important-justify-start" label="Exporter" icon="i-tabler-map-share" @click="exportMap()" />
  </div>

  <CustomLineIndexDirectoryDialog v-model:visible="showLineIndexDirectory" />
  <SaveDialog v-model:visible="showSaveDialog" />
</template>
