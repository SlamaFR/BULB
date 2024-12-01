<script setup lang="ts">
const {
  shape,
  color,
  showcase = false,
} = defineProps<{
  shape: IndexShape | null
  color: string
  showcase?: boolean
}>()
</script>

<template>
  <RoundedSquare
    v-if="shape === 'ROUNDED_SQUARE'"
    :color="color"
  />
  <Lines
    v-else-if="shape === 'LINES'"
    :color="color"
  />
  <Rectangle
    v-else-if="shape === 'RECTANGLE'"
    :color="color"
  />
  <CutRectangle
    v-else-if="shape === 'CUT_RECTANGLE'"
    :background-color="color"
    :foreground-color="showcase ? 'rgba(0, 0, 0, .5)' : undefined"
  />
  <Circle
    v-else
    :color="color"
  />
</template>
