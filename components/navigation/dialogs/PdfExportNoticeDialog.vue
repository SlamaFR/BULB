<script setup lang="ts">
import { isMacOS } from '@basitcodeenv/vue3-device-detect'
import { computed, ref } from 'vue'

const emit = defineEmits<{
  complete: [boolean]
}>()
const visible = defineModel<boolean>('visible', { required: true })
const metakey = computed(() => isMacOS ? '⌘' : 'Ctrl')

const reminder = ref(false)

function submit() {
  emit('complete', reminder.value)
  visible.value = false
}

function cancel() {
  visible.value = false
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.pdf_export_notice.header')"
    pt:root:class="max-w-40em"
    modal
  >
    <template #header>
      <div class="flex flex-row gap-2 items-center">
        <span class="p-dialog-title">{{ $t('ui.dialogs.pdf_export_notice.header') }}</span>
        <Beta />
      </div>
    </template>

    <div class="flex flex-col gap-4">
      <i18n-t keypath="ui.dialogs.pdf_export_notice.message_1" tag="p" />
      <i18n-t keypath="ui.dialogs.pdf_export_notice.message_2" tag="p">
        <template #printShortcut>
          <kbd>{{ metakey }}</kbd>&nbsp;+&nbsp;<kbd>P</kbd>
        </template>
      </i18n-t>

      <Message severity="warn">
        {{ $t('ui.dialogs.pdf_export_notice.unexpected_behaviors_notice') }}
      </Message>

      <div class="mt-4 flex items-center">
        <Checkbox v-model="reminder" binary input-id="pdf_export_dont_remind" />
        <label for="pdf_export_dont_remind" class="ml-2">{{
          $t('ui.dialogs.pdf_export_notice.dont_show_again')
        }}</label>
      </div>

      <div class="flex flex-row items-center justify-end flex-grow gap-4">
        <Button :label="$t('ui.dialogs.pdf_export_notice.cancel')" text severity="secondary" @click="cancel" />
        <Button :label="$t('ui.dialogs.pdf_export_notice.proceed')" @click="submit" />
      </div>
    </div>
  </Dialog>
</template>
