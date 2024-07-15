<script setup lang="ts">
const {
  index,
} = defineProps<{
  index: number
}>()
const stop = defineModel<Stop>('stop', { required: true })

const showConnectionsEditor = ref(false)
</script>

<template>
  <Panel class="min-w-25em" :header="`Arrêt #${index}`">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-2">
        <label :for="`name_stop_${index}`">Nom</label>
        <Textarea
          :id="`name_stop_${index}`"
          v-model="stop.name"
          rows="2"
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

      <div class="flex flex-col gap-2">
        <span>Lieu d’intérêt</span>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center">
            <RadioButton v-model="stop.interestPoint" :input-id="`interest_point_stop_${index}_on`" :value="true" />
            <label :for="`interest_point_stop_${index}_on`" class="ml-2">Oui</label>
          </div>
          <div class="flex items-center">
            <RadioButton v-model="stop.interestPoint" :input-id="`interest_point_stop_${index}_off`" :value="false" />
            <label :for="`interest_point_stop_${index}_off`" class="ml-2">Non</label>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <span>Empêcher la collision entre le titre et le sous-titre</span>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center">
            <RadioButton
              v-model="stop.preventSubtitleOverlapping" :input-id="`prevent_overlapping_stop_${index}_on`"
              :value="true"
            />
            <label :for="`prevent_overlapping_stop_${index}_on`" class="ml-2">Oui</label>
          </div>
          <div class="flex items-center">
            <RadioButton
              v-model="stop.preventSubtitleOverlapping" :input-id="`prevent_overlapping_stop_${index}_off`"
              :value="false"
            />
            <label :for="`prevent_overlapping_stop_${index}_off`" class="ml-2">Non</label>
          </div>
        </div>
      </div>

      <div class="mt-8 flex flex-row justify-between gap-2">
        <Button
          label="Correspondances"
          icon="i-tabler-pencil"
          text
          @click="showConnectionsEditor = true"
        />
        <Button label="Supprimer" icon="i-tabler-trash" severity="danger" />
      </div>
    </div>
  </Panel>

  <ConnectionsEditor v-model:visible="showConnectionsEditor" :stop="stop" />
</template>
