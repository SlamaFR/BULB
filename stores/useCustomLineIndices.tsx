interface ModeIndices {
  [mode: string]: CustomLineIndex[]
}

export const useCustomLineIndices = defineStore('customLineIndices', () => {
  const indices = reactive<ModeIndices>({})
  const keys = computed(() => Object.keys(indices) as Mode[])

  function getModeIndices(mode: Mode | null): CustomLineIndex[] {
    if (mode === null) return []
    if (!keys.value.includes(mode)) {
      indices[mode] = []
    }
    return indices[mode]
  }

  function createNewIndex(mode: Mode) {
    const modeIndices = getModeIndices(mode) as CustomLineIndex[]
    const newIndex = {
      shape: 'CIRCLE' as IndexShape,
      prefix: '',
      index: '',
      suffix: '',
      color: '#000000',
    }
    modeIndices.push(newIndex)

    return newIndex
  }

  return {
    indices,
    getModeIndices,
    createNewIndex,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
