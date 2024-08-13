<script setup lang="ts">
const {
  meta,
} = defineProps<{
  meta: Loop
}>()
const CLEARANCE = 16
const SIZE = 16

const lineContext = inject<LineContext>(LineContextKey)
const color = computed(() => lineContext?.color.value ?? '#000000')
const lineWidth = computed(() => lineContext?.lineWidth.value ?? 1)

const height = computed(() => Math.abs(meta.$loop.linksOffsets[0] - meta.$loop.linksOffsets[1]) * 2.75 * SIZE + (SIZE * lineWidth.value))
const width = computed(() => height.value / 2 + lineWidth.value + CLEARANCE)

const orientation = computed(() => {
  switch (meta.$loop.toward) {
    case 'LEFT':
      return [1, 0, 1]
    case 'RIGHT':
      return [0, width.value, -1]
  }
  return [0, 0]
})

const lowestOffset = computed(() => Math.min(meta.$loop.linksOffsets[0], meta.$loop.linksOffsets[1]))
const highestOffset = computed(() => Math.max(meta.$loop.linksOffsets[0], meta.$loop.linksOffsets[1]))
const globalOffset = computed(() => (lowestOffset.value + highestOffset.value) / 2)
const wrapperOffset = computed(() => `calc(${globalOffset.value} * -2.75em)`)

const path = computed(() => {
  const [arc, fromX, flip] = orientation.value
  const fromY = offsetToY(meta.$loop.linksOffsets[0])
  const toY = offsetToY(meta.$loop.linksOffsets[1])
  return `M ${fromX} ${fromY} L ${fromX + (CLEARANCE * flip)} ${fromY} A 1 1 0 0 ${arc} ${fromX + (CLEARANCE * flip)} ${toY} L ${fromX} ${toY}`
})

function offsetToY(offset: number) {
  return height.value / 2 - (offset - globalOffset.value) * (2.75 * SIZE)
}
</script>

<template>
  <div class="loop flex-shrink-0">
    <svg :width="`${width}px`" :height="`${height}px`">
      <path :d="path" :stroke="color" :stroke-width="`${lineWidth}em`" fill="transparent" stroke-linejoin="round" />
    </svg>
  </div>
</template>

<style scoped>
.loop {
  transform: translateY(v-bind(wrapperOffset));
  z-index: 0;
}
</style>
