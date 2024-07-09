<script setup lang="ts">
import RER_A from '~/assets/svg/lines/rer/RER_A.svg'
import RER_B from '~/assets/svg/lines/rer/RER_B.svg'
import RER_C from '~/assets/svg/lines/rer/RER_C.svg'
import RER_D from '~/assets/svg/lines/rer/RER_D.svg'
import RER_E from '~/assets/svg/lines/rer/RER_E.svg'

const {
  line,
} = defineProps<{
  line: RerLine
}>()

const picto = computed(() => {
  switch (line) {
    case 'A':
      return RER_A
    case 'B':
      return RER_B
    case 'C':
      return RER_C
    case 'D':
      return RER_D
    case 'E':
      return RER_E
  }
})
</script>

<template>
  <img :src="picto" alt="rer" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
