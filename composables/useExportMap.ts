import * as htmlToImage from 'html-to-image'

export default function useExportMap() {
  const toast = useToast()

  function exportMap(mapContainer: HTMLElement) {
    htmlToImage.toBlob(mapContainer, {
      pixelRatio: 8,
      canvasWidth: mapContainer.clientWidth,
      canvasHeight: mapContainer.clientHeight,
      filter: element => !element.className?.toString()?.includes('export-hide'),
    }).then((blob) => {
      if (blob === null) {
        throw new Error('Failed to export map')
      }
      return blob
    }).then((blob) => {
      const url = URL.createObjectURL(blob)

      const a = document.createElement('a')
      a.href = url
      a.download = 'map.png'
      a.click()
      a.remove()

      toast.add({
        summary: 'Exportation réussie',
        detail: 'Le projet a été exporté avec succès',
        severity: 'success',
        life: 5000,
      })
    }).catch((err) => {
      console.error(err)
      toast.add({
        summary: 'Exportation échouée',
        detail: 'Le projet n’a pas pu être exporté',
        severity: 'error',
        life: 5000,
      })
    })
  }

  return exportMap
}
