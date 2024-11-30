<script setup lang="ts">
import { watch } from 'vue'

const visible = defineModel<boolean>('visible', { required: true })
const stop = defineModel<Stop>({ required: true })

watch(() => stop.value.$stop.name, val => stop.value.$stop.name = mapName(val))
watch(() => stop.value.$stop.placeName, val => stop.value.$stop.placeName = mapName(val))
watch(() => stop.value.$stop.subtitle, val => stop.value.$stop.subtitle = mapName(val))

function mapName(name: string | null) {
  return name
    ?.replace(/ – | - | —/g, ' – ')
    ?.replace(/'/g, '’') ?? ''
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.stop_properties.header')"
    modal
  >
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
        <InputText :id="`${stop.id}_placeName`" v-model="stop.$stop.placeName" :spellcheck="false" :disabled="!stop.$stop.terminus" />
      </div>
      <div class="flex flex-col gap-1">
        <label :for="`${stop.id}_subtitle`">{{ $t('ui.dialogs.stop_properties.subtitle') }}</label>
        <InputText :id="`${stop.id}_subtitle`" v-model="stop.$stop.subtitle" :spellcheck="false" />
      </div>
      <div class="flex flex-col gap-1">
        <label class="mb-1">{{ $t('ui.dialogs.stop_properties.accessible') }}</label>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center gap-2">
            <RadioButton v-model="stop.$stop.accessible" :input-id="`${stop.id}_accessible_na`" name="pizza" value="undefined" />
            <label :for="`${stop.id}_accessible_na`">{{ $t('ui.dialogs.stop_properties.accessible_undefined') }}</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="stop.$stop.accessible" :input-id="`${stop.id}_accessible_on`" name="pizza" :value="true" />
            <label :for="`${stop.id}_accessible_on`">{{ $t('ui.dialogs.stop_properties.accessible_yes') }}</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="stop.$stop.accessible" :input-id="`${stop.id}_accessible_of`" name="pizza" :value="false" />
            <label :for="`${stop.id}_accessible_off`">{{ $t('ui.dialogs.stop_properties.accessible_no') }}</label>
          </div>
        </div>
      </div>

      <Divider />

      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <Checkbox v-model="stop.$stop.preventSubtitleOverlapping" binary :input-id="`${stop.id}_preventOverlapping`" />
          <label :for="`${stop.id}_preventOverlapping`" class="ml-2">{{ $t('ui.dialogs.stop_properties.preventOverlapping') }}</label>
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <Checkbox v-model="stop.$stop.interestPoint" binary :input-id="`${stop.id}_interestPoint`" />
          <label :for="`${stop.id}_interestPoint`" class="ml-2">{{ $t('ui.dialogs.stop_properties.interest_point') }}</label>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <Checkbox v-model="stop.$stop.closed" binary :input-id="`${stop.id}_closed`" />
          <label :for="`${stop.id}_closed`" class="ml-2">{{ $t('ui.dialogs.stop_properties.closed') }}</label>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <Checkbox v-model="stop.$stop.terminus" binary :input-id="`${stop.id}_terminus`" />
          <label :for="`${stop.id}_terminus`" class="ml-2">{{ $t('ui.dialogs.stop_properties.terminus') }}</label>
        </div>
      </div>
    </div>
  </Dialog>
</template>
