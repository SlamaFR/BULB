<script setup lang="ts">
const { line } = defineProps<{
  line: Line
}>()
</script>

<template>
  <div class="flex flex-row gap-15">
    <div class="bg-red">
      e
    </div>
    <div class="pt-35">
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
