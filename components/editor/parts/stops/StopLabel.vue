<script setup lang="ts">
const {
  stopName,
  terminus = false,
} = defineProps<{
  stopName: string
  terminus?: boolean
}>()
</script>

<template>
  <div class="label" :class="{ terminus }">
    <div>{{ stopName }}</div>
  </div>
</template>

<style scoped lang="scss">
.label {
  cursor: pointer;
  pointer-events: all;
  font-weight: bold;
  height: 1em;
  line-height: 1.125;
  white-space-collapse: preserve-breaks;
  text-wrap: nowrap;
  width: fit-content;
  rotate: -30deg;
  transform-origin: bottom left;
  color: var(--blue-ratp-paper);
  z-index: 100;

  &.terminus {
    height: fit-content;
    padding: .125em .25em;
    background-color: var(--blue-ratp-paper);
    color: white;
  }

  & > div {
    transform: translateY(var(--font-shift-correction));
  }
}
</style>
