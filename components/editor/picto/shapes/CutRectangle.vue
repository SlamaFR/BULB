<script setup lang="ts">
const {
  backgroundColor,
  foregroundColor = 'var(--blue-ratp-paper)',
  showcase = false,
} = defineProps<{
  backgroundColor: string
  foregroundColor?: string
  showcase?: boolean
}>()
</script>

<template>
  <div class="shape" :class="{ showcase }">
    <div class="layer1" />
    <div class="layer2" />
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
    background-color: v-bind(backgroundColor);
  }

  .layer2 {
    mask: url(assets/svg/masks/cut_rectangle.svg) no-repeat center;
    mask-size: 100%;
    mask-position: top;
    background-color: v-bind(foregroundColor);

    .shape.showcase & {
      background-color: rgba(0, 0, 0, .5) !important;
    }
  }
}
</style>
