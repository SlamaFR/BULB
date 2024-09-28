<script setup lang="ts">
import funicular from 'assets/svg/services/funicular.svg'
import mainStation from 'assets/svg/services/main_station.svg'
import airport from '~/assets/svg/airport/airport-generic.svg'
import roissyBus from '~/assets/svg/services/roissybus.svg'
import orlyBus from '~/assets/svg/services/orlybus.svg'
import cdgval from '~/assets/svg/services/cdgval.svg'
import orlyval from '~/assets/svg/services/orlyval.svg'
import orlyvalLarge from '~/assets/svg/services/orlyval_lg.svg'

const {
  service,
} = defineProps<{
  service: Service | null
}>()

const icon = computed(() => {
  switch (service) {
    case 'FUNICULAR':
      return funicular
    case 'MAIN_STATION':
      return mainStation
    case 'AIRPORT':
      return airport
    case 'ROISSY_BUS':
      return roissyBus
    case 'ORLY_BUS':
      return orlyBus
    case 'CDGVAL':
      return cdgval
    case 'ORLYVAL':
      return orlyval
    case 'ORLYVAL_LARGE':
      return orlyvalLarge
  }
  return null
})
</script>

<template>
  <img v-if="icon" :src="icon" alt="service" class="picto">
</template>

<style scoped lang="scss">
.picto {
  //width: 1em;
  height: 1em;
}
</style>
