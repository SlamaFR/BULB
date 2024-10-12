import { useConfirm } from 'primevue/useconfirm'
import { useI18n } from 'vue-i18n'
import { useProject } from '~/stores/useProject'
import { compareVersions } from '~/utils/versions'

export function useProjectVersionCheck() {
  const confirm = useConfirm()
  const { reset } = useProject()
  const { t } = useI18n()

  function showWarning() {
    confirm.require({
      header: t('ui.dialogs.outdated_project.header'),
      message: t('ui.dialogs.outdated_project.message'),
      acceptLabel: t('ui.dialogs.outdated_project.accept'),
      accept: reset,
      rejectLabel: t('ui.dialogs.outdated_project.reject'),
      rejectProps: {
        text: true,
        severity: 'secondary',
      },
    })
  }

  function check(projectVersion: string | null, minimumVersion: string | null) {
    if (projectVersion === null || compareVersions(projectVersion, minimumVersion) === -1) {
      showWarning()
    }
  }

  return check
}
