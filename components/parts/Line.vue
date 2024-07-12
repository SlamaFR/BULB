<script setup lang="ts">
export interface LineContext {
  color: string
}

const {
  color,
} = defineProps<{
  color: string
}>()

provide<LineContext>(LineContextKey, {
  color,
})
</script>

<template>
  <div class="relative line-container">
    <div class="flex flex-row items-start">
      <slot />
    </div>
    <div class="line" />
  </div>
</template>

<style scoped>
.line-container {
  width: fit-content;
}

.line {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  width: calc(100%);
  height: .375em;
  z-index: -1;
  background-color: v-bind(color);
}
</style>
