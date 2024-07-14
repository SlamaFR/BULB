<script setup lang="ts">
const {
  mode,
} = defineProps<{
  mode: Mode
}>()
</script>

<template>
  <div
    class="picto" :class="{
      boat: mode === 'BOAT',
      bus: mode === 'BUS',
      cable: mode === 'CABLE',
      metro: mode === 'METRO',
      rer: mode === 'RER',
      ter: mode === 'TER',
      train: mode === 'TRAIN',
      train_rer: mode === 'TRAIN_RER',
      tram: mode === 'TRAM',
      velo: mode === 'VELO',
    }"
  />
</template>

<style scoped lang="scss">
.picto {
  min-width: 1em;
  min-height: 1em;
  background-color: var(--blue-ratp-paper);
}

.boat {
  mask: url(assets/svg/modes/boat.svg) no-repeat center;
}

.bus {
  mask: url(assets/svg/modes/bus.svg) no-repeat center;
}

.cable {
  mask: url(assets/svg/modes/cable.svg) no-repeat center;
}

.metro {
  mask: url(assets/svg/modes/metro.svg) no-repeat center;
}

.rer {
  mask: url(assets/svg/modes/rer.svg) no-repeat center;
}

.ter {
  mask: url(assets/svg/modes/ter.svg) no-repeat center;
}

.train {
  mask: url(assets/svg/modes/train.svg) no-repeat center;
}

.train_rer {
  mask: url(assets/svg/modes/train_rer.svg) no-repeat center;
}

.tram {
  mask: url(assets/svg/modes/tram.svg) no-repeat center;
}

.velo {
  mask: url(assets/svg/modes/velo.svg) no-repeat center;
}
</style>
