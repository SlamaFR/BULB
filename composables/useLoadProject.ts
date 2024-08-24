export default function useLoadProject() {
  const toast = useToast()
  const confirm = useConfirm()
  const lineStore = storeToRefs(useLine())
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
        header: 'Chargement du projet',
        message: 'Voulez-vous charger les indices personnalisés contenus dans ce projet ? Les indices que vous possédez déjà ne seront pas écrasés.',
        acceptLabel: 'Oui',
        rejectLabel: 'Non',
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
      summary: 'Chargement réussi',
      detail: 'Le projet a été chargé avec succès',
      severity: 'success',
      life: 5000,
    })
  }

  function flop() {
    toast.add({
      summary: 'Chargement échoué',
      detail: 'Le fichier est invalide ou corrompu',
      severity: 'error',
      life: 5000,
    })
  }

  const reader = new FileReader()
  reader.onload = (ev) => {
    try {
      preload(JSON.parse(ev.target?.result as string) as Project)
    } catch (error1) {
      console.warn(error1)
      try {
        const oldProject = JSON.parse(ev.target?.result as string) as Line
        toast.add({
          summary: 'Ancien format détecté',
          detail: 'Certaines fonctionnalités pourraient ne pas être disponibles',
          severity: 'warn',
          life: 10000,
        })
        preload({ line: oldProject, customIndices: [] })
      } catch (error2) {
        console.error(error2)
        flop()
      }
    }
  }
  reader.onerror = () => {
    toast.add({
      summary: 'Chargement échoué',
      detail: 'Le fichier n’a pas pu être lu',
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
