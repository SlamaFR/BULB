<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import OpenPresetButton from '~/components/navigation/menu/OpenPresetButton.vue'
import useLoadProject from '~/composables/useLoadProject'
import { useProject } from '~/stores/useProject'

const { reset } = useProject()

const showLineIndexDirectory = ref(false)
const showSaveDialog = ref(false)
const showTroubleshootingDialog = ref(false)

const importProject = useLoadProject()

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
</script>

<template>
  <div class="flex flex-col items-stretch flex-grow">
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.custom_indices')"
      severity="secondary"
      icon="i-tabler-palette"
      text
      @click="showLineIndexDirectory = true"
    />
    <Divider />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.new_project')"
      severity="secondary"
      icon="i-tabler-file-spark"
      text
      @click="newProject()"
    />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.open')"
      severity="secondary"
      icon="i-tabler-folder-open"
      text
      @click="importProject()"
    />
    <OpenPresetButton />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.save')"
      severity="secondary"
      icon="i-tabler-device-floppy"
      text
      @click="showSaveDialog = true"
    />
    <ExportPngButton />
    <ExportPdfButton />
    <Divider />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.troubleshooting')"
      severity="secondary"
      icon="i-tabler-tool"
      text
      @click="showTroubleshootingDialog = true"
    />
  </div>

  <CustomLineIndexDirectoryDialog v-model:visible="showLineIndexDirectory" />
  <TroubleshootingDialog v-model:visible="showTroubleshootingDialog" />
  <SaveDialog v-model:visible="showSaveDialog" />
</template>
