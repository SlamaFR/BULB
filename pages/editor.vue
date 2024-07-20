<script setup lang="ts">
const lineStore = useLine()
const { line } = storeToRefs(lineStore)
</script>

<template>
  <div class="flex flex-col gap-5 h-full">
    <Topbar />

    <Panel header="Prévisualisation du plan">
      <div class="border-1 border-[var(--blue-ratp-paper)] overflow-x-auto bg-white">
        <LineMap :line="line" />
      </div>
    </Panel>

    <div class="grid cols-5 gap-5 flex-grow">
      <Panel class="col-span-2" header="Réglages généraux">
        <GeneralMapSettings />
      </Panel>

      <Panel class="col-span-3" header="Liste des arrêts">
        <StopsEditor />
      </Panel>
    </div>
  </div>

  <ConfirmDialog />
</template>
