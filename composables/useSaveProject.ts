import { storeToRefs } from 'pinia'
import { useToast } from 'primevue/usetoast'
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'
import { useProject } from '~/stores/useProject'
import { getCustomIndicesIds } from '~/utils/project'

export default function useSaveProject() {
  const toast = useToast()
  const { version, line } = storeToRefs(useProject())
  const { indices } = storeToRefs(useCustomLineIndices())

  function stringifyLine() {
    const involvedCustomIndices = getCustomIndicesIds(line.value)
    const customIndices = indices.value.filter(index => involvedCustomIndices.includes(index.id))

    return JSON.stringify({
      version: version.value,
      line: line.value,
      customIndices,
    })
  }

  function save(name: string) {
    const blob = new Blob([stringifyLine()], { type: 'application/json' })
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
