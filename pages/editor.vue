<script setup lang="ts">
import CustomLineIndexDirectoryDialog from '~/components/editor/CustomLineIndexDirectoryDialog.vue'

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
      <Panel header="Réglages généraux">
        <GeneralMapSettings />
      </Panel>

      <Panel class="overflow-x-auto" header="Liste des arrêts">
        <StopsEditor />
      </Panel>
    </div>
  </div>

  <ConfirmDialog />
  <CustomLineIndexDirectoryDialog visible />
</template>

<style scoped>
.bottom-container {
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
  gap: 1rem;
  align-items: stretch;
}
</style>
