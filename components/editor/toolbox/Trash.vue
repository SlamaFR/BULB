<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const active = ref(false)
</script>

<template>
  <div class="toolbox-item relative" :class="{ active }">
    <div class="flex flex-col items-center">
      <i class="i-tabler-trash" />
      <span>Supprimer</span>
    </div>

    <VueDraggable
      class="receiver" :model-value="[]" group="sectionElements" :sort="false" draggable="."
      @dragenter="active = true" @dragleave="active = false" @drop="active = false"
    />
    <VueDraggable
      class="receiver" :model-value="[]" group="branchElements" :sort="false" draggable="."
      @dragenter="active = true" @dragleave="active = false" @drop="active = false"
    />
  </div>
</template>

<style scoped lang="scss">
.toolbox-item {
  background-color: var(--p-red-50);
  border: 3px dashed var(--p-red-200);
  color: var(--p-red-500);
  border-radius: .375rem;
  min-width: 5rem;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: background-color .2s ease, border-color .2s ease, color .2s ease;
  &.active {
    background-color: var(--p-red-500);
    border-color: var(--p-red-700);
    border-style: solid;
    color: white;
  }

  span {
    font-size: 1rem;
    user-select: none;
  }
}

.receiver {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  > * {
    display: none !important;
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
  }
}
</style>
