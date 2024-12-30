import { navigateTo } from '#app'

export default function usePdfExportMap() {
  function exportMap() {
    navigateTo('/editor/export-pdf', {
      open: {
        target: '',
        windowFeatures: {
          popup: true,
        },
      },
    })
  }

  return exportMap
}
