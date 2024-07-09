<script setup lang="ts">
import type { Connection } from '~/components/Connections.vue'

const {
  stopName,
  stopColor,
  terminus = false,
  connections = [],
} = defineProps<{
  stopName: string
  stopColor: string
  terminus?: boolean
  connections?: Connection[]
}>()
</script>

<template>
  <div class="relative min-w-5em flex flex-col">
    <div class="top--.125em translate-y--100% absolute">
      <StopLabel :stop-name="stopName" :terminus="terminus" />
    </div>
    <StopDot :terminus="terminus" :connection="connections.length > 0" :color="stopColor" />
    <div class="bottom-0 left-0 translate-y-100% translate-x--.5em absolute">
      <Connections :connections="connections" />
    </div>
  </div>
</template>
