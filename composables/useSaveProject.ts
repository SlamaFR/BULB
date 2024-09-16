export default function useSaveProject() {
  const toast = useToast()
  const { line } = storeToRefs(useLine())
  const { indices } = storeToRefs(useCustomLineIndices())

  function stringifyLine(bundleCustomIndices: boolean) {
    let customIndices: CustomLineIndexDescription[] = []

    if (bundleCustomIndices) {
      const usedCustomIndicesIds: string[] = line.value.topology
        .flatMap(topology => topology.$lineSection.elements)
        .filter(isBranch)
        .flatMap(branch => branch.$branch.stops)
        .flatMap(stop => stop.connections)
        .filter(isMode)
        .flatMap(connection => connection.$modeConnection.elements)
        .map(line => line.$modeConnectionElement.lineIndex)
        .filter(isCustom)
        .map(index => index.$customLineIndex.id)

      customIndices = indices.value.filter(index => usedCustomIndicesIds.includes(index.id))
    }

    return JSON.stringify({
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
      summary: 'Sauvegarde réussie',
      detail: 'Le projet a été sauvegardé avec succès',
      severity: 'success',
      life: 5000,
    })
  }

  return save
}
