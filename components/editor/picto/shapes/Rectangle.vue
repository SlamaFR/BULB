<script setup lang="ts">
const {
  color,
} = defineProps<{
  color: string
}>()
</script>

<template>
  <div class="shape">
    <div class="layer1" />
  </div>
</template>

<style scoped lang="scss">
.shape {
  position: relative;
  min-width: 2em;
  width: 2em;
  min-height: .9em;
  height: .9em;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .layer1 {
    mask: url(assets/svg/masks/rectangle.svg) no-repeat center;
    mask-size: 100%;
    mask-position: top;
    background-color: v-bind(color);
  }
}
</style>
