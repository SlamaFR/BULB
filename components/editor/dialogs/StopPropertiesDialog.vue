<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const stop = defineModel<Stop>({ required: true })

watch(() => stop.value.name, val => stop.value.name = mapName(val))
watch(() => stop.value.placeName, val => stop.value.placeName = mapName(val))
watch(() => stop.value.subtitle, val => stop.value.subtitle = mapName(val))

function mapName(name: string) {
  return name
    .replace(/ – | - | — /g, ' – ')
    .replace(/'/g, '’')
}
</script>

<template>
  <Dialog v-model:visible="visible" header="Propriétés d’arrêt" modal>
    <div class="flex flex-col gap-4 min-w-20em">
      <div class="flex flex-col gap-1">
        <label :for="`${stop.id}_title`">Nom de l’arrêt</label>
        <Textarea
          :id="`${stop.id}_title`"
          v-model="stop.name"
          :style="{ minHeight: '2hl !important' }"
          auto-resize
          autofocus
        />
      </div>
      <div class="flex flex-col gap-1">
        <label :for="`${stop.id}_placeName`">Nom de la ville</label>
        <InputText :id="`${stop.id}_placeName`" v-model="stop.placeName" :disabled="!stop.terminus" />
      </div>
      <div class="flex flex-col gap-1">
        <label :for="`${stop.id}_subtitle`">Sous-titre</label>
        <InputText :id="`${stop.id}_subtitle`" v-model="stop.subtitle" />
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <Checkbox v-model="stop.interestPoint" binary :input-id="`${stop.id}_interestPoint`" />
          <label :for="`${stop.id}_interestPoint`" class="ml-2">Point d’intérêt</label>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <div class="flex items-center">
          <Checkbox v-model="stop.terminus" binary :input-id="`${stop.id}_terminus`" />
          <label :for="`${stop.id}_terminus`" class="ml-2">Terminus</label>
        </div>
      </div>
    </div>
  </Dialog>
</template>
