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
    <div class="absolute dot dynamic-part" :class="{ terminus, connection: connection || closed }" />
    <img v-if="closed" class="absolute closed" src="~/assets/svg/closed.svg">
  </div>
</template>

<style scoped lang="scss">
.dot {
  width: 1.125em;
  height: 1.125em;
  border-radius: 50%;
  background-color: v-bind(dotColor);

  transition: filter .2s ease;
  &:hover {
    filter: brightness(.5);
  }

  &.connection {
    background-color: white;
    border: .15em solid black;
  }

  &.terminus {
    background-color: white;
    border: .15em solid black;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: .5em;
      height: .5em;
      background-color: v-bind(color);
      border-radius: 50%;
    }
  }
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
