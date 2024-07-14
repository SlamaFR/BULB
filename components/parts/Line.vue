<script setup lang="ts">
import type { Ref } from 'vue'

export interface LineContext {
  color: Ref<string>
}

const {
  color,
} = defineProps<{
  color: string
}>()

provide<LineContext>(LineContextKey, {
  color: toRef(() => color),
})
</script>

<template>
  <div class="relative line-container">
    <div class="flex flex-row items-start gap-4">
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
  z-index: 0;
  background-color: v-bind(color);
}
</style>
