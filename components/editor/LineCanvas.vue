<script setup lang="ts">
const line = defineModel<Line>({ required: true })
</script>

<template>
  <div class="canvas">
    <SectionsGroup
      v-model="line.topology"
      class="flex-grow overflow-x-auto p-1em"
    />
    <div class="toolbox">
      <BranchToolbox />
      <LineSectionToolbox />
    </div>
  </div>
</template>

<style scoped lang="scss">
:root {
  --base-size: 1.5;
}

.canvas {
  background-color: white;
  border: 1px solid var(--blue-ratp-paper);
  color: var(--p-gray-700);
  height: 100%;
  font-size: var(--base-size) em;

  display: flex;
  flex-direction: column;
}

.toolbox {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1em;
  border-top: 1px solid var(--p-slate-200);

  position: sticky;
  bottom: 0;
}
</style>
