<script setup lang="ts">
import { browserName, isFirefox, isSafari } from '@basitcodeenv/vue3-device-detect'
import { ref } from 'vue'

const visible = ref(isFirefox || isSafari)
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.browser_check.header')"
    modal
    :draggable="false"
    :closable="false"
    pt:root:class="w-50em"
  >
    <div class="flex flex-col gap-4">
      <p v-html="$t('ui.dialogs.browser_check.summary_1', { browserName: browserName() })" />
      <p v-html="$t('ui.dialogs.browser_check.summary_2')" />

      <div class="flex flex-col sm:flex-row items-center gap-5em justify-center my-6">
        <div class="flex flex-col gap-4 items-center">
          <div class="grid grid-cols-2 sm:flex sm:flex-row gap-2 grayscale-100">
            <img class="h-5em" src="~/assets/svg/browsers/firefox.svg">
            <img class="h-5em" src="~/assets/svg/browsers/safari.svg">
          </div>
          <Tag severity="danger">
            {{ $t('ui.dialogs.browser_check.unsupported_browsers') }}
          </Tag>
        </div>

        <div class="flex flex-col gap-4 items-center">
          <div class="grid grid-cols-2 sm:flex sm:flex-row gap-2 ">
            <img class="h-5em" src="~/assets/svg/browsers/chrome.svg">
            <img class="h-5em" src="~/assets/svg/browsers/edge.svg">
            <img class="h-5em" src="~/assets/svg/browsers/opera.svg">
            <img class="h-5em" src="~/assets/svg/browsers/brave.svg">
          </div>
          <Tag severity="success">
            {{ $t('ui.dialogs.browser_check.supported_browsers') }}
          </Tag>
        </div>
      </div>
    </div>

    <template #footer>
      <Button :label="$t('ui.dialogs.browser_check.dismiss')" @click="visible = false" />
    </template>
  </Dialog>
</template>
