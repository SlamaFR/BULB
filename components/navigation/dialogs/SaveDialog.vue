<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })

const save = useSaveProject()
const { line } = storeToRefs(useProject())
const { findIndexById } = useCustomLineIndices()

const name = ref('')// ref(`${line.value.mode}_${line.value.index}`.toLowerCase())
const bundleCustomIndices = ref(false)
const lineIndex = computed(() => {
  if (line.value.index === null) return ''
  const index = line.value.index.value
  if (isBuiltin(index)) {
    return index.$builtinLineIndex.index
  } else {
    const customIndex = findIndexById(index?.$customLineIndex?.id ?? '')
    if (customIndex === null) return ''
    return (`${customIndex.prefix}${customIndex.index}${customIndex.suffix}`).toLowerCase()
  }
})

watch(visible, (val) => {
  if (val) {
    if (!line.value.mode || !line.value.index) {
      name.value = 'untitled'
      return
    }
    name.value = `${line.value.mode}_${lineIndex.value ?? 'unknown'}`.toLowerCase()
  }
})

function doExport() {
  save(name.value, bundleCustomIndices.value)
  visible.value = false
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.save_project.header')"
    modal
  >
    <div class="flex flex-col gap-5">
      <div class="flex flex-row items-center gap-4">
        <span class="text-nowrap">{{ $t('ui.dialogs.save_project.project_name') }}</span>
        <InputGroup>
          <InputText v-model="name" />
          <InputGroupAddon>.json</InputGroupAddon>
        </InputGroup>
      </div>
      <div class="flex items-center">
        <Checkbox v-model="bundleCustomIndices" input-id="save_include_custom_indices" binary />
        <label for="save_include_custom_indices" class="ml-2">{{ $t('ui.dialogs.save_project.bundle_custom_indices') }}</label>
      </div>
      <div class="flex flex-row items-center justify-end flex-grow gap-4">
        <Button :label="$t('ui.dialogs.save_project.cancel')" text severity="secondary" @click="visible = false" />
        <Button :label="$t('ui.dialogs.save_project.save')" @click="doExport()" />
      </div>
    </div>
  </Dialog>
</template>
