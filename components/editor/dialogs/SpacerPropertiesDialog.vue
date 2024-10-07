<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const spacer = defineModel<Spacer>({ required: true })
</script>

<template>
  <Dialog
    v-model:visible="visible"
    pt:root:class="max-w-30em"
    modal
  >
    <template #header>
      <div class="flex flex-row gap-4">
        <Tag severity="warn">
          <i class="i-tabler-traffic-cone" />
          WIP
        </Tag>
        <span class="p-dialog-title" data-pc-section="title">{{ $t('ui.dialogs.spacer_properties.header') }}</span>
      </div>
    </template>
    <div class="flex flex-col gap-4 min-w-20em">
      <div class="flex flex-col gap-1">
        <label :for="`${spacer.id}_placeName`">{{ $t('ui.dialogs.spacer_properties.size') }}</label>
        <InputText :id="`${spacer.id}_placeName`" v-model="spacer.$spacer.size" numeric />
      </div>
      <div class="opacity-50">
        {{ $t('ui.dialogs.spacer_properties.spacer_export_notice') }}
      </div>
    </div>
  </Dialog>
</template>
