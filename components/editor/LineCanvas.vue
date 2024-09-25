<script setup lang="ts">
const { mode, index, topology, color, lineWidth, mapSize } = storeToRefs(useLine())

provide<LineContext>(LineContextKey, {
  color: computed(() => color.value ?? '#000000'),
  lineWidth,
})

const version = useVersion()
const exportMap = useExportMap()
const el = ref()

const exportSignal = useEventBus(ExportSignal)

function doExport() {
  exportMap(el.value)
}

onMounted(() => exportSignal.on(doExport))
onBeforeUnmount(() => exportSignal.off(doExport))
</script>

<template>
  <div class="canvas">
    <div class="flex-grow flex items-center overflow-y-auto">
      <div ref="el" class="relative content bg-white pr-10em flex flex-row" :style="{ minHeight: `${mapSize}em` }">
        <div class="flex flex-col min-w-fit">
          <div class="w-full h-8 bg-[var(--blue-ratp-paper)]" />
          <div class="p-3">
            <div class="w-full flex flex-row gap-2 justify-center items-center text-3em">
              <Mode :mode="mode" />
              <LineIndex :mode="mode" :index="index" />
            </div>
          </div>
        </div>
        <SectionsGroup
          v-model="topology"
          class="w-max-content min-h-15em p-1em pt-20"
        />

        <div class="absolute bottom-.375em left-.375em text-[var(--blue-ratp-paper)]">
          <div class="text-.2em flex flex-col line-height-1.75">
            <span>Créé à l’aide de BULB • bulb.slama.io</span>
            <span class="opacity-50 text-.5em">Version {{ version }}</span>
            <hr class="my-.5">
            <span class="text-.825em">Non affilié à la RATP, à Île-de-France Mobilités ou à toute autre société. Les pictogrammes ainsi que les polices utilisés demeurent la propriété intellectuelle exclusive des entités susmentionnées.</span>
            <span class="italic text-.75em">Not affiliated with RATP, Île-de-France Mobilités or any other company. The pictograms and fonts used remain the exclusive intellectual property of the aforementioned entities.</span>
          </div>
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
.canvas {
  background-color: white;
  border: 1px solid var(--blue-ratp-paper);
  color: var(--p-gray-700);
  height: 100%;

  display: flex;
  flex-direction: column;
}

.content {
  font-size: var(--font-size);
  font-family: 'Parisine Std', sans-serif;
  outline: 1px dashed var(--p-gray-200);
  box-sizing: content-box;
}

.toolbox {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
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
