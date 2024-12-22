<script setup lang="ts">
import bulletTrain from 'assets/svg/services/bullet_train.svg'
import funicular from 'assets/svg/services/funicular.svg'
import longDistanceBus from 'assets/svg/services/long_distance_bus.svg'
import mainStation from 'assets/svg/services/main_station.svg'
import suburbanTrain from 'assets/svg/services/suburban_train.svg'
import ter from 'assets/svg/services/ter.svg'
import tgv from 'assets/svg/services/tgv.svg'
import { computed } from 'vue'
import airport from '~/assets/svg/airport/airport-generic.svg'
import cdgExpress from '~/assets/svg/services/cdg_express.svg'
import cdgval from '~/assets/svg/services/cdgval.svg'
import orlyBus from '~/assets/svg/services/orlybus.svg'
import orlyval from '~/assets/svg/services/orlyval.svg'
import orlyvalLarge from '~/assets/svg/services/orlyval_lg.svg'
import orlyvalLarge2 from '~/assets/svg/services/orlyval_lg_2.svg'
import roissyBus from '~/assets/svg/services/roissybus.svg'

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
    case 'BULLET_TRAIN':
      return bulletTrain
    case 'SUBURBAN_TRAIN':
      return suburbanTrain
    case 'TGV':
      return tgv
    case 'TER':
      return ter
    case 'LONG_DISTANCE_BUS':
      return longDistanceBus
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
    case 'ORLYVAL_LARGE_2':
      return orlyvalLarge2
    case 'CDG_EXPRESS':
      return cdgExpress
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
