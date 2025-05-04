<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'
import usePdfExportMap from '~/composables/usePdfExportMap'

const showPdfExportNotice = ref(false)

const skipPdfExportNotice = useLocalStorage('skipPdfExportNotice', false)
const exportMap = usePdfExportMap()

function doExport() {
  if (!skipPdfExportNotice.value) {
    showPdfExportNotice.value = true
  } else {
    exportMap()
  }
}

function onDialogComplete(dontShowAgain: boolean) {
  skipPdfExportNotice.value = dontShowAgain
  showPdfExportNotice.value = false
  exportMap()
}
</script>

<template>
  <Button
    pt:root:class="important-justify-start"
    :label="$t('ui.menu.export_pdf')"
    icon="i-tabler-file-type-pdf"
    text
    @click="doExport()"
  />

  <PdfExportNoticeDialog v-model:visible="showPdfExportNotice" @complete="onDialogComplete" @cancel="onDialogCancel" />
</template>
