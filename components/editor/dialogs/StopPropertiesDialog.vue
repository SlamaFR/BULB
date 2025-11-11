<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { watch, computed } from 'vue'
import { cleanName } from '~/utils/text'

const { allowCity } = defineProps<{
  allowCity: boolean
}>()
const emit = defineEmits<{
  openConnections: []
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

const breakpoints = useBreakpoints(breakpointsTailwind)
const horizontal = breakpoints.greaterOrEqual('lg')

const stopColor = computed<string | null>({
  get: () => stop.value.$stop.branch_color ?? null,
  set: (v: string | null) => { stop.value.$stop.branch_color = v }
})

watch(() => stop.value.$stop.name, val => stop.value.$stop.name = cleanName(val))
watch(() => stop.value.$stop.placeName, val => stop.value.$stop.placeName = cleanName(val))
watch(() => stop.value.$stop.subtitle, val => stop.value.$stop.subtitle = cleanName(val))

function openConnectionsEditor() {
  emit('openConnections')
  visible.value = false
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.stop_properties.header')"
    modal
  >
    <div class="flex max-lg:flex-col flex-row gap-2">
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

      <Divider v-if="horizontal" layout="vertical" pt:root:class="important-my-1" />
      <Divider v-else layout="horizontal" pt:root:class="important-mx-1" />

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

        <div class="flex flex-col gap-1">
          <div class="flex flex-col gap-1">
            <label>{{ $t('ui.dialogs.stop_properties.branch_color') }}</label>
            <div class="flex items-center gap-2">
              <ColorSelect v-model="stopColor" clearable />
              <Button
                v-if="stop.$stop.branch_color !== undefined && stop.$stop.branch_color !== null"
                text
                rounded
                icon="i-tabler-x"
                @click="() => { stopColor = null }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-end gap-4 mt-8">
      <Button label="Modifier les correspondances" @click="openConnectionsEditor" />
    </div>
  </Dialog>
</template>
