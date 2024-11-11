import { useFileDialog } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { useConfirm } from 'primevue/useconfirm'
import { useToast } from 'primevue/usetoast'
import { useI18n } from 'vue-i18n'
import { useProjectVersionCheck } from '~/composables/useProjectVersionCheck'
import useVersion from '~/composables/useVersion'
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'
import { useProject } from '~/stores/useProject'

export default function useLoadProject() {
  const toast = useToast()
  const { t } = useI18n()
  const confirm = useConfirm()
  const { projectMinimumVersion } = useVersion()
  const checkVersion = useProjectVersionCheck()
  const { open, onChange } = useFileDialog({
    accept: 'application/json',
    multiple: false,
    directory: false,
    reset: true,
  })

  const lineStore = useProject()
  const { version, line } = storeToRefs(lineStore)
  const indicesStore = storeToRefs(useCustomLineIndices())

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
    checkVersion(project.version, projectMinimumVersion)

    version.value = project.version
    line.value.index = project.line.index
    line.value.mode = project.line.mode
    line.value.color = project.line.color
    line.value.lineThickness = project.line.lineThickness
    line.value.lineStyle = project.line.lineStyle
    line.value.dotsColorPolicy = project.line.dotsColorPolicy
    line.value.mapSize = project.line.mapSize
    line.value.topology = project.line.topology

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
      lineStore.reset()
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
