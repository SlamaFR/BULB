<script setup lang="ts">
const confirm = useConfirm()
const lineStore = useLine()
const { addStop, deleteStop } = lineStore
const { stops } = storeToRefs(lineStore)

const items = [
  {
    label: 'Au début',
    command: () => addStop(0),
  },
  {
    label: 'À la fin',
    command: () => addStop(stops.value.length),
  },
  {
    label: 'Position personnalisée',
    command: () => {},
    disabled: true,
  },
]

function deleteAllStops() {
  confirm.require({
    header: 'Pas si vite !',
    message: 'Cette action est irréversible. Êtes-vous sûr(e) de vouloir continuer ?',
    acceptProps: {
      label: 'Supprimer tous les arrêts',
      severity: 'danger',
    },
    rejectProps: {
      label: 'Annuler',
      text: true,
      severity: 'secondary',
    },
    accept: () => stops.value.splice(0),
  })
}
</script>

<template>
  <div v-if="stops.length > 0" class="flex flex-col gap-4 h-full">
    <div class="flex flex-col md:flex-row gap-3 flex-grow max-h-30em overflow-y-auto md:overflow-x-auto">
      <StopEditor
        v-for="(_, index) in stops"
        :key="index"
        v-model:stop="stops[index]"
        :index="index"
        @delete="deleteStop"
      />
    </div>
    <div class="flex flex-col items-start md:flex-row md:items-center gap-2">
      <SplitButton icon="i-tabler-plus" label="Ajouter un arrêt" :model="items" @click="addStop(stops.length)" />
      <Button disabled label="Réorganiser" icon="i-tabler-switch-horizontal" />
      <div class="flex-grow" />
      <Button label="Supprimer tous les arrêts" icon="i-tabler-trash-x" severity="danger" @click="deleteAllStops()" />
    </div>
  </div>

  <div v-if="stops.length === 0" class="flex flex-col items-center justify-center p-20 text-nowrap">
    <span class="text-2xl">Ligne vierge</span>
    <span>
      <Button label="Ajouter un arrêt" link pt:root:class="important-p-1" @click="addStop(0)" />
      <span class="opacity-50">pour commencer</span>
    </span>
  </div>
</template>
