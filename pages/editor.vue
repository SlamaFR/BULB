<script setup lang="ts">
import LineMetaEditor from '~/components/editor/LineMetaEditor.vue'
import StopsEditor from '~/components/editor/StopsEditor.vue'

const lineStore = useLine()
const { line } = storeToRefs(lineStore)

function toggleColorScheme() {
  const root = document.querySelector('html')!
  root.classList.toggle('dark-mode')
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <Menubar>
      <template #start>
        <div class="flex flex-row gap-2 items-start">
          <h1 class="text-3xl">
            <strong>Beautiful Urban Line Builder</strong>
          </h1>
          <small class="text-white/75">v0.0.1-alpha</small>
        </div>
      </template>

      <template #end>
        <div class="flex flex-row gap-5 items-center">
          <Button text rounded icon="i-tabler-sun-moon" @click="toggleColorScheme()" />
          <span class="mr-2">Fait avec ❤️ par <a href="https://x.com/SlamaFR">Slama</a></span>
        </div>
      </template>
    </Menubar>

    <div class="grid cols-3 gap-5">
      <Panel header="Option du plan">
        <LineMetaEditor />
      </Panel>

      <Panel class="col-span-2" header="Liste des arrêts">
        <StopsEditor />
      </Panel>
    </div>

    <Panel header="Prévisualisation du plan">
      <div class="border-1 border-[var(--blue-ratp-paper)] overflow-x-auto bg-white">
        <LineMap :line="line" />
      </div>
    </Panel>
  </div>
</template>
