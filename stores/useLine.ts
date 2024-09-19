export const useLine = defineStore('line', () => {
  const mode = ref<Mode | null>(null)
  const index = ref<LineIndex | null>(null)
  const color = ref<string | null>(null)
  const mapSize = ref<number | null>(15)
  const topology = ref<LineSection[]>([{
    id: '1',
    $lineSection: {
      elements: [],
    },
  }])
  const lineWidth = ref<number>(0.375)

  const line = computed<Line>(() => ({
    mode: mode.value,
    index: index.value,
    color: color.value,
    lineWidth: lineWidth.value,
    topology: topology.value,
  }))

  function reset() {
    mode.value = null
    index.value = null
    color.value = null
    lineWidth.value = 0.375
    mapSize.value = 15
    topology.value = [{
      id: '1',
      $lineSection: {
        elements: [],
      },
    }]
  }

  return {
    mode,
    index,
    color,
    mapSize,
    lineWidth,
    topology,
    line,
    reset,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
