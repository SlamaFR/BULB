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

    <div class="bottom-container">
      <Panel header="Menu principal">
        <MainMenu />
      </Panel>

      <Panel header="Réglages du projet">
        <GeneralMapSettings />
      </Panel>

      <Panel class="overflow-x-auto" header="Liste des arrêts">
        <StopsEditor />
      </Panel>
    </div>
  </div>

  <ConfirmDialog pt:root:class="max-w-40em" />
</template>

<style scoped>
.bottom-container {
  display: grid;
  grid-template-columns: auto auto 1fr;
  width: 100%;
  gap: 1rem;
  align-items: stretch;
}
</style>
