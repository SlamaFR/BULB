<script setup lang="ts">
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
  },
]
</script>

<template>
  <div v-if="stops.length > 0" class="flex flex-col gap-4 h-full">
    <div class="flex flex-row gap-3 flex-grow overflow-x-auto">
      <StopEditor
        v-for="(stop, index) in stops"
        :key="index"
        v-model:stop="stops[index]"
        :index="index"
        @delete="deleteStop"
      />
    </div>
    <div class="flex flex-row justify-between gap-2">
      <div class="flex flex-row gap-2">
        <SplitButton icon="i-tabler-plus" label="Ajouter un arrêt" :model="items" @click="addStop(stops.length)" />
        <Button label="Réorganiser" icon="i-tabler-switch-horizontal" />
      </div>
      <Button label="Supprimer tous les arrêts" icon="i-tabler-trash-x" severity="danger" />
    </div>
  </div>

  <div v-if="stops.length === 0" class="flex flex-col items-center justify-center p-20">
    <span class="text-3xl">Ligne vierge</span>
    <span>
      <Button label="Ajouter un arrêt" link class="p-1" @click="addStop(0)" />
      <span class="opacity-50">pour commencer</span>
    </span>
  </div>
</template>
