<script setup lang="ts">
const line = defineModel<Line>({ required: true })

provide<LineContext>(LineContextKey, {
  color: computed(() => line.value.color ?? 'black'),
  lineWidth: computed(() => line.value.lineWidth),
})
</script>

<template>
  <div class="canvas">
    <SectionsGroup
      v-model="line.topology"
      class="content flex-grow overflow-x-auto p-1em"
    />
    <div class="toolbox">
      <LineToolbox />
      <LineSectionToolbox />
      <BranchToolbox />
    </div>
  </div>
</template>

<style>
:root {
  --base-size: 2;
  --font-size: calc(var(--base-size) * 16px);
}
</style>

<style scoped lang="scss">
.canvas {
  background-color: white;
  border: 1px solid var(--blue-ratp-paper);
  color: var(--p-gray-700);
  height: 100%;

  display: flex;
  flex-direction: column;
}

.content {
  font-size: var(--font-size);
  font-family: 'Parisine Std', sans-serif;
}

.toolbox {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1em;
  border-top: 1px solid var(--p-slate-200);
  overflow-x: auto;
  position: sticky;
  bottom: 0;
  z-index: 2;
  background: var(--p-slate-50);

  & > * {
    flex-shrink: 0;
  }
}
</style>
