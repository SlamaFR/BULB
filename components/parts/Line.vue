<script setup lang="ts">
import type { Ref } from 'vue'

export interface LineContext {
  color: Ref<string>
}

const {
  color,
  stopSpacing,
} = defineProps<{
  color: string | null
  stopSpacing: number
}>()

const lineColor = computed(() => color ?? 'black')
const lineStopSpacing = computed(() => `${stopSpacing}em`)

provide<LineContext>(LineContextKey, {
  color: lineColor,
})
</script>

<template>
  <div class="relative line-container">
    <div class="stops flex flex-row items-start">
      <slot />
    </div>
    <div class="line" />
  </div>
</template>

<style scoped>
.line-container {
  width: fit-content;
}

.stops {
  gap: v-bind(lineStopSpacing);
}

.line {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  width: calc(100%);
  height: .375em;
  z-index: 0;
  background-color: v-bind(lineColor);
}
</style>
