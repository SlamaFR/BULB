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

    <div class="bottom-container cols-3">
      <Panel header="Menu principal">
        <MainMenu />
      </Panel>

      <Panel header="Réglages du projet">
        <GeneralMapSettings />
      </Panel>

      <Panel class="overflow-x-auto wide" header="Liste des arrêts">
        <StopsEditor />
      </Panel>
    </div>
  </div>

  <ConfirmDialog />
</template>

<style scoped lang="scss">
.bottom-container {
  display: grid;
  grid-template-columns: auto auto 1fr;
  width: 100%;
  gap: 1rem;
  align-items: stretch;
}

@media (max-width: 640px) {
  .bottom-container {
    grid-template-columns: auto;
  }
}

@media (max-width: 1024px) and (min-width: 641px) {
  .bottom-container {
    grid-template-columns: auto auto;

    .wide {
      grid-column: span 2;
    }
  }
}
</style>
