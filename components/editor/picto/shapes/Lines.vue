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
  min-width: 1em;
  width: 1em;
  min-height: 1em;
  height: 1em;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .layer1 {
    mask: url(assets/svg/masks/lines.svg) no-repeat center;
    mask-size: 100%;
    background-color: v-bind(color);
  }
}
</style>
