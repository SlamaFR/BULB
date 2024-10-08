<script setup lang="ts">
const { version, line } = storeToRefs(useProject())
const exportMap = useExportMap()
const exportSignal = useEventBus(ExportSignal)
const { projectMinimumVersion } = useVersion()
const checkVersion = useProjectVersionCheck()

const el = ref()
const error = ref(false)

provide<LineContext>(LineContextKey, {
  color: computed(() => line.value.color ?? '#000000'),
  lineWidth: computed(() => line.value.lineWidth ?? 1),
})

function doExport() {
  exportMap(el.value)
}

onMounted(() => {
  exportSignal.on(doExport)
  checkVersion(version.value, projectMinimumVersion)
})
onBeforeUnmount(() => exportSignal.off(doExport))
</script>

<template>
  <div class="map-editor">
    <div class="flex flex-grow overflow-x-auto">
      <div class="deadzone">
        <div ref="el">
          <NuxtErrorBoundary v-if="!error" @error="error = true">
            <LineCanvas />
          </NuxtErrorBoundary>
          <LineCanvasError v-if="error" />
        </div>
      </div>
    </div>
    <div class="toolbox">
      <LineSectionToolbox />
      <ToolboxSep />
      <BranchToolbox />
      <div class="flex-grow" />
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

  display: flex;
  flex-direction: column;
}

.deadzone {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  padding: 5em;
  background: repeating-linear-gradient(45deg, var(--p-gray-50) 0, var(--p-gray-50) 1em, var(--p-gray-100) calc(1em + 1px), var(--p-gray-100) 2em);
  background-size: 100% 100%;
}

.toolbox {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top: 1px solid var(--p-slate-200);
  overflow-x: auto;
  position: sticky;
  bottom: 0;
  z-index: 100;
  background: var(--p-slate-50);

  & > * {
    flex-shrink: 0;
  }
}
</style>
