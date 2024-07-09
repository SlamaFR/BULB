<script setup lang="ts">
const {
  lineColor,
} = defineProps<{
  lineColor: string
}>()
</script>

<template>
  <div class="relative line-container">
    <div class="flex flex-row gap-3 items-start">
      <slot />
    </div>
    <div class="line" />
  </div>
</template>

<style scoped>
.line-container {
  max-width: fit-content;
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: calc(100% - 5em);
  height: .375em;
  z-index: -1;
  background-color: v-bind(lineColor);
}
</style>
