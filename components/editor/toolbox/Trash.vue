<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const el = ref()
const e = useDropZone(el)

const list = []
</script>

<template>
  <VueDraggable
    v-model="list"
    :sort="false"
  >
    <div class="toolbox-item">
      <div class="flex flex-col items-center">
        <i class="i-tabler-trash" />
        <span>Supprimer</span>
      </div>
    </div>
    {{ list }}
  </VueDraggable>
</template>

<style scoped>
.toolbox-item {
  background-color: var(--p-red-50);
  border: 1px solid var(--p-red-200);
  color: var(--p-red-500);
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
</style>
