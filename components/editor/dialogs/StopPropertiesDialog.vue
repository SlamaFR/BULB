<script setup lang="ts">
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
          :style="{ minHeight: '2hl !important' }"
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
