export default function useSaveProject() {
  const toast = useToast()
  const { line } = storeToRefs(useLine())

  function save(name?: string) {
    const blob = new Blob([JSON.stringify(line.value)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `${name?.replace(/(\.json)$/, '')}.json` ?? `${line.value.mode}_${line.value.index}.json`
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
