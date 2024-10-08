import { useI18n } from 'vue-i18n'

export default function useLoadProject() {
  const toast = useToast()
  const { t } = useI18n()
  const confirm = useConfirm()
  const lineStore = storeToRefs(useProject())
  const indicesStore = storeToRefs(useCustomLineIndices())
  const { open, onChange } = useFileDialog({
    accept: 'application/json',
    multiple: false,
    directory: false,
    reset: true,
  })

  function preload(project: Project) {
    if (project.customIndices.length > 0) {
      confirm.require({
        header: t('ui.dialogs.loading_custom_indices_prompt.header'),
        message: t('ui.dialogs.loading_custom_indices_prompt.message'),
        acceptLabel: t('ui.dialogs.loading_custom_indices_prompt.accept'),
        rejectLabel: t('ui.dialogs.loading_custom_indices_prompt.reject'),
        rejectProps: {
          text: true,
          severity: 'secondary',
        },
        accept: () => load(project, true),
        reject: () => load(project, false),
      })
    } else {
      load(project, false)
    }
  }

  function load(project: Project, loadCustomIndices: boolean) {
    lineStore.version.value = project.version
    lineStore.index.value = project.line.index
    lineStore.mode.value = project.line.mode
    lineStore.color.value = project.line.color
    lineStore.lineWidth.value = project.line.lineWidth
    lineStore.topology.value = project.line.topology

    if (loadCustomIndices) {
      const existingIndicesIds = indicesStore.indices.value.map(it => it.id)
      const newIndices = project.customIndices.filter(it => !existingIndicesIds.includes(it.id))

      indicesStore.indices.value.push(...newIndices)
    }

    toast.add({
      summary: 'ui.toasts.load.success.title',
      detail: 'ui.toasts.load.success.detail',
      severity: 'success',
      life: 5000,
    })
  }

  const reader = new FileReader()
  reader.onload = (ev) => {
    try {
      preload(JSON.parse(ev.target?.result as string) as Project)
    } catch (error) {
      console.warn(error)
      toast.add({
        summary: 'ui.toasts.load.failure.title',
        detail: 'ui.toasts.load.failure.detail.corrupted',
        severity: 'error',
        life: 5000,
      })
    }
  }
  reader.onerror = () => {
    toast.add({
      summary: 'ui.toasts.load.success.title',
      detail: 'ui.toasts.load.success.detail.unreadable',
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
