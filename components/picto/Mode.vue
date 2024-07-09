<script setup lang="ts">
import BOAT from '~/assets/svg/modes/boat.svg'
import BUS from '~/assets/svg/modes/bus.svg'
import CABLE from '~/assets/svg/modes/cable.svg'
import METRO from '~/assets/svg/modes/metro.svg'
import RER from '~/assets/svg/modes/rer.svg'
import TRAIN from '~/assets/svg/modes/train.svg'
import TRAIN_RER from '~/assets/svg/modes/train_rer.svg'
import TRAM from '~/assets/svg/modes/tram.svg'
import VELO from '~/assets/svg/modes/velo.svg'

const {
  mode,
} = defineProps<{
  mode: Mode
}>()

const picto = computed(() => {
  switch (mode) {
    case 'BOAT':
      return BOAT
    case 'BUS':
      return BUS
    case 'CABLE':
      return CABLE
    case 'METRO':
      return METRO
    case 'RER':
      return RER
    case 'TRAIN':
      return TRAIN
    case 'TRAIN_RER':
      return TRAIN_RER
    case 'TRAM':
      return TRAM
    case 'VELO':
      return VELO
  }
})
const pictoUrl = computed(() => `url(${picto.value})`)
</script>

<template>
  <div class="picto" />
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
  background-color: var(--blue-ratp-paper);
  mask: v-bind(pictoUrl) no-repeat center;
}
</style>
