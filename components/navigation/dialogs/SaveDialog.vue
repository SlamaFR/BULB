<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ref, watch } from 'vue'
import useSaveProject from '~/composables/useSaveProject'
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'
import { useProject } from '~/stores/useProject'
import { isBuiltin } from '~/utils/types'

const visible = defineModel<boolean>('visible', { required: true })

const save = useSaveProject()
const { line } = storeToRefs(useProject())
const { findIndexById } = useCustomLineIndices()

const name = ref(`${line.value.mode}_${line.value.index}`.toLowerCase())
const lineIndex = computed(() => {
  if (line.value.index === null) return ''
  const index = line.value.index
  if (isBuiltin(index)) {
    return index.$builtinLineIndex.index
  } else {
    const customIndex = findIndexById(index.$customLineIndex.id)
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
  save(name.value)
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

      <Message severity="secondary">
        <template #icon>
          <i class="i-tabler-info-circle-filled" />
        </template>
        {{ $t('ui.dialogs.save_project.custom_indices_notice') }}
      </Message>

      <div class="flex flex-row items-center justify-end flex-grow gap-4">
        <Button :label="$t('ui.dialogs.save_project.cancel')" text severity="secondary" @click="visible = false" />
        <Button :label="$t('ui.dialogs.save_project.save')" @click="doExport()" />
      </div>
    </div>
  </Dialog>
</template>
