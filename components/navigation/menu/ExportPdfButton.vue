<script lang="ts" setup>
import { isMobile } from '@basitcodeenv/vue3-device-detect'
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
    v-show="!isMobile"
    pt:root:class="important-justify-start"
    :label="$t('ui.menu.export_pdf')"
    icon="i-tabler-file-type-pdf"
    text
    @click="doExport()"
  />

  <PdfExportNoticeDialog v-model:visible="showPdfExportNotice" @complete="onDialogComplete" />
</template>
