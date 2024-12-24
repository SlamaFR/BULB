<script setup lang="ts">
import { ref } from 'vue'

const visible = defineModel<boolean>('visible', { required: true })
const branch = defineModel<Branch>({ required: true })

const showWarpAddDialog = ref(false)

function showWarpAdd() {
  visible.value = false
  showWarpAddDialog.value = true
}
</script>

<template>
  <Dialog v-model:visible="visible" append-to="self" modal>
    <template #header>
      <div class="flex flex-row gap-4">
        <Tag severity="warn">
          <i class="i-tabler-traffic-cone" />
          WIP
        </Tag>
        <span class="p-dialog-title" data-pc-section="title">{{ $t('ui.dialogs.branch_properties.header') }}</span>
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.branch_properties.element_spacing') }}</label>
        <BInputNumber v-model="branch.$branch.elementSpacing" />
      </div>
      <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.branch_properties.margin_left') }}</label>
          <BInputNumber v-model="branch.$branch.marginLeft" />
        </div>
        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.branch_properties.margin_right') }}</label>
          <BInputNumber v-model="branch.$branch.marginRight" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <Checkbox v-model="branch.$branch.invertedElements" binary :input-id="`${branch.id}_invertedElements`" />
          <label :for="`${branch.id}_invertedElements`" class="ml-2">{{ $t('ui.dialogs.stop_properties.inverted_elements') }}</label>
          <Beta />
        </div>
      </div>
      <div class="flex flex-row-reverse gap-4 mt-4">
        <Button label="WarpAdd" icon="i-tabler-bolt-filled" @click="showWarpAdd()" />
      </div>
    </div>
  </Dialog>

  <WarpAddDialog
    v-model:visible="showWarpAddDialog"
    v-model="branch"
  />
</template>
