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
  <div class="stop-label">
    <div class="label" :class="{ terminus }">
      <div>{{ stopName }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stop-label {
  font-weight: bold;
}

.label {
  height: 1em;
  line-height: 1.125;
  white-space: pre-line;
  text-wrap: nowrap;
  width: fit-content;
  rotate: -30deg;
  transform-origin: bottom left;

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
