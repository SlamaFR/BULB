<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { ref } from 'vue'
import { type DraggableEvent, VueDraggable } from 'vue-draggable-plus'
import useElementGrabbing from '~/composables/useElementGrabbing'

interface Element {
  label: string
  icon: string
  type: 'STOP' | 'SPACER'
}

const { grab, release } = useElementGrabbing()

const elements = ref<Element[]>([
  {
    label: 'ui.map_editor.toolbox.stop',
    icon: 'i-bulb-stop',
    type: 'STOP',
  },
  {
    label: 'ui.map_editor.toolbox.spacer',
    icon: 'i-bulb-spacer',
    type: 'SPACER',
  },
])

function clone(element: Element): BranchElement {
  switch (element.type) {
    case 'STOP':
      return {
        id: uuidv4(),
        $stop: {
          name: '',
          subtitle: '',
          placeName: '',
          accessible: 'undefined',
          reverse: false,
          interestPoint: false,
          preventSubtitleOverlapping: true,
          terminus: false,
          closed: false,
          connections: [],
        },
      }
    case 'SPACER':
      return {
        id: uuidv4(),
        $spacer: {
          size: 5,
        },
      }
  }
}

function onStart(e: DraggableEvent<Element>) {
  grab(e.data.type)
}
</script>

<template>
  <VueDraggable
    v-model="elements"
    class="toolbox-section"
    :group="{ name: 'branchElements', pull: 'clone', put: false }"
    :clone="clone"
    :sort="false"
    @start="e => onStart(e as DraggableEvent<Element>)"
    @end="release()"
  >
    <div v-for="element in elements" :key="element.label" class="toolbox-item">
      <div class="item hidden">
        <div class="flex flex-col items-center">
          <i :class="element.icon" />
          <span>{{ $t(element.label) }}</span>
        </div>
      </div>
      <div class="preview h-full flex items-center">
        <BranchElement :model-value="clone(element)" :reverse="false" />
      </div>
    </div>
  </VueDraggable>
</template>

<style scoped lang="scss">
.toolbox-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .5rem;

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
    transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

    span {
      font-size: 1rem;
      user-select: none;
    }

    &:active {
      cursor: grabbing;
    }

    &:hover {
      box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.25);
      transform: scale(1.05);
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
