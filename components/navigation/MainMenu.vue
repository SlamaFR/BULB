<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { reset } = useLine()

const showLineIndexDirectory = ref(false)
const showSaveDialog = ref(false)

const importProject = useLoadProject()
const exportSignal = useEventBus(ExportSignal)
const confirm = useConfirm()
const { t } = useI18n()

function newProject() {
  confirm.require({
    header: t('ui.dialogs.new_project.header'),
    message: t('ui.dialogs.new_project.message'),
    acceptProps: {
      label: t('ui.dialogs.new_project.accept'),
      severity: 'warn',
    },
    rejectProps: {
      label: t('ui.dialogs.new_project.reject'),
      severity: 'secondary',
      text: true,
    },
    accept: reset,
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
      :label="$t('ui.menu.custom_indices')"
      severity="secondary"
      icon="i-tabler-edit-circle"
      text
      @click="showLineIndexDirectory = true"
    />
    <Divider />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.new_project')"
      severity="secondary"
      icon="i-tabler-file"
      text
      @click="newProject()"
    />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.open')"
      severity="secondary"
      icon="i-tabler-folder"
      text
      @click="importProject()"
    />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.save')"
      severity="secondary"
      icon="i-tabler-device-floppy"
      text
      @click="showSaveDialog = true"
    />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.export')"
      icon="i-tabler-map-share"
      text
      @click="exportMap()"
    />
  </div>

  <CustomLineIndexDirectoryDialog v-model:visible="showLineIndexDirectory" />
  <SaveDialog v-model:visible="showSaveDialog" />
</template>
