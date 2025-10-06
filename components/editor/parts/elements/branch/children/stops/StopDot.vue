<script setup lang="ts">
import { computed, inject } from 'vue'
import { LineContextKey } from '~/utils/symbols'

const {
  color,
  terminus = false,
  connection = false,
  closed = false,
} = defineProps<{
  color: string
  terminus?: boolean
  connection?: boolean
  closed?: boolean
}>()

const lineContext = inject<LineContext>(LineContextKey)!
const dotColor = computed(() => {
  if (lineContext.dotsColorPolicy.value === 'WHITE') {
    return 'white'
  }
  return color
})
</script>

<template>
  <div class="w-1em h-1em flex items-center justify-center relative">
    <div class="absolute dot dynamic-part" :class="{ terminus, connection: connection || closed }">
      <span v-if="terminus" class="inner-dot" :style="{ backgroundColor: dotColor }"></span>
    </div>
    <img v-if="closed" class="absolute closed" src="~/assets/svg/closed.svg">
  </div>
</template>

<style scoped lang="scss">
.dot {
  width: 1.125em;
  height: 1.125em;
  border-radius: 50%;
  background-color: v-bind(dotColor);
  border: calc(2em / 16) solid v-bind(color);

  transition: filter .2s ease;
  &:hover {
    filter: brightness(.5);
  }

  &.connection {
    background-color: white;
    border: calc(2em / 16) solid black;
  }

  &.terminus {
    background-color: v-bind(color);
    border: calc(2em / 16) solid black;
    box-shadow: inset 0 0 0 calc(3em / 16) white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.inner-dot {
  width: 0.55em;
  height: 0.55em;
  border-radius: 50%;
  box-shadow: 0 0 0 0 transparent;
  pointer-events: none;
}

.closed {
  display: flex;
  width: 1em;
  height: 1em;
  scale: 1.375;
  object-fit: cover;
  pointer-events: none;
}
</style>
