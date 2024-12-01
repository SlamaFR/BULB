<script setup lang="ts">
import { computed } from 'vue'

const {
  mode,
} = defineProps<{
  mode: Mode | null
}>()

const circle = computed(() => mode === 'METRO')
const roundRectangle = computed(() => ['RER', 'TER', 'TRAIN', 'TRAIN_RER'].includes(mode ?? ''))
const square = computed(() => ['BOAT', 'BUS', 'BRT', 'CABLE', 'NOCTILIEN', 'TRAM', 'VELO'].includes(mode ?? ''))
</script>

<template>
  <div class="relative picto-wrapper">
    <div class="absolute" :class="{ circle, 'round-rectangle': roundRectangle, square }" />
    <MBoat v-if="mode === 'BOAT'" />
    <MBRT v-if="mode === 'BRT'" />
    <MBus v-if="mode === 'BUS'" />
    <MCable v-if="mode === 'CABLE'" />
    <MMetro v-if="mode === 'METRO'" />
    <MNoctilien v-if="mode === 'NOCTILIEN'" />
    <MRER v-if="mode === 'RER'" />
    <MTram v-if="mode === 'TRAM'" />
    <MTransilien v-if="mode === 'TRAIN'" />
    <MVelo v-if="mode === 'VELO'" />
  </div>
</template>

<style scoped lang="scss">
.picto-wrapper {
  min-width: 1em;
  min-height: 1em;
}

.circle {
  border-radius: 50%;
  background: white;
  top: .0625em;
  left: .0625em;
  min-width: .875em;
  min-height: .875em;
}

.round-rectangle {
  border-radius: .125em;
  background: white;
  top: .0625em;
  left: .0625em;
  min-width: .875em;
  min-height: .875em;
}

.square {
  border-radius: .01em;
  background: white;
  top: .025em;
  min-width: 1em;
  min-height: .95em;
}
</style>
