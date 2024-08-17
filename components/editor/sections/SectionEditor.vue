<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const section = defineModel<LineSection>({ required: true })

const elements = ref(section.value.$lineSection.elements)
watchArray(elements, (val) => {
  section.value.$lineSection.elements = val
}, { deep: true })
</script>

<template>
  <div class="section">
    <!--
    <div class="flex flex-row items-center gap-2">
      <Button rounded text icon="i-tabler-x" size="small" severity="danger" />
      <span class="font-bold text-1rem">Section</span>
    </div>
    -->
    <VueDraggable
      v-model="elements"
      :animation="150"
      class="elements"
      group="sectionElements"
    >
      <SectionElement
        v-for="(element, i) in elements"
        :key="element.id"
        v-model="elements[i]"
      />
    </VueDraggable>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: .5em;

  padding: .5em;
  border-left: 1px dashed var(--p-slate-300);
  border-right: 1px dashed var(--p-slate-300);
  //border-radius: .75em;
}

.elements {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 3em 0;
  min-height: 15em;

  & > :not(.placeholder):first-child {
    padding-left: 1em;
  }

  & > :not(.placeholder):last-child {
    padding-right: 1em;
  }

  .placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
