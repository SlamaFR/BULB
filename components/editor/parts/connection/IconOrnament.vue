<script setup lang="ts">
import { isAirport, isAirportName, isText } from '~/utils/types'

const {
  ornament = null,
  walk = false,
} = defineProps<{
  ornament?: Ornament | null
  walk?: boolean
}>()
</script>

<template>
  <div
    class="container"
    :class="{
      'right': ornament?.position === 'RIGHT',
      'bottom': ornament?.position === 'BOTTOM',
      'with-pedestrian': walk,
    }"
  >
    <div class="flex flex-row items-center gap-1">
      <Pedestrian v-if="walk" />
      <slot />
    </div>
    <div v-if="ornament && isAirport(ornament)" class="relative">
      <div class="joint" />
      <Airport :airport="ornament.$airportOrnament.airport" />
    </div>
    <div v-if="ornament && isAirportName(ornament)" class="relative">
      <AirportNameOrnament :name="ornament.$airportNameOrnament.name" />
    </div>
    <div v-if="ornament && isText(ornament)" class="text-ornament">
      <span>{{ ornament.$textOrnament.text }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  gap: .125em;
  width: max-content;

  &.bottom {
    flex-direction: column;
  }

  &.left {
    flex-direction: row-reverse;
  }

  &.pedestrian {
    align-items: flex-end;
  }
}

.with-pedestrian {
  height: 1em;
  grid-column: span 2;
}

.right {
  height: 1em;
  min-width: 2.125em;
  grid-column: span 2;

  &.pedestrian {
    grid-column: span 3;
  }
}

.bottom {
  height: 2.125em;
  grid-row: span 2;

  &.pedestrian {
    grid-column: span 2;
  }
}

.text-ornament {
  display: flex;
  align-items: center;
  line-height: 1;
  font-size: .375em;
  white-space-collapse: preserve-breaks;
  text-wrap: nowrap;
  color: var(--blue-ratp-paper);
}

.bottom .joint {
  position: absolute;
  left: 50%;
  min-width: .0625em;
  max-width: .0625em;
  width: .0625em;
  height: .25em;
  background-color: var(--gray);
  transform: translate(-50%, -50%);
  z-index: -1;
}

.right .joint {
  position: absolute;
  top: 50%;
  width: .25em;
  min-height: .0625em;
  max-height: .0625em;
  height: .0625em;
  background-color: var(--gray);
  transform: translate(-50%, -50%);
  z-index: -1;
}
</style>
