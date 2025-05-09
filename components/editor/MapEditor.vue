<script setup lang="ts">
import { useEventBus } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { computed, onBeforeUnmount, onMounted, provide, ref } from 'vue'
import useExportMap from '~/composables/useExportMap'
import { useProjectVersionCheck } from '~/composables/useProjectVersionCheck'
import useVersion from '~/composables/useVersion'
import { useProject } from '~/stores/useProject'
import { ExportSignal, LineContextKey } from '~/utils/symbols'

const { version, line } = storeToRefs(useProject())
const exportMap = useExportMap()
const exportSignal = useEventBus(ExportSignal)
const { projectMinimumVersion } = useVersion()
const checkVersion = useProjectVersionCheck()

const el = ref()
const error = ref(false)

provide<LineContext>(LineContextKey, {
  color: computed(() => line.value.color ?? '#000000'),
  lineThickness: computed(() => Number.parseFloat(line.value.lineThickness ?? '1') || 1),
  lineStyle: computed(() => line.value.lineStyle ?? 'PLAIN'),
  dotsColorPolicy: computed(() => line.value.dotsColorPolicy ?? 'INHERIT'),
  frameTerminusNames: computed(() => line.value.frameTerminusNames),
})

function doExport() {
  exportMap(el.value)
}

function onError(e: unknown) {
  console.error(e)
  error.value = true
}

onMounted(() => {
  exportSignal.on(doExport)
  checkVersion(version.value, projectMinimumVersion)
})
onBeforeUnmount(() => exportSignal.off(doExport))
</script>

<template>
  <div class="map-editor">
    <div class="editor-content">
      <div class="dead-zone">
        <NuxtErrorBoundary v-if="!error" @error="onError">
          <div ref="el">
            <LineCanvas />
          </div>
        </NuxtErrorBoundary>
        <LineCanvasError v-if="error" />
      </div>
    </div>
    <div class="editor-toolbox">
      <LineSectionToolbox />
      <ToolboxSep />
      <BranchToolbox />
      <div class="flex-grow min-w-1em" />
      <Trash />
    </div>
  </div>
</template>

<style>
:root {
  --base-size: 2;
  --font-size: calc(var(--base-size) * 16px);
}
</style>

<style scoped lang="scss">
.map-editor {
  border: 1px solid var(--p-content-border-color);
  color: var(--p-gray-700);
  height: 100%;
  max-height: 100%;

  display: grid;
  grid-template-rows: 1fr auto;
}

.editor-toolbox {
  padding: .5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid var(--p-slate-200);
  overflow-x: auto;
  background: var(--p-slate-50);

  & > * {
    flex-shrink: 0;
  }
}

.editor-content {
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  min-height: 100%;
  min-width: 100%;
}

.dead-zone {
  display: flex;
  align-items: center;
  padding: 5em;
  flex-grow: 1;
  min-width: 100%;
  background: repeating-linear-gradient(45deg, var(--p-gray-50) 0, var(--p-gray-50) 1em, var(--p-gray-100) calc(1em + 1px), var(--p-gray-100) 2em);
  background-size: 100% 100%;
}
</style>
