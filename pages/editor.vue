<template>
  <div class="flex-grow flex flex-col gap-5 h-full">
    <Topbar />

    <div class="editor">
      <div class="controls flex flex-col gap-4 min-w-20em">
        <Panel header="Menu">
          <MainMenu />
        </Panel>
        <Panel header="Propriétés">
          <GeneralMapSettings />
        </Panel>
      </div>

      <div class="canvas flex flex-col gap-4">
        <Panel
          header="Éditeur de plan"
          pt:root:class="flex flex-col flex-grow"
          pt:content-container:class="flex-grow"
          pt:content:class="h-full"
        >
          <LineCanvas />
        </Panel>
      </div>
    </div>
  </div>

  <BrowserCheck />
</template>

<style scoped lang="scss">
.editor {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  max-width: 100%;
  flex-grow: 1;
  gap: 1rem;
}

@media (max-width: 640px) {
  .editor {
    grid-template-columns: auto;

    .controls {
      order: 1;
    }

    .canvas {
      order: -1;
    }
  }
}

@media (max-width: 1024px) and (min-width: 641px) {
  .editor {
    grid-template-columns: auto;

    .controls {
      order: 1;
      flex-direction: row;

      > * {
        flex-grow: 1;
      }
    }

    .canvas {
      order: -1;
    }
  }
}
</style>
