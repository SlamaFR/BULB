export default function useLoadProject() {
  const toast = useToast()
  const lineStore = storeToRefs(useLine())
  const { open, onChange } = useFileDialog({
    accept: 'application/json',
    multiple: false,
    directory: false,
    reset: true,
  })

  const reader = new FileReader()
  reader.onload = (ev) => {
    try {
      const line = JSON.parse(ev.target?.result as string) as Line
      lineStore.index.value = line.index
      lineStore.mode.value = line.mode
      lineStore.color.value = line.color
      lineStore.stops.value = line.stops
      lineStore.stopSpacing.value = line.stopSpacing
    } catch (e) {
      toast.add({
        summary: 'Fichier illisible',
        detail: 'Le fichier est invalide ou corrompu.',
        severity: 'error',
        life: 5000,
      })
    }
  }
  reader.onerror = (ev) => {
    toast.add({
      summary: 'Erreur de chargement',
      detail: 'Le fichier n’a pas pu être lu.',
      severity: 'error',
      life: 5000,
    })
  }

  onChange((files) => {
    if (files !== null && files.length > 0) {
      reader.readAsText(files[0])
    }
  })

  return open
}
