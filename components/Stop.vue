<script setup lang="ts">
import type { Connection } from '~/components/Connections.vue'

const {
  name,
  placeName = null,
  color,
  terminus = false,
  connections = [],
} = defineProps<{
  name: string
  placeName?: string | null
  color: string
  terminus?: boolean
  connections?: Connection[]
}>()
</script>

<template>
  <div class="relative min-w-3.5em flex flex-col">
    <div class="names" :class="{ 'place-name': placeName, terminus }">
      <div class="stop-label-wrapper">
        <StopLabel :stop-name="name" :terminus="terminus" />
      </div>
      <div v-if="placeName" class="place-label-wrapper" :class="{ 'place-name': placeName, terminus }">
        <PlaceLabel :place-name="placeName" />
      </div>
    </div>
    <StopDot :terminus="terminus" :connection="connections.length > 0" :color="color" />
    <div class="translate-x--.5em">
      <Connections :connections="connections" />
    </div>
  </div>
</template>

<style scoped>
.names.place-name.terminus {
  transform: translateX(calc(-1.65em / 2));
}

.stop-label-wrapper {
  position: absolute;
  top: -.125em;
  transform: translateY(-100%);
}

.place-label-wrapper {
  position: absolute;
  left: 1.45em;
  top: -.25em;
  transform: translateY(-100%);

  &.place-name.terminus {
    left: 1.65em;
  }
}
</style>
