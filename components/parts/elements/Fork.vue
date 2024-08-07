<script setup lang="ts">
const {
  meta,
} = defineProps<{
  meta: Fork
}>()

const lineContext = inject<LineContext>(LineContextKey)

const color = computed(() => lineContext?.color.value ?? '#000000')

const maxHeight = computed(() => {
  return Math.abs(meta.$fork.linksOffset[0] - meta.$fork.linksOffset[1]) * 2.75 * 16 + (16)
})

const orientation = computed(() => {
  switch (meta.$fork.toward) {
    case 'LEFT':
      return [208, 0, -1]
    case 'RIGHT':
      return [0, 208, 1]
  }
  return [0, 0, 0]
})

function getPath(fromOffset: number, toOffset: number) {
  const [fromX, toX, flip] = orientation.value
  const fromY = maxHeight.value / 2 - fromOffset * (2.75 * 16)
  const toY = maxHeight.value / 2 - toOffset * (2.75 * 16)
  return `M ${fromX} ${fromY} L ${fromX + 24 * flip} ${fromY} L ${toX - 24 * flip} ${toY} L ${toX} ${toY}`
}
</script>

<template>
  <div class="w-13em outline-blue outline-1 bg-blue/25 outline-solid outline-dashed flex-shrink-0">
    <svg width="100%" :height="`${maxHeight}px`">
      <path
        :d="getPath(meta.$fork.originOffset, meta.$fork.linksOffset[0])" :stroke="color" stroke-width=".375em"
        fill="transparent" stroke-linejoin="round"
      />
      <path
        :d="getPath(meta.$fork.originOffset, meta.$fork.linksOffset[1])" :stroke="color" stroke-width=".375em"
        fill="transparent" stroke-linejoin="round"
      />
    </svg>
  </div>
</template>
