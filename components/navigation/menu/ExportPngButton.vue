<script lang="ts" setup>
import { useEventBus } from '@vueuse/core'
import { ExportSignal } from '~/utils/symbols'

const exportSignal = useEventBus(ExportSignal)

function doExport() {
  exportSignal.emit()
}
</script>

<template>
  <Button
    pt:root:class="important-justify-start"
    :label="$t('ui.menu.export')"
    icon="i-tabler-file-type-png"
    text
    @click="doExport()"
  />
</template>
