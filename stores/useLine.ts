export const useLine = defineStore('line', () => {
  const mode = ref<Mode | null>(null)
  const index = ref<LineIndex | null>(null)
  const color = ref<string | null>(null)
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

  return {
    mode,
    index,
    color,
    lineWidth,
    topology,
    line,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
