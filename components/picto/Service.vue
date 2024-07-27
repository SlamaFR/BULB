<script setup lang="ts">
import funicular from '~/assets/svg/funicular.svg'
import mainStation from '~/assets/svg/main_station.svg'
import airport from '~/assets/svg/airport/airport-generic.svg'

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
  }
  return null
})
</script>

<template>
  <img v-if="icon" :src="icon" alt="service" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
