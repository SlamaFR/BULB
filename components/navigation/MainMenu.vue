<script setup lang="ts">
const { reset } = useLine()

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
    accept: reset,
  })
}

function resetStores() {
  confirm.require({
    header: 'Oula oula !',
    message: 'En réinitialisant les stores, vous perdrez les modifications non enregistrées, ainsi que vos indices personnalisés. Cette action est généralement nécessaire lors d’une mise à jour comportant des changements bloquants. Êtes-vous sûr(e) de vouloir continuer ?',
    acceptProps: {
      label: 'Procéder',
      severity: 'danger',
    },
    rejectProps: {
      label: 'Annuler',
      severity: 'secondary',
      text: true,
    },
    accept: () => {
      localStorage.removeItem('line')
      localStorage.removeItem('customLineIndices')
      document.location.reload()
    },
  })
}

function exportMap() {
  exportSignal.emit()
}
</script>

<template>
  <div class="flex flex-col items-stretch flex-grow">
    <Button
      pt:root:class="important-justify-start"
      label="Indices personnalisés"
      severity="secondary"
      icon="i-tabler-edit-circle"
      text
      @click="showLineIndexDirectory = true"
    />
    <Divider />
    <Button
      pt:root:class="important-justify-start"
      label="Nouveau projet"
      severity="secondary"
      icon="i-tabler-file"
      text
      @click="newProject()"
    />
    <Button
      pt:root:class="important-justify-start"
      label="Ouvrir"
      severity="secondary"
      icon="i-tabler-folder"
      text
      @click="importProject()"
    />
    <Button
      pt:root:class="important-justify-start"
      label="Sauvegarder"
      severity="secondary"
      icon="i-tabler-device-floppy"
      text
      @click="showSaveDialog = true"
    />
    <Button
      pt:root:class="important-justify-start"
      label="Exporter"
      icon="i-tabler-map-share"
      text
      @click="exportMap()"
    />

    <!--
    <Divider />
    <Button
      pt:root:class="important-justify-start"
      label="Réinitialiser les stores"
      severity="danger"
      icon="i-tabler-refresh"
      @click="resetStores()"
    />
    -->
  </div>

  <CustomLineIndexDirectoryDialog v-model:visible="showLineIndexDirectory" />
  <SaveDialog v-model:visible="showSaveDialog" />
</template>
