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
  <div class="place-label">
    <div class="label" :class="{ 'interest-point': interestPoint }">
      <div>{{ value }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stop-label {
  font-weight: 600;
  height: 1em;
}

.label {
  height: calc(1em + .1875em + .1875em); // 1.375em
  line-height: 1;
  white-space-collapse: preserve-breaks;
  text-wrap: nowrap;
  width: fit-content;
  rotate: -30deg;
  transform-origin: bottom left;

  font-size: .45em;
  font-weight: bold;
  font-style: italic;

  &.interest-point {
    padding: .1875em .25em;
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
