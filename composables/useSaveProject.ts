import { useCustomLineIndices } from '~/stores/useCustomLineIndices'

export default function useSaveProject() {
  const toast = useToast()
  const { line } = useLine()
  const { indices } = useCustomLineIndices()

  function stringifyLine(bundleCustomIndices: boolean) {
    let customIndices: CustomLineIndexDescription[] = []

    if (bundleCustomIndices) {
      const usedCustomIndicesIds = line.stops
        .flatMap(stop => stop.connections)
        .filter(isModeConnection)
        .flatMap(connection => connection.lines)
        .map(line => line.lineIndex)
        .filter(isCustomIndex)
        .map(index => index.id)

      customIndices = indices.filter(index => usedCustomIndicesIds.includes(index.id))
    }

    return JSON.stringify({
      line,
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
      summary: 'Sauvegarde réussie',
      detail: 'Le projet a été sauvegardé avec succès',
      severity: 'success',
      life: 5000,
    })
  }

  return save
}
