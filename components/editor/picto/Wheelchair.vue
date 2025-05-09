<script setup lang="ts">
import wheelchairOff from '~/assets/svg/wheelchair-off.svg'
import wheelchair from '~/assets/svg/wheelchair.svg'

const {
  off = false,
} = defineProps<{
  off?: boolean
}>()
</script>

<template>
  <img :src="off ? wheelchairOff : wheelchair" alt="wheelchair user" class="picto">
</template>

<style scoped lang="scss">
.picto {
  width: 1em;
  height: 1em;
}
</style>
