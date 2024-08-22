<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { VueDraggable } from 'vue-draggable-plus'

interface Element {
  label: string
  icon: string
  type: 'STOP' | 'STOP_WITH_CONNECTION'
}

const elements = ref<Element[]>([
  {
    label: 'Arrêt',
    icon: 'i-bulb-stop',
    type: 'STOP',
  },
])

function clone(): Stop {
  return {
    id: uuidv4(),
    name: 'Nouvel arrêt',
    subtitle: '',
    interestPoint: false,
    preventSubtitleOverlapping: true,
    connections: [],
  }
}
</script>

<template>
  <VueDraggable
    v-model="elements"
    class="toolbox-section"
    :group="{ name: 'branchElements', pull: 'clone', put: false }"
    :clone="clone"
    :sort="false"
  >
    <div v-for="element in elements" :key="element.label" class="toolbox-item">
      <div class="item hidden">
        <div class="flex flex-col items-center">
          <i :class="element.icon" />
          <span>{{ element.label }}</span>
        </div>
      </div>
      <Stop class="preview" name="Nouvel arrêt" />
    </div>
  </VueDraggable>
</template>

<style scoped>
.toolbox-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  .toolbox-item {
    cursor: grab;
    background-color: white;
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

    &:active {
      cursor: grabbing;
    }

    & .item {
      display: block;
    }

    & .preview {
      display: none;
    }
  }
}
</style>
