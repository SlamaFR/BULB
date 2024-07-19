<script setup lang="ts">
const {
  index,
} = defineProps<{
  index: number
}>()
const emit = defineEmits<{
  delete: [number]
}>()
const stop = defineModel<Stop>('stop', { required: true })
const showConnectionsEditor = ref(false)
</script>

<template>
  <Panel class="min-w-25em" :header="`Arrêt #${index + 1}`">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-2">
        <label :for="`name_stop_${index}`">Nom</label>
        <Textarea
          :id="`name_stop_${index}`"
          v-model="stop.name"
          rows="2"
          auto-resize
          class="flex-auto"
          autocomplete="off"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label :for="`subtitle_stop_${index}`">Sous-titre</label>
        <InputText
          :id="`subtitle_stop_${index}`"
          v-model="stop.subtitle"
          class="flex-auto"
          autocomplete="off"
        />
      </div>

      <div class="flex flex-row items-center gap-2 pt-2">
        <Checkbox v-model="stop.interestPoint" :input-id="`interest_point_stop_${index}`" binary />
        <label :for="`interest_point_stop_${index}`" class="text-nowrap">Lieu d’intérêt</label>
      </div>

      <div class="flex flex-row items-center gap-2">
        <Checkbox v-model="stop.preventSubtitleOverlapping" :input-id="`prevent_overlapping_stop_${index}`" binary :true-value="false" :false-value="true" />
        <label :for="`prevent_overlapping_stop_${index}`">Permettre la collision des titres</label>
      </div>

      <div class="mt-8 flex flex-row justify-between gap-2">
        <Button
          label="Correspondances"
          icon="i-tabler-pencil"
          text
          :severity="stop.connections.length > 0 ? 'primary' : 'secondary'"
          @click="showConnectionsEditor = true"
        />
        <Button label="Supprimer" icon="i-tabler-trash" severity="danger" @click="emit('delete', index)" />
      </div>
    </div>
  </Panel>

  <ConnectionsEditor v-model:visible="showConnectionsEditor" :stop="stop" />
</template>
