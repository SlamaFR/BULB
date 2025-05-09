<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'default-fixed-size',
})
</script>

<template>
  <div class="layout">
    <div class="menus">
      <Panel :header="$t('ui.menu.title')">
        <MainMenu />
      </Panel>
      <Panel :header="$t('ui.properties.title')">
        <GeneralMapSettings />
      </Panel>
    </div>

    <Panel
      :header="$t('ui.map_editor.title')"
      pt:root:class="flex flex-col min-h-0 max-h-full"
      pt:content-container:class="flex-grow min-h-0"
      pt:content:class="h-full"
    >
      <MapEditor />
    </Panel>
  </div>

  <BrowserCheck />
</template>

<style scoped lang="scss">
.layout {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .5rem;
  min-height: 0;
  max-height: 100%;
}

.menus {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  min-width: 20em;
  overflow-y: auto;
}

@media (max-width: 1024px) {
  .layout {
    display: flex;
    flex-direction: column;
  }

  .menus {
    order: 1;
  }
}

@media (max-width: 1024px) and (min-width: 641px) {
  .menus {
    min-width: 0;
    order: 1;
    flex-direction: row;

    > * {
      flex-grow: 1;
    }
  }
}
</style>
