import { persistedState } from '#build/imports'
import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import useVersion from '~/composables/useVersion'
import { compareVersions } from '~/utils/versions'

export const useProject = defineStore('project', () => {
  const { applicationVersion, projectMinimumVersion } = useVersion()

  const version = ref<string | null>(applicationVersion)
  const outdated = computed(() => compareVersions(version.value, projectMinimumVersion) === -1)
  const line = reactive<Line>({
    mode: null,
    index: null,
    color: null,
    lineThickness: '0.375',
    lineStyle: 'PLAIN',
    dotsColorPolicy: 'INHERIT',
    fullyAccessible: false,
    frameTerminusNames: true,
    mapSize: 15,
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
    line.lineThickness = '0.375'
    line.lineStyle = 'PLAIN'
    line.dotsColorPolicy = 'INHERIT'
    line.fullyAccessible = false
    line.frameTerminusNames = true
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
