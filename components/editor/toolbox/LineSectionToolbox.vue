<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { VueDraggable } from 'vue-draggable-plus'

interface Element {
  label: string
  icon: string
  type: 'BRANCH' | 'FORK' | 'PARALLEL_BRANCHES' | 'LOOP'
}

const elements = ref<Element[]>([
  {
    label: 'ui.map_editor.toolbox.branch',
    icon: 'i-bulb-branch',
    type: 'BRANCH',
  },
  {
    label: 'ui.map_editor.toolbox.fork',
    icon: 'i-bulb-fork',
    type: 'FORK',
  },
  {
    label: 'ui.map_editor.toolbox.parallel_branches',
    icon: 'i-bulb-parallel-branches',
    type: 'PARALLEL_BRANCHES',
  },
  {
    label: 'ui.map_editor.toolbox.loop',
    icon: 'i-bulb-u-turn',
    type: 'LOOP',
  },
])

function clone(element: Element): LineElement {
  switch (element.type) {
    case 'BRANCH':
      return {
        id: uuidv4(),
        $branch: {
          elementSpacing: 0,
          marginLeft: 0,
          marginRight: 0,
          elements: [],
        },
      }
    case 'FORK':
      return {
        id: uuidv4(),
        $fork: {
          toward: 'RIGHT',
          originOffset: 0,
          linksOffset: [1, -1],
          offsetMultiplier: 1,
        },
      }
    case 'PARALLEL_BRANCHES':
      return {
        id: uuidv4(),
        $parallelBranches: {
          alignement: 'LEFT',
          sections: [
            {
              id: uuidv4(),
              $lineSection: {
                levelOffset: 1,
                elements: [
                  {
                    id: uuidv4(),
                    $branch: {
                      elementSpacing: 0,
                      elements: [],
                    },
                  },
                ],
              },
            },
            {
              id: uuidv4(),
              $lineSection: {
                levelOffset: -1,
                elements: [
                  {
                    id: uuidv4(),
                    $branch: {
                      elementSpacing: 0,
                      elements: [],
                    },
                  },
                ],
              },
            },
          ],
        },
      }
    case 'LOOP':
      return {
        id: uuidv4(),
        $loop: {
          toward: 'LEFT',
          linksOffsets: [1, -1],
        },
      }
  }
}
</script>

<template>
  <VueDraggable
    v-model="elements"
    class="toolbox-section"
    :group="{ name: 'sectionElements', pull: 'clone', put: false }"
    :clone="clone"
    :sort="false"
  >
    <div v-for="element in elements" :key="element.label" class="toolbox-item">
      <div class="item hidden">
        <div class="flex flex-col items-center">
          <i :class="element.icon" />
          <span>{{ $t(element.label) }}</span>
        </div>
      </div>
      <div class="preview h-full flex items-center">
        <SectionElement dummy :model-value="clone(element)" />
      </div>
    </div>
  </VueDraggable>
</template>

<style scoped lang="scss">
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
