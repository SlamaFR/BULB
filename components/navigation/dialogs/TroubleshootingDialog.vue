<script setup lang="ts">
import {
  browserName,
  browserVersion,
  deviceModel,
  deviceVendor,
  engineName,
  engineVersion,
  getUA,
  isFirefox,
  isMobile,
  isSafari,
  osName,
  osVersion,
} from '@basitcodeenv/vue3-device-detect'
import { computed, ref } from 'vue'
import useVersion from '~/composables/useVersion'
import { useProject } from '~/stores/useProject'

const GITHUB_LINK = 'https://github.com/SlamaFR/BULB/issues/new?assignees=&labels=&projects=&template=bug_report.md&title='
const TWITTER_LINK = 'https://x.com/messages/compose?recipient_id=1030888182&ref_src=twsrc%5Etfw'

const visible = defineModel<boolean>('visible', { required: true })
const { applicationVersion, projectMinimumVersion } = useVersion()
const project = useProject()

const unsupportedBrowser = ref(isFirefox || isSafari)
const deviceName = computed(() => {
  return `${deviceVendor() ?? ''} ${deviceModel() ?? 'Unknown'}`.trim()
})
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.troubleshooting.header')"
    pt:root:class="max-w-50em"
    modal
  >
    <div class="flex flex-col gap-4">
      <i18n-t keypath="ui.dialogs.troubleshooting.notice" tag="p">
        <template #github>
          <Button
            link as="a" :href="GITHUB_LINK" :label="$t('ui.dialogs.troubleshooting.github')"
            pt:root:class="important-p-0"
          />
        </template>
        <template #twitter>
          <Button
            link as="a" :href="TWITTER_LINK" :label="$t('ui.dialogs.troubleshooting.twitter')"
            pt:root:class="important-p-0"
          />
        </template>
      </i18n-t>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
        <Fieldset :legend="$t('ui.dialogs.troubleshooting.technical_details')" class="md:grid-col-span-2">
          <div class="flex flex-col md:grid md:grid-cols-2 gap-4">
            <IftaLabel>
              <IconField>
                <InputText
                  class="w-full" :model-value="`${browserName()} ${browserVersion()}`" variant="filled"
                  readonly
                />
                <InputIcon v-if="unsupportedBrowser" class="i-tabler-alert-circle bg-red-500" />
              </IconField>
              <label>Browser</label>
            </IftaLabel>
            <IftaLabel>
              <InputText class="w-full" :model-value="`${engineName()} ${engineVersion()}`" variant="filled" readonly />
              <label>Engine</label>
            </IftaLabel>
            <IftaLabel>
              <IconField>
                <InputText class="w-full" :model-value="deviceName" variant="filled" readonly />
                <InputIcon v-if="isMobile" class="i-tabler-alert-triangle bg-orange-500" />
              </IconField>
              <label>Device</label>
            </IftaLabel>
            <IftaLabel>
              <InputText class="w-full" :model-value="`${osName()} ${osVersion()}`" variant="filled" readonly />
              <label>Operating System</label>
            </IftaLabel>
            <IftaLabel class="grid-col-span-2">
              <InputText class="w-full" :model-value="getUA()" variant="filled" readonly />
              <label>User Agent</label>
            </IftaLabel>
          </div>
        </Fieldset>
        <Fieldset :legend="$t('ui.dialogs.troubleshooting.project')">
          <div class="flex flex-col gap-4">
            <IftaLabel>
              <IconField>
                <InputText class="w-full" :model-value="`${project.version ?? 'Pre 1.3.0-alpha'}`" variant="filled" readonly />
                <InputIcon v-if="project.outdated" class="i-tabler-alert-circle bg-red-500" />
                <InputIcon v-else class="i-tabler-circle-check bg-green-500" />
              </IconField>
              <label>Project Version</label>
            </IftaLabel>
            <IftaLabel>
              <InputText class="w-full" :model-value="`${projectMinimumVersion}`" variant="filled" readonly />
              <label>Minimum Project Version</label>
            </IftaLabel>
            <IftaLabel>
              <InputText class="w-full" :model-value="`${applicationVersion}`" variant="filled" readonly />
              <label>BULB Version</label>
            </IftaLabel>
          </div>
        </Fieldset>
      </div>
    </div>
  </Dialog>
</template>
