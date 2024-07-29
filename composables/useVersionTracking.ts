export default function useVersionTracking() {
  const confirm = useConfirm()
  const currentVersion = useVersion()
  const pollingRate = import.meta.env.VITE_APP_VERSION_POLLING_RATE

  const latestVersion = ref<string>(currentVersion)
  const newVersionAvailable = ref(false)

  const { pause } = useIntervalFn(check, pollingRate)
  watch(newVersionAvailable, (val) => {
    if (val) promptUpdate()
  })

  function check() {
    fetch('/version.txt')
      .then(res => res.text())
      .then(text => text.trim())
      .then((version) => {
        if (version !== currentVersion) {
          newVersionAvailable.value = true
          latestVersion.value = version
        }
      })
      .catch(() => pause())
  }

  function promptUpdate() {
    pause()
    confirm.require({
      header: 'Nouvelle version disponible',
      message: `La version ${latestVersion.value} de BULB est maintenant disponible. Voulez-vous recharger la page pour mettre à jour ? Aucune donnée ne sera perdue.`,
      rejectLabel: 'Plus tard',
      rejectProps: {
        text: true,
        severity: 'secondary',
      },
      acceptLabel: 'Mettre à jour',
      accept() {
        location.reload()
      },
    })
  }
}
