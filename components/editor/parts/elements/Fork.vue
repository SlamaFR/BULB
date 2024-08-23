<script setup lang="ts">
const {
  meta,
} = defineProps<{
  meta: Fork
}>()

const el = ref()
const sizeFactor = useCssVar('--base-size', el)

const CLEARANCE = 36
const SIZE = 16 * Number.parseFloat(sizeFactor.value)
const SLOPE_WIDTH = SIZE * 4.75

const lineContext = inject<LineContext>(LineContextKey)
const color = computed(() => lineContext?.color.value ?? '#000000')
const lineWidth = computed(() => lineContext?.lineWidth.value ?? 1)

const maxHeight = computed(() => {
  return (meta.$fork.offsetMultiplier ?? 1) * Math.abs(meta.$fork.linksOffset[0] - meta.$fork.linksOffset[1]) * 2.75 * SIZE + (SIZE * lineWidth.value)
})

const normalWidth = computed(() => SLOPE_WIDTH * (meta.$fork.offsetMultiplier ?? 1) + CLEARANCE * 2)

const orientation = computed(() => {
  switch (meta.$fork.toward) {
    case 'LEFT':
      return [normalWidth.value, 0, -1]
    case 'RIGHT':
      return [0, normalWidth.value, 1]
  }
  return [0, 0, 0]
})

const lowestOffset = computed(() => Math.min(meta.$fork.linksOffset[0], meta.$fork.linksOffset[1]))
const highestOffset = computed(() => Math.max(meta.$fork.linksOffset[0], meta.$fork.linksOffset[1]))
const offset = computed(() => (lowestOffset.value + highestOffset.value) / 2)
const wrapperOffset = computed(() => `calc(${offset.value * (meta.$fork.offsetMultiplier ?? 1)} * -2.75em)`)

function getPath(fromOffset: number, toOffset: number) {
  const [fromX, toX, flip] = orientation.value
  const fromY = maxHeight.value / 2 - (fromOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  const toY = maxHeight.value / 2 - (toOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  return `M ${fromX} ${fromY} L ${fromX + CLEARANCE * flip} ${fromY} L ${toX - CLEARANCE * flip} ${toY} L ${toX} ${toY}`
}
</script>

<template>
  <div
    ref="el"
    class="fork flex-shrink-0" :style="{
      width: `${normalWidth}px`,
    }"
  >
    <svg width="100%" :height="`${maxHeight}px`">
      <path
        :d="getPath(meta.$fork.originOffset, meta.$fork.linksOffset[0])" :stroke="color"
        :stroke-width="`${lineWidth}em`"
        fill="transparent"
        stroke-linejoin="round"
      />
      <path
        :d="getPath(meta.$fork.originOffset, meta.$fork.linksOffset[1])" :stroke="color"
        :stroke-width="`${lineWidth}em`"
        fill="transparent"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped>
.fork {
  transform: translateY(v-bind(wrapperOffset));
  z-index: 1;
}
</style>
