import { storeToRefs } from 'pinia'
import { useToast } from 'primevue/usetoast'
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'
import { useProject } from '~/stores/useProject'

export default function useSaveProject() {
  const toast = useToast()
  const { version, line } = storeToRefs(useProject())
  const { indices } = storeToRefs(useCustomLineIndices())

  function stringifyLine(bundleCustomIndices: boolean) {
    let customIndices: CustomLineIndexDescription[] = []

    if (bundleCustomIndices) {
      const usedCustomIndicesIds: string[] = []
      /*
      line.value.topology
        .flatMap(topology => topology.$lineSection.elements)
        .filter(isBranch)
        .flatMap(branch => branch.$branch.elements)
        .filter(isStop)
        .flatMap(stop => stop.$stop.connections)
        .filter(isMode)
        .flatMap(connection => connection.$modeConnection.elements)
        .map(line => line.$modeConnectionElement.lineIndex)
        .filter(isCustom)
        .map(index => index.$customLineIndex.id)
       */
      customIndices = indices.value.filter(index => usedCustomIndicesIds.includes(index.id))
    }

    return JSON.stringify({
      version: version.value,
      line: line.value,
      customIndices,
    })
  }

  function save(name: string, bundleCustomIndices: boolean) {
    const blob = new Blob([stringifyLine(bundleCustomIndices)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${name?.replace(/(\.json)$/, '')}.json`
    a.click()

    toast.add({
      summary: 'ui.toasts.save.success.title',
      detail: 'ui.toasts.save.success.detail',
      severity: 'success',
      life: 5000,
    })
  }

  return save
}
