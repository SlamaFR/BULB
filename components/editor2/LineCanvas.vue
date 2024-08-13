<script setup lang="ts">
const line = defineModel<Line>({ required: true })
</script>

<template>
  <div class="canvas">
    <!-- <Line :line="line" /> -->
    <SectionsGroup
      v-model="line.topology"
      class="flex-grow overflow-x-auto p-1em"
    />
    <div class="toolbox">
      <div class="toolbox-item">
        <i class="i-bulb-stop" />
        <span>Arrêt</span>
      </div>
      <div class="toolbox-item">
        <i class="i-bulb-branch" />
        <span>Branche</span>
      </div>
      <div class="toolbox-item">
        <i class="i-bulb-fork" />
        <span>Fourche</span>
      </div>
      <div class="toolbox-item">
        <i class="i-bulb-parallel-branches" />
        <span>Branches parallèles</span>
      </div>
      <div class="toolbox-item">
        <i class="i-bulb-u-turn" />
        <span>Demi-tour</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.canvas {
  background-color: white;
  border: 1px solid var(--blue-ratp-paper);
  color: var(--p-gray-700);
  height: 100%;
  //font-size: 1.5em;

  display: flex;
  flex-direction: column;
}

.toolbox {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid var(--p-slate-200);

  .toolbox-item {
    background-color: var(--p-slate-50);
    border: 1px solid var(--p-slate-200);
    border-radius: .375rem;
    min-width: 5rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 1rem;
      user-select: none;
    }
  }
}
</style>
