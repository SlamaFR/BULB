<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const {
  inner = false,
  fluid = false,
} = defineProps<{
  inner?: boolean
  fluid?: boolean
}>()
const section = defineModel<LineSection>({ required: true })
const elements = ref(section.value.$lineSection.elements)
watchArray(elements, (val) => {
  section.value.$lineSection.elements = val
}, { deep: true })

const offset = computed(() => `calc(${section.value.$lineSection.levelOffset} * -2.75em)`)
</script>

<template>
  <div
    class="section" :class="{
      inner,
      fluid,
      empty: elements.length === 0,
    }"
  >
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
      ghost-class="section-ghost"
      :empty-insert-threshold="32"
      :swap-threshold="inner ? .5 : .25"
      :inverted-swap-threshold="5"
    >
      <SectionElement
        v-for="(element, i) in elements"
        :key="element.id"
        v-model="elements[i]"
        :fluid="fluid"
      />
    </VueDraggable>
  </div>
</template>

<style>
.section-ghost {
  opacity: .5;
}
</style>

<style scoped lang="scss">
.section {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: .5em;
  transform: translateY(v-bind(offset));
  //min-height: 4em;
  min-width: 1em;

  //&:not(.inner) {
  //  padding: 0 .5em;
  //}

  &.fluid {
    width: 100%;
  }

  outline: 1px dashed transparent;
  border-radius: .25em;
  transition: outline .3s ease;

  .section:hover > &, &:hover, &.empty {
    outline-color: var(--p-slate-300);
  }

  .section-handle {
    position: absolute;
    top: .125em;
    left: .125em;
    cursor: grab;

    i {
      display: block;
      color: var(--p-slate-400);
      font-size: .375em;
    }
  }
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
