<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { VueDraggable } from 'vue-draggable-plus'
import { useI18n } from 'vue-i18n'
import { LineContextKey } from '~/utils/symbols'

interface Element {
  label: string
  icon: string
  type: 'STOP' | 'STOP_WITH_CONNECTION'
}

const { t } = useI18n()

const elements = ref<Element[]>([
  {
    label: 'ui.map_editor.toolbox.stop',
    icon: 'i-bulb-stop',
    type: 'STOP',
  },
])

function clone(): Stop {
  return {
    id: uuidv4(),
    name: t('ui.map_editor.toolbox.new_stop'),
    subtitle: '',
    placeName: '',
    interestPoint: false,
    preventSubtitleOverlapping: true,
    terminus: false,
    closed: false,
    connections: [],
  }
}

provide<LineContext>(LineContextKey, {
  color: toRef('#000000'),
  lineWidth: toRef(1),
})
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
          <span>{{ $t(element.label) }}</span>
        </div>
      </div>
      <Stop
        :model-value="{
          id: '',
          name: $t('ui.map_editor.toolbox.new_stop'),
          placeName: null,
          subtitle: null,
          preventSubtitleOverlapping: true,
          interestPoint: false,
          terminus: false,
          closed: false,
          connections: [],
        }"
      />
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

    & > .item {
      display: block;
    }

    & > :not(.item) {
      display: none;
    }
  }
}
</style>
