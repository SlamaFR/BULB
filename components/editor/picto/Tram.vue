<script setup lang="ts">
import { computed } from 'vue'
import LINE_1 from '~/assets/svg/lines/tram/tram_T1.svg'
import LINE_2 from '~/assets/svg/lines/tram/tram_T2.svg'
import LINE_3A from '~/assets/svg/lines/tram/tram_T3a.svg'
import LINE_3B from '~/assets/svg/lines/tram/tram_T3b.svg'
import LINE_4 from '~/assets/svg/lines/tram/tram_T4.svg'
import LINE_5 from '~/assets/svg/lines/tram/tram_T5.svg'
import LINE_6 from '~/assets/svg/lines/tram/tram_T6.svg'
import LINE_7 from '~/assets/svg/lines/tram/tram_T7.svg'
import LINE_8 from '~/assets/svg/lines/tram/tram_T8.svg'
import LINE_9 from '~/assets/svg/lines/tram/tram_T9.svg'
import LINE_10 from '~/assets/svg/lines/tram/tram_T10.svg'
import LINE_11 from '~/assets/svg/lines/tram/tram_T11.svg'
import LINE_12 from '~/assets/svg/lines/tram/tram_T12.svg'
import LINE_13 from '~/assets/svg/lines/tram/tram_T13.svg'
import LINE_14 from '~/assets/svg/lines/tram/tram_T14.svg'

const {
  line,
} = defineProps<{
  line: TramLine
}>()

const picto = computed(() => {
  switch (line) {
    case '1':
      return LINE_1
    case '2':
      return LINE_2
    case '3a':
      return LINE_3A
    case '3b':
      return LINE_3B
    case '4':
      return LINE_4
    case '5':
      return LINE_5
    case '6':
      return LINE_6
    case '7':
      return LINE_7
    case '8':
      return LINE_8
    case '9':
      return LINE_9
    case '10':
      return LINE_10
    case '11':
      return LINE_11
    case '12':
      return LINE_12
    case '13':
      return LINE_13
    case '14':
      return LINE_14
  }
  return null
})
</script>

<template>
  <img v-if="picto" :src="picto" alt="metro" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
