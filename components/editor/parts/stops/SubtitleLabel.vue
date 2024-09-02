<script setup lang="ts">
const {
  subtitle,
  interestPoint = false,
} = defineProps<{
  subtitle: string
  interestPoint?: boolean
}>()
</script>

<template>
  <div class="translate-x-.75em wrapper">
    <div class="subtitle" :class="{ 'interest-point': interestPoint }">
      <span>{{ subtitle }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  height: 0;
  width: 0;

  > * {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.subtitle {
  transform: translateX(.25em);
  rotate: -30deg;
  transform-origin: bottom left;
  color: var(--blue-ratp-paper);
  font-size: .5em;
  font-weight: bold;
  font-style: italic;

  &.interest-point {
    padding: 0 .375em .0625em .375em;
    background-color: var(--place-brown);
    color: white;
    font-weight: normal;
    font-size: .375em;
  }
}

span {
  line-height: 1em;
  transform: translateY(var(--font-shift-correction));
  text-wrap: nowrap;
  rotate: -30deg;
  transform-origin: bottom left;
  height: fit-content;
}
</style>
