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
    border: .15em solid black;
  }

  &.terminus {
    background-color: v-bind(color);
    border: .3em solid black;
    outline: .2em solid white;
    outline-offset: calc(-.35em);
  }
}
</style>
