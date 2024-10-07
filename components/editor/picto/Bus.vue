<script setup lang="ts">
import TVM from '~/assets/svg/lines/bus/tvm.svg'
import TZEN_1 from '~/assets/svg/lines/bus/tzen1.svg'
import TZEN_2 from '~/assets/svg/lines/bus/tzen2.svg'
import TZEN_3 from '~/assets/svg/lines/bus/tzen3.svg'
import TZEN_4 from '~/assets/svg/lines/bus/tzen4.svg'
import TZEN_5 from '~/assets/svg/lines/bus/tzen5.svg'
import TZEN_6 from '~/assets/svg/lines/bus/tzen6.svg'

const {
  line,
} = defineProps<{
  line: BusLine
}>()

const picto = computed(() => {
  switch (line) {
    case 'tzen1':
      return TZEN_1
    case 'tzen2':
      return TZEN_2
    case 'tzen3':
      return TZEN_3
    case 'tzen4':
      return TZEN_4
    case 'tzen5':
      return TZEN_5
    case 'tzen6':
      return TZEN_6
    case 'tvm':
      return TVM
  }
  return null
})
</script>

<template>
  <img v-if="picto" :src="picto" alt="cable" class="picto">
</template>

<style scoped lang="scss">
.picto {
  min-width: 2em;
  width: 2em;
  height: .9em;
}
</style>
