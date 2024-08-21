<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const { inner = false } = defineProps<{
  inner?: boolean
}>()
const section = defineModel<LineSection>({ required: true })
const elements = ref(section.value.$lineSection.elements)
watchArray(elements, (val) => {
  section.value.$lineSection.elements = val
}, { deep: true })

const offset = computed(() => `calc(${section.value.$lineSection.levelOffset} * -2.75em)`)
</script>

<template>
  <div class="section" :class="{ inner }">
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
      :empty-insert-threshold="32"
      :swap-threshold="inner ? 1 : .25"
      :inverted-swap-threshold="5"
    >
      <SectionElement
        v-for="(element, i) in elements"
        :key="element.id"
        v-model="elements[i]"
      />
    </VueDraggable>
  </div>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: .5em;
  transform: translateY(v-bind(offset));
  //min-height: 4em;

  &:not(.inner) {
    padding: 0 .5em;
  }

  border-left: 1px dashed var(--p-slate-300);
  border-right: 1px dashed var(--p-slate-300);
}

.elements {
  //outline: 1px solid blue;
  outline-offset: .25em;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  //min-height: 15em;

  .inner > & {
    min-height: 3em;
  }
  :not(.inner) > & {
    min-height: 5em;
  }

  :not(.inner) > & > :not(.placeholder):first-child {
    padding-left: 1em;
  }

  :not(.inner) > & > :not(.placeholder):last-child {
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
