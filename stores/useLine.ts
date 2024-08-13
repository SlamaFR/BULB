export const useLine = defineStore('line', () => {
  const mode = ref<Mode | null>(null)
  const index = ref<LineIndex | null>(null)
  const color = ref<string | null>(null)
  const topology = ref<LineSection[]>([])
  const lineWidth = ref<number>(0.375)

  const line = computed<Line>(() => ({
    mode: mode.value,
    index: index.value,
    color: color.value,
    topology: topology.value,
    lineWidth: lineWidth.value,
  }))

  return {
    mode,
    index,
    color,
    line,
    addStop,
    deleteStop,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
