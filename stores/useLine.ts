export const useLine = defineStore('line', () => {
  const mode = ref<Mode | null>(null)
  const index = ref<LineIndex | null>(null)
  const color = ref<string | null>(null)
  const stopSpacing = ref<number>(1)
  const stops = ref<Stop[]>([])

  const line = computed<Line>(() => ({
    mode: mode.value,
    index: index.value,
    color: color.value,
    stops: stops.value,
    stopSpacing: stopSpacing.value,
  }))

  function deleteStop(index: number) {
    stops.value.splice(index, 1)
  }

  function addStop(index: number) {
    stops.value.splice(index, 0, {
      name: 'Nouvel arrêt',
      subtitle: '',
      interestPoint: false,
      preventSubtitleOverlapping: true,
      connections: [],
    })
  }

  return {
    mode,
    index,
    color,
    stops,
    stopSpacing,
    line,
    addStop,
    deleteStop,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
