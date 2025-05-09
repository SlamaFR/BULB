<script setup lang="ts">
import { roundCorners } from 'svg-round-corners'
import { computed } from 'vue'

const {
  path,
  color,
  lineWidth,
  striped = false,
} = defineProps<{
  path: string
  color: string
  lineWidth: number | string
  striped?: boolean
}>()

const roundedPath = computed(() => {
  try {
    return roundCorners(path, 200).path
  } catch (e: unknown) {
    console.error(e)
    return path
  }
})
</script>

<template>
  <path
    :d="roundedPath"
    :stroke="color"
    fill="transparent"
    :stroke-width="`${lineWidth}em`"
    stroke-cap-round
    stroke-join-round
  />
  <path
    v-if="striped"
    :d="roundedPath"
    opacity="50%"
    stroke="white"
    fill="transparent"
    :stroke-width="`calc(${lineWidth}em / 3)`"
    stroke-cap-round
    stroke-join-round
  />
</template>
