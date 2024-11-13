<script setup lang="ts">
import { useCssVar } from '@vueuse/core'
import { computed, inject, ref } from 'vue'
import leftArrow from '~/assets/svg/left-arrow.svg'
import rightArrow from '~/assets/svg/right-arrow.svg'
import { LineContextKey } from '~/utils/symbols'

const {
  meta,
} = defineProps<{
  meta: Fork
}>()

const el = ref()
const sizeFactor = computed(() => Number.parseInt(useCssVar('--base-size', el).value ?? '1'))

const CLEARANCE = 48
const SIZE = 16 * sizeFactor.value
const SLOPE_WIDTH = SIZE * 4.75

const lineContext = inject<LineContext>(LineContextKey)!
const color = computed(() => lineContext?.color.value ?? '#000000')
const lineWidth = computed(() => lineContext.lineThickness.value)

const maxHeight = computed(() => {
  return (meta.$fork.offsetMultiplier ?? 1) * Math.max(Math.abs(meta.$fork.linksOffset[0]), Math.abs(meta.$fork.linksOffset[1])) * 2 * 2.75 * SIZE + (SIZE * lineWidth.value)
})

const normalWidth = computed(() => SLOPE_WIDTH * (meta.$fork.offsetMultiplier ?? 1) + CLEARANCE * 2)

const orientation = computed(() => {
  switch (meta.$fork.toward) {
    case 'LEFT':
      return [normalWidth.value, 0, -1]
    case 'RIGHT':
      return [0, normalWidth.value, 1]
    default:
      return [0, 0, 0]
  }
})

const lowestOffset = computed(() => Math.min(meta.$fork.linksOffset[0], meta.$fork.linksOffset[1]))
const highestOffset = computed(() => Math.max(meta.$fork.linksOffset[0], meta.$fork.linksOffset[1]))
const offset = computed(() => (lowestOffset.value + highestOffset.value) / 2)
const wrapperOffset = computed(() => `calc(${offset.value * (meta.$fork.offsetMultiplier ?? 1)} * -2.75em)`)
const path = computed(() => {
  return getPath(meta.$fork.originOffset, meta.$fork.linksOffset[0]) + getPath(meta.$fork.originOffset, meta.$fork.linksOffset[1])
})
const arrow = computed(() => {
  if (meta.$fork.directionalArrows === 'CW') return rightArrow
  if (meta.$fork.directionalArrows === 'CCW') return leftArrow
  return null
})

function getPath(fromOffset: number, toOffset: number) {
  const [fromX, toX, flip] = orientation.value
  const fromY = maxHeight.value / 2 - (fromOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  const toY = maxHeight.value / 2 - (toOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  return `M ${fromX} ${fromY} L ${fromX + CLEARANCE * flip} ${fromY} L ${toX - CLEARANCE * flip} ${toY} L ${toX} ${toY}`
}

function getMiddlePoint(fromOffset: number, toOffset: number): [number, number] {
  const [fromX, toX, flip] = orientation.value
  const fromY = maxHeight.value / 2 - (fromOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  const toY = maxHeight.value / 2 - (toOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  return [((fromX + CLEARANCE * flip) + (toX - CLEARANCE * flip)) / 2, (fromY + toY) / 2]
}

function getAngle(fromOffset: number, toOffset: number): number {
  const [fromX, toX, flip] = orientation.value
  const fromY = maxHeight.value / 2 - (fromOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  const toY = maxHeight.value / 2 - (toOffset - offset.value) * (2.75 * SIZE) * (meta.$fork.offsetMultiplier ?? 1)
  return Math.round(Math.atan2(toY - fromY, (toX - CLEARANCE * flip) - (fromX + CLEARANCE * flip)) * 180 / Math.PI)
}

const linkOffsetsArrowPositions = computed(() => {
  return [
    getMiddlePoint(meta.$fork.originOffset, meta.$fork.linksOffset[0]),
    getMiddlePoint(meta.$fork.originOffset, meta.$fork.linksOffset[1]),
  ]
})
const linkOffsetsArrowRotations = computed(() => {
  return [
    getAngle(meta.$fork.originOffset, meta.$fork.linksOffset[0]),
    getAngle(meta.$fork.originOffset, meta.$fork.linksOffset[1]),
  ]
})
</script>

<template>
  <div
    ref="el"
    class="fork flex-shrink-0" :style="{
      width: `${normalWidth}px`,
    }"
  >
    <svg width="100%" :height="`${maxHeight}px`">
      <SvgLine
        :path="path"
        :color="color"
        :line-width="lineWidth"
        :striped="lineContext.lineStyle.value === 'STRIPED'"
      />

      <g v-if="arrow !== null" :transform="`translate(${linkOffsetsArrowPositions[0][0]} ${linkOffsetsArrowPositions[0][1]})`">
        <image :href="arrow" :transform="`rotate(${linkOffsetsArrowRotations[0] + (orientation[2] < 0 ? 180 : 0)}) translate(-29 ${-22 - (lineWidth * 16)}) scale(.75)`" />
      </g>
      <g v-if="arrow !== null" :transform="`translate(${linkOffsetsArrowPositions[1][0]} ${linkOffsetsArrowPositions[1][1]})`">
        <image :href="arrow" :transform="`rotate(${linkOffsetsArrowRotations[1] + (orientation[2] > 0 ? 180 : 0)}) translate(-29 ${-22 - (lineWidth * 16)}) scale(.75) `" />
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.fork {
  transform: translateY(v-bind(wrapperOffset));
  z-index: 1;
}
</style>
