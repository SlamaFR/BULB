<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const stop = defineModel<Stop>({ required: true })
</script>

<template>
  <Dialog v-model:visible="visible" header="Propriétés d’arrêt">
    <div class="flex flex-col gap-4 min-w-20em">
      <div class="flex flex-col gap-1">
        <label :for="`${stop.id}_title`">Nom de l’arrêt</label>
        <Textarea
          :id="`${stop.id}_title`"
          v-model="stop.name"
          :style="{ minHeight: '2hl' }"
          auto-resize
          autofocus
        />
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
    </div>
  </Dialog>
</template>
