<script setup lang="ts">
import { watch } from 'vue'

const { allowCity } = defineProps<{
  allowCity: boolean
}>()
const visible = defineModel<boolean>('visible', { required: true })
const stop = defineModel<Stop>({ required: true })
const accessibilityOptions = [
  { label: 'ui.dialogs.stop_properties.accessible.undefined', value: 'undefined' },
  { label: 'ui.dialogs.stop_properties.accessible.yes', value: true },
  { label: 'ui.dialogs.stop_properties.accessible.no', value: false },
]

const stopStateOptions = [
  { label: 'ui.dialogs.stop_properties.stop_state.open', value: false },
  { label: 'ui.dialogs.stop_properties.stop_state.close', value: true },
]

const stopTypeOptions = [
  { label: 'ui.dialogs.stop_properties.stop_type.regular', value: false },
  { label: 'ui.dialogs.stop_properties.stop_type.terminus', value: true },
]

watch(() => stop.value.$stop.name, val => stop.value.$stop.name = mapName(val))
watch(() => stop.value.$stop.placeName, val => stop.value.$stop.placeName = mapName(val))
watch(() => stop.value.$stop.subtitle, val => stop.value.$stop.subtitle = mapName(val))

function mapName(name: string | null) {
  return name
    ?.replace(/ – | - | — /g, ' – ')
    ?.replace(/'/g, '’') ?? ''
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
  >
    <template #header>
      <div class="flex flex-row items-center gap-2">
        <span class="p-dialog-title" data-pc-section="title">{{ $t('ui.dialogs.stop_properties.header') }}</span>
        <New />
      </div>
    </template>

    <div class="flex flex-row gap-2">
      <div class="flex flex-col gap-4 min-w-20em">
        <div class="flex flex-col gap-1">
          <label :for="`${stop.id}_title`">{{ $t('ui.dialogs.stop_properties.stop_name') }}</label>
          <Textarea
            :id="`${stop.id}_title`"
            v-model="stop.$stop.name"
            pt:root:class="important-h-auto"
            :spellcheck="false"
            auto-resize
            autofocus
          />
        </div>

        <div class="flex flex-col gap-1">
          <label :for="`${stop.id}_placeName`">{{ $t('ui.dialogs.stop_properties.city_name') }}</label>
          <InputText
            :id="`${stop.id}_placeName`" v-model="stop.$stop.placeName" :spellcheck="false"
            :disabled="!stop.$stop.terminus || !allowCity"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label :for="`${stop.id}_subtitle`">{{ $t('ui.dialogs.stop_properties.subtitle') }}</label>
          <InputText :id="`${stop.id}_subtitle`" v-model="stop.$stop.subtitle" :spellcheck="false" />
        </div>

        <div class="flex items-center gap-4 h-1em mt-2">
          <Checkbox v-model="stop.$stop.preventSubtitleOverlapping" binary :input-id="`${stop.id}_preventOverlapping`" />
          <label :for="`${stop.id}_preventOverlapping`">{{ $t('ui.dialogs.stop_properties.preventOverlapping') }}</label>
        </div>
      </div>

      <Divider layout="vertical" pt:root:class="important-my-1" />

      <div class="flex flex-col gap-4 min-w-20em">
        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.stop_properties.accessible.title') }}</label>
          <SelectButton
            v-model="stop.$stop.accessible"
            pt:pc-toggle-button:root:class="flex-grow"
            :options="accessibilityOptions"
            :option-label="option => $t(option.label)"
            option-value="value"
            :allow-empty="false"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.stop_properties.stop_state.title') }}</label>
          <SelectButton
            v-model="stop.$stop.closed"
            pt:pc-toggle-button:root:class="flex-grow"
            :options="stopStateOptions"
            :option-label="option => $t(option.label)"
            option-value="value"
            :allow-empty="false"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.stop_properties.stop_type.title') }}</label>
          <SelectButton
            v-model="stop.$stop.terminus"
            pt:pc-toggle-button:root:class="flex-grow"
            :options="stopTypeOptions"
            :option-label="option => $t(option.label)"
            option-value="value"
            :allow-empty="false"
          />
        </div>

        <div class="flex flex-col gap-1">
          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-1">
              <Checkbox v-model="stop.$stop.reverse" binary :input-id="`${stop.id}_reverse`" />
              <label :for="`${stop.id}_reverse`" class="ml-2">{{ $t('ui.dialogs.stop_properties.reverse') }}</label>
            </div>
          </div>

          <div class="flex flex-col gap-1">
            <div class="flex items-center gap-1">
              <Checkbox v-model="stop.$stop.interestPoint" binary :input-id="`${stop.id}_interestPoint`" />
              <label :for="`${stop.id}_interestPoint`" class="ml-2">{{
                $t('ui.dialogs.stop_properties.interest_point')
              }}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Dialog>
</template>
