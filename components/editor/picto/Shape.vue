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
      'circle': shape === 'CIRCLE',
      'rounded-square': shape === 'ROUNDED_SQUARE',
      'lines': shape === 'LINES',
      'rectangle': shape === 'RECTANGLE',
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

.rounded-square {
  mask: url(assets/svg/masks/rounded_square.svg) no-repeat;
}

.lines {
  mask: url(assets/svg/masks/lines.svg) no-repeat;
}

.rectangle {
  mask: url(assets/svg/masks/rectangle.svg) no-repeat;
  mask-size: 100%;
  mask-position: center;
  width: 2em;
  height: .9em;
}
</style>
