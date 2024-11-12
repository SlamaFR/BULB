<script setup lang="ts">
import { computed } from 'vue'
import wheelchair from '~/assets/svg/wheelchair.svg'
import wheelchairOff from '~/assets/svg/wheelchair-off.svg'

const {
  off = false,
} = defineProps<{
  off?: boolean
}>()

const picto = computed(() => {
  if (off) return wheelchairOff
  return wheelchair
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
