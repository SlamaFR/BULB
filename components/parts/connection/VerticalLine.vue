<script setup lang="ts">
const {
  large = false,
  inner = false,
} = defineProps<{
  large?: boolean
  inner?: boolean
}>()
</script>

<template>
  <div class="sep-line" :class="{ large }" />
</template>

<style scoped lang="scss">
.sep-line {
  min-width: .0625em;
  max-width: .0625em;
  width: .0625em;
  margin: .0625em 0 .0625em .5em;
  transform: translateX(-50%);
  background-color: var(--blue-ratp-paper);
  border-radius: .25em;

  &.large {
    height: .75em;
  }

  &.inner {
    position: absolute;
    height: calc(100% - 1em - (.0625em * 2));
  }
}
</style>
