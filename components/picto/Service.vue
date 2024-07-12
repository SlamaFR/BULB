<script setup lang="ts">
import funicular from '~/assets/svg/funicular.svg'
import mainStation from '~/assets/svg/main_station.svg'

const {
  service,
} = defineProps<{
  service: Service
}>()

const icon = computed(() => {
  switch (service) {
    case 'FUNICULAR':
      return funicular
    case 'MAIN_STATION':
      return mainStation
  }
})
</script>

<template>
  <img :src="icon" alt="service" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
