import { useIntervalFn } from '@vueuse/core'
import { useConfirm } from 'primevue/useconfirm'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useVersion from '~/composables/useVersion'
import { compareVersions } from '~/utils/versions'

export default function useVersionTracking() {
  const confirm = useConfirm()
  const { t } = useI18n()
  const { applicationVersion } = useVersion()
  const pollingRate = import.meta.env.VITE_APP_VERSION_POLLING_RATE

  const latestVersion = ref<string>(applicationVersion)
  const { pause } = useIntervalFn(check, pollingRate)

  function check() {
    fetch('/version.txt')
      .then(res => res.text())
      .then(text => text.trim())
      .then((version) => {
        if (compareVersions(version, latestVersion.value) > 0) {
          latestVersion.value = version
          promptUpdate()
        }
      })
      .catch(() => pause())
  }

  function promptUpdate() {
    pause()
    confirm.require({
      header: t('ui.dialogs.new_update_available.header'),
      message: t('ui.dialogs.new_update_available.message', { version: latestVersion.value }),
      rejectLabel: t('ui.dialogs.new_update_available.later'),
      rejectProps: {
        text: true,
        severity: 'secondary',
      },
      acceptLabel: t('ui.dialogs.new_update_available.update'),
      accept() {
        location.reload()
      },
    })
  }
}
