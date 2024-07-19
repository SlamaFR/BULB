<script setup lang="ts">
const lineStore = useLine()
const { line } = storeToRefs(lineStore)

const { toggle, isDark } = useDark()
</script>

<template>
  <div class="flex flex-col gap-5 h-full">
    <Menubar>
      <template #start>
        <div class="flex flex-row gap-2 items-start">
          <h1 class="text-3xl">
            <strong>Beautiful Urban Line Builder</strong>
          </h1>
          <small class="text-gray">v0.1.2-alpha</small>
        </div>
      </template>

      <template #end>
        <div class="flex flex-row gap-4 items-center">
          <span class="mr-2">Pas mal non ? C'est français 🇫🇷</span>
          <div class="flex flex-row gap-1 items-center">
            <Button text rounded :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'" @click="toggle()" />
            <Button text rounded icon="i-tabler-brand-x" as="a" href="https://x.com/SlamaFR" target="_blank" />
          </div>
        </div>
      </template>
    </Menubar>

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
