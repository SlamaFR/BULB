<script setup lang="ts">
const {
  value,
  interestPoint = false,
} = defineProps<{
  value: string
  interestPoint?: boolean
}>()
</script>

<template>
  <div class="label" :class="{ 'interest-point': interestPoint }">
    <div>{{ value }}</div>
  </div>
</template>

<style scoped lang="scss">
.label {
  cursor: pointer;
  pointer-events: all;
  height: calc(1em + .25em + .25em); // 1.375em
  line-height: 1;
  white-space-collapse: preserve-breaks;
  text-wrap: nowrap;
  width: fit-content;
  rotate: -30deg;
  transform-origin: bottom left;
  color: var(--blue-ratp-paper);

  font-size: .4375em;
  font-weight: bold;
  font-style: italic;

  &.interest-point {
    padding: .25em .375em;
    background-color: var(--place-brown);
    color: white;
    font-weight: normal;

    & > div {
      transform: translateY(var(--font-shift-correction));
    }
  }

  & > div {
    transform: translate(-.5em, var(--font-shift-correction));
  }
}
</style>
