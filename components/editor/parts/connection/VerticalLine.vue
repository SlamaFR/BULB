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
  <div class="sep-line" :class="{ large, inner }" />
</template>

<style scoped lang="scss">
.sep-line {
  background: var(--blue-ratp-paper);
  display: block;
  width: .0625em;
  min-height: .25em;
  border-radius: .25em;
  height: calc(100%);

  &.large {
    min-height: .375em;
  }

  :not(.reverse) > .connection-groups .connection-group:last-child & {
    display: none;
  }

  .reverse > .connection-groups .connection-group:last-child & {
    min-height: .375em;
  }
}
</style>
