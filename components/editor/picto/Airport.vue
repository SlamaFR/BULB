<script setup lang="ts">
import BOTH from '~/assets/svg/airport/airport-both.svg'
import CDG from '~/assets/svg/airport/airport-cdg.svg'
import GENERIC from '~/assets/svg/airport/airport-generic.svg'
import ORY from '~/assets/svg/airport/airport-ory.svg'

const {
  airport,
} = defineProps<{
  airport: Airport
}>()

const icon = computed(() => {
  switch (airport) {
    case 'ORY':
      return ORY
    case 'CDG':
      return CDG
    case 'BOTH':
      return BOTH
  }
  return GENERIC
})
</script>

<template>
  <div class="w-1em h-1em flex justify-center items-center">
    <img :src="icon" alt="Airport" class="picto">
  </div>
</template>

<style scoped lang="scss">
.picto {
  width: .875em;
  height: .875em;
}
</style>
