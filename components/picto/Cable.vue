<script setup lang="ts">
import LINE_1 from '~/assets/svg/lines/cable/cable_1.svg'

const {
  line,
} = defineProps<{
  line: CableLine
}>()

const picto = computed(() => {
  switch (line) {
    case '1':
      return LINE_1
  }
})
</script>

<template>
  <img :src="picto" alt="cable" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
