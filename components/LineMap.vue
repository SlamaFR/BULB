<script setup lang="ts">
const { line } = defineProps<{
  line: Line
}>()

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
  <div ref="el" class="line-map flex flex-row gap-10 pr-10em">
    <div class="flex flex-col min-w-fit">
      <div class="w-full h-8 bg-[var(--blue-ratp-paper)]" />
      <div class="p-3">
        <div class="w-full flex flex-row gap-2 justify-center items-center text-3em">
          <Mode :mode="line.mode" />
          <LineIndex :mode="line.mode" :index="line.index" />
        </div>
      </div>
    </div>
    <div class="pt-35 pb-10 ml-1em">
      <Line :color="line.color" :stop-spacing="line.stopSpacing">
        <Stop
          v-for="(stop, index) in line.stops"
          :key="index"
          :name="stop.name"
          :subtitle="stop.subtitle"
          :subtitle-interest-point="stop.interestPoint"
          :prevent-subtitle-overlap="stop.preventSubtitleOverlapping"
          :connections="stop.connections"
          :terminus="index === 0 || index === line.stops.length - 1"
        />
      </Line>
    </div>
  </div>
</template>

<style>
.line-map {
  font-family: 'Parisine Std', sans-serif;
  background: white;
  color: var(--blue-ratp-paper);
  width: max-content;
}
</style>
