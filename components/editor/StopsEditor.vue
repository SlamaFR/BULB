<script setup lang="ts">
const { stops } = storeToRefs(useLine())

const items = [
  {
    label: 'Au début',
  },
  {
    label: 'À la fin',
  },
  {
    label: 'Position personnalisée',
  },
]
</script>

<template>
  <div class="flex flex-row gap-3 overflow-x-auto">
    <StopEditor
      v-for="(stop, index) in stops"
      :key="index"
      :stop="stop"
      :index="index + 1"
    />
  </div>

  <div class="mt-4 flex flex-row justify-between gap-2">
    <div class="flex flex-row gap-2">
      <SplitButton icon="i-tabler-plus" label="Ajouter un arrêt" :model="items" />
    </div>
    <Button label="Supprimer tous les arrêts" icon="i-tabler-trash-x" severity="danger" />
  </div>
</template>
