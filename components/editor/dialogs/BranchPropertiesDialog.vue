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
        <InputText v-model="branch.$branch.elementSpacing" numeric />
      </div>
      <div class="flex flex-row gap-4">
        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.branch_properties.margin_left') }}</label>
          <InputText v-model="branch.$branch.marginLeft" numeric />
        </div>
        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.branch_properties.margin_right') }}</label>
          <InputText v-model="branch.$branch.marginRight" numeric />
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
