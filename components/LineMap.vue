<script setup lang="ts">
const { line } = defineProps<{
  line: Line
}>()
</script>

<template>
  <div class="line-map flex flex-row gap-10">
    <div class="flex flex-col min-w-fit">
      <div class="w-full h-8 bg-[var(--blue-ratp-paper)]" />
      <div class="p-3">
        <div class="w-full flex flex-row gap-2 justify-center items-center text-3em">
          <Mode :mode="line.mode" />
          <Metro v-if="line.mode === 'METRO'" :line="line.index" />
          <ExpressTrain v-else-if="line.mode === 'RER'" :line="line.index" />
          <Train v-else-if="line.mode === 'TRAIN'" :line="line.index" />
          <Tram v-else-if="line.mode === 'TRAM'" :line="line.index" />
        </div>
      </div>
    </div>
    <div class="pt-35 ml-1em">
      <Line :color="line.color">
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
}
</style>
