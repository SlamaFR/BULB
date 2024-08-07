<script setup lang="ts">
const {
  meta,
} = defineProps<{
  meta: Loop
}>()

const lineContext = inject<LineContext>(LineContextKey)
const color = computed(() => lineContext?.color.value ?? '#000000')

const maxHeight = computed(() => Math.abs(meta.$loop.linksOffsets[0] - meta.$loop.linksOffsets[1]) * 2.75 * 16 + (16))
const flip = computed(() => {
  switch (meta.$loop.toward) {
    case 'LEFT':
      return 1
    case 'RIGHT':
      return 0
  }
  return 0
})
const path = computed(() => {
  const fromY = offsetToY(meta.$loop.linksOffsets[0])
  const toY = offsetToY(meta.$loop.linksOffsets[1])
  return `M 0 ${fromY} L 16 ${fromY} A 1 1 0 0 ${flip.value} 16 ${toY} L 0 ${toY}`
})

function offsetToY(offset: number) {
  return maxHeight.value / 2 - offset * (2.75 * 16)
}
</script>

<template>
  <div class="outline-green outline-1 bg-green/25 outline-solid outline-dashed flex-shrink-0">
    <svg :width="`${maxHeight / 3 * 2}px`" :height="`${maxHeight}px`">
      <path :d="path" :stroke="color" stroke-width=".375em" fill="transparent" stroke-linejoin="round" />
    </svg>
  </div>
</template>
