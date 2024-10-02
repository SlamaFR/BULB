<script setup lang="ts">
const {
  style,
} = defineProps<{
  style: LineStyle | null
}>()
</script>

<template>
  <div
    class="container" :class="{
      plain: style === 'PLAIN',
      striped: style === 'STRIPED',
    }"
  />
</template>

<style scoped lang="scss">
.container {
  width: 2em;
  height: 1em;
  background-color: var(--p-text-color);
}

.plain {
  mask: url(assets/svg/masks/line-plain.svg) no-repeat;
  mask-size: 100%;
  mask-position: center;
}

.striped {
  mask: url(assets/svg/masks/line-striped.svg) no-repeat;
  mask-size: 100%;
  mask-position: center;
}
</style>
