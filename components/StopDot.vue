<script setup lang="ts">
const {
  color,
  terminus = false,
  connection = false,
} = defineProps<{
  color: string
  terminus?: boolean
  connection?: boolean
}>()
</script>

<template>
  <div class="dot" :class="{ terminus, connection }" />
</template>

<style scoped lang="scss">
.dot {
  width: 1.125em;
  height: 1.125em;
  border-radius: 50%;
  background-color: v-bind(color);
  transform: translateX(-50%);

  &.connection {
    background-color: white;
    border: .1875em solid black;
  }

  &.terminus {
    background-color: v-bind(color);
    border: .1875em solid black;
    outline: .125em solid white;
    outline-offset: calc(.1875em * -2 + 0.0625em);
  }
}
</style>
