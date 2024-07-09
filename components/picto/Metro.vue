<script setup lang="ts">
import LINE_1 from '~/assets/svg/lines/metro/metro_1.svg'
import LINE_2 from '~/assets/svg/lines/metro/metro_2.svg'
import LINE_3 from '~/assets/svg/lines/metro/metro_3.svg'
import LINE_3BIS from '~/assets/svg/lines/metro/metro_3bis.svg'
import LINE_4 from '~/assets/svg/lines/metro/metro_4.svg'
import LINE_5 from '~/assets/svg/lines/metro/metro_5.svg'
import LINE_6 from '~/assets/svg/lines/metro/metro_6.svg'
import LINE_7 from '~/assets/svg/lines/metro/metro_7.svg'
import LINE_7BIS from '~/assets/svg/lines/metro/metro_7bis.svg'
import LINE_8 from '~/assets/svg/lines/metro/metro_8.svg'
import LINE_9 from '~/assets/svg/lines/metro/metro_9.svg'
import LINE_10 from '~/assets/svg/lines/metro/metro_10.svg'
import LINE_11 from '~/assets/svg/lines/metro/metro_11.svg'
import LINE_12 from '~/assets/svg/lines/metro/metro_12.svg'
import LINE_13 from '~/assets/svg/lines/metro/metro_13.svg'
import LINE_14 from '~/assets/svg/lines/metro/metro_14.svg'
import LINE_15 from '~/assets/svg/lines/metro/metro_15.svg'
import LINE_16 from '~/assets/svg/lines/metro/metro_16.svg'
import LINE_17 from '~/assets/svg/lines/metro/metro_17.svg'
import LINE_18 from '~/assets/svg/lines/metro/metro_18.svg'

const {
  line,
} = defineProps<{
  line: MetroLine
}>()

const picto = computed(() => {
  switch (line) {
    case '1':
      return LINE_1
    case '2':
      return LINE_2
    case '3':
      return LINE_3
    case '3bis':
      return LINE_3BIS
    case '4':
      return LINE_4
    case '5':
      return LINE_5
    case '6':
      return LINE_6
    case '7':
      return LINE_7
    case '7bis':
      return LINE_7BIS
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
    case '15':
      return LINE_15
    case '16':
      return LINE_16
    case '17':
      return LINE_17
    case '18':
      return LINE_18
  }
})
</script>

<template>
  <img :src="picto" alt="metro" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
