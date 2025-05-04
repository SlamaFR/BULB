<script setup lang="ts">
import { useEventBus, useLocalStorage } from '@vueuse/core'
import { useConfirm } from 'primevue/useconfirm'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useLoadProject from '~/composables/useLoadProject'
import usePdfExportMap from '~/composables/usePdfExportMap'
import { useProject } from '~/stores/useProject'
import { ExportSignal } from '~/utils/symbols'

const { reset } = useProject()

const showLineIndexDirectory = ref(false)
const showPdfExportNotice = ref(false)
const showSaveDialog = ref(false)
const showTroubleshootingDialog = ref(false)

const importProject = useLoadProject()
const exportSignal = useEventBus(ExportSignal)

const skipPdfExportNotice = useLocalStorage('skipPdfExportNotice', false)
const pdfExport = usePdfExportMap()

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

function exportMapPdf() {
  if (!skipPdfExportNotice.value) {
    showPdfExportNotice.value = true
  } else {
    pdfExport()
  }
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
      icon="i-tabler-file-type-png"
      text
      @click="exportMap()"
    />
    <Button
      pt:root:class="important-justify-start"
      :label="$t('ui.menu.export_pdf')"
      icon="i-tabler-file-type-pdf"
      text
      @click="exportMapPdf()"
    />
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
  <PdfExportNoticeDialog v-model:visible="showPdfExportNotice" />
  <TroubleshootingDialog v-model:visible="showTroubleshootingDialog" />
  <SaveDialog v-model:visible="showSaveDialog" />
</template>
