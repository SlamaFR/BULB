<script setup lang="ts">
import { computed } from 'vue'
import TRAIN_H from '~/assets/svg/lines/train/train_H.svg'
import TRAIN_J from '~/assets/svg/lines/train/train_J.svg'
import TRAIN_K from '~/assets/svg/lines/train/train_K.svg'
import TRAIN_L from '~/assets/svg/lines/train/train_L.svg'
import TRAIN_N from '~/assets/svg/lines/train/train_N.svg'
import TRAIN_P from '~/assets/svg/lines/train/train_P.svg'
import TRAIN_R from '~/assets/svg/lines/train/train_R.svg'
import TRAIN_U from '~/assets/svg/lines/train/train_U.svg'
import TRAIN_V from '~/assets/svg/lines/train/train_V.svg'

const {
  line,
} = defineProps<{
  line: TrainLine
}>()

const picto = computed(() => {
  switch (line) {
    case 'H':
      return TRAIN_H
    case 'J':
      return TRAIN_J
    case 'K':
      return TRAIN_K
    case 'L':
      return TRAIN_L
    case 'N':
      return TRAIN_N
    case 'P':
      return TRAIN_P
    case 'R':
      return TRAIN_R
    case 'U':
      return TRAIN_U
    case 'V':
      return TRAIN_V
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
