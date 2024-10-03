import { useI18n } from 'vue-i18n'

export default function useVersionTracking() {
  const confirm = useConfirm()
  const { t } = useI18n()
  const currentVersion = useVersion()
  const pollingRate = import.meta.env.VITE_APP_VERSION_POLLING_RATE

  const latestVersion = ref<string>(currentVersion)
  const { pause } = useIntervalFn(check, pollingRate)

  function check() {
    fetch('/version.txt')
      .then(res => res.text())
      .then(text => text.trim())
      .then((version) => {
        if (version !== currentVersion) {
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
