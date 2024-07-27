import { v4 as uuidv4 } from 'uuid'

export const useCustomLineIndices = defineStore('customLineIndices', () => {
  const indices = ref<CustomLineIndexDescription[]>([])

  function getModeIndices(mode: Mode | null): CustomLineIndexDescription[] {
    return indices.value.filter(index => index.mode === mode)
  }

  function findIndexById(id: string): CustomLineIndexDescription | null {
    return indices.value.find(index => index.id === id) ?? null
  }

  function deleteById(id: string): void {
    const index = findIndexById(id)
    if (index) {
      indices.value.splice(indices.value.indexOf(index), 1)
    }
  }

  function createNewIndex(mode: Mode): CustomLineIndexDescription {
    const newIndex: CustomLineIndexDescription = {
      id: uuidv4(),
      shape: modeToShape(mode),
      mode,
      prefix: '',
      index: '',
      suffix: '',
      color: '#000000',
    }
    indices.value.push(newIndex)

    return newIndex
  }

  return {
    indices,
    getModeIndices,
    findIndexById,
    deleteById,
    createNewIndex,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
  },
})
