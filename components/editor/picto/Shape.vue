<script setup lang="ts">
const {
  shape,
  color,
} = defineProps<{
  shape: IndexShape | null
  color: string
}>()
</script>

<template>
  <div
    class="container" :class="{
      circle: shape === 'CIRCLE',
      square: shape === 'SQUARE',
      lines: shape === 'LINES',
    }"
  />
</template>

<style scoped lang="scss">
.container {
  width: 1em;
  height: 1em;
  background-color: v-bind(color);
}

.circle {
  mask: url(assets/svg/masks/circle.svg) no-repeat;
}

.square {
  mask: url(assets/svg/masks/square.svg) no-repeat;
}

.lines {
  mask: url(assets/svg/masks/lines.svg) no-repeat;
}
</style>
