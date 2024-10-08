export const useProject = defineStore('project', () => {
  const { applicationVersion, projectMinimumVersion } = useVersion()

  const version = ref<string | null>(applicationVersion)
  const outdated = computed(() => compareVersions(version.value, projectMinimumVersion) === -1)
  const line = reactive<{
    mode: Mode | null
    index: LineIndex | null
    color: string | null
    mapSize: number | null
    lineWidth: number
    topology: LineSection[]
  }>({
    mode: null,
    index: null,
    color: null,
    mapSize: 15,
    lineWidth: 0.375,
    topology: [{
      id: '1',
      $lineSection: {
        elements: [],
      },
    }],
  })

  function reset() {
    version.value = applicationVersion
    line.mode = null
    line.mode = null
    line.index = null
    line.color = null
    line.lineWidth = 0.375
    line.mapSize = 15
    line.topology = [{
      id: '1',
      $lineSection: {
        elements: [],
      },
    }]
  }

  return {
    version,
    outdated,
    line,
    reset,
  }
}, {
  persist: {
    storage: persistedState.localStorage,
    serializer: {
      serialize(value: Record<string, any>) {
        return JSON.stringify(value)
      },
      deserialize(value: string) {
        const object = JSON.parse(value)
        if (object.version === undefined) {
          object.version = null
        }

        return object as Record<string, any>
      },
    },
  },
})
