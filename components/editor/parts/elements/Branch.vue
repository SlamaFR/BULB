<script setup lang="ts">
import { type DraggableEvent, type SortableEvent, VueDraggable } from 'vue-draggable-plus'

const {
  fluid = false,
} = defineProps<{
  fluid?: boolean
}>()

const branch = defineModel<Branch>({ required: true })
const emphasize = ref(false)
const { grab, release } = useElementGrabbing((event) => {
  emphasize.value = event.type === 'STOP'
})

const elements = computed({
  get: () => branch.value.$branch.elements ?? [],
  set: val => branch.value.$branch.elements = val,
})

const lineContext = inject<LineContext>(LineContextKey)

const elementSpacing = computed(() => `${branch.value.$branch.elementSpacing}em`)
const leftMargin = computed(() => `${branch.value.$branch.leftMargin ?? 0}em`)
const rightMargin = computed(() => `${branch.value.$branch.rightMargin ?? 0}em`)

const color = computed(() => lineContext?.color.value ?? '#000000')
const lineWidth = computed(() => `${lineContext?.lineWidth.value ?? 1}em`)

/* Simply because the lib is muffin broken */
function moveOut(event: DraggableEvent<BranchElement>) {
  const el = event.from
  for (let i = 0; i < el.children.length; i++) {
    const child = el.children.item(i)!
    if (child.hasAttribute('data-id') && child.getAttribute('data-id') === event.data.id) {
      el.removeChild(child)
    }
  }
}
</script>

<template>
  <div
    class="branch-wrapper" :class="{
      empty: elements?.length === 0,
      fluid,
      negativeLeftMargin: (branch.$branch.leftMargin ?? 0) < 0,
      negativeRightMargin: (branch.$branch.rightMargin ?? 0) < 0,
      positiveLeftMargin: (branch.$branch.leftMargin ?? 0) > 0,
      positiveRightMargin: (branch.$branch.rightMargin ?? 0) > 0,
    }"
  >
    <VueDraggable
      v-model="elements"
      :animation="150"
      class="branch-elements open"
      :class="{ emphasize }"
      group="branchElements"
      ghost-class="branch-element-ghost"
      :swap-threshold=".75"
      handle=".branch-element-handle"
      @remove="(e: SortableEvent) => moveOut(e as DraggableEvent<BranchElement>)"
      @start="grab('STOP')"
      @end="release()"
    >
      <BranchElement
        v-for="(element, i) in elements"
        :key="element.id"
        v-model="elements[i]"
        :data-id="element.id"
      />
    </VueDraggable>
    <div class="line">
      <div v-if="false" class="export-hide line-left-tail" />
      <div v-if="false" class="export-hide line-right-tail" />
    </div>
  </div>
</template>

<style>
.element-ghost {
  opacity: .5;
}
</style>

<style scoped lang="scss">
.branch-wrapper {
  .debug & {
    outline: 1px solid orange;
    outline-offset: 1px;
  }

  position: relative;
  z-index: 2;

  &.fluid {
    flex-grow: 1;
  }

  &.empty {
    min-width: 3em;
  }

  &.negativeLeftMargin {
    margin-left: v-bind(leftMargin);
  }

  &.negativeRightMargin {
    margin-right: v-bind(rightMargin);
  }

  &.positiveLeftMargin {
    padding-left: v-bind(leftMargin);
  }

  &.positiveRightMargin {
    padding-right: v-bind(rightMargin);
  }
}

.branch-elements {
  position: relative;
  min-height: 4em;
  display: flex;
  z-index: 10;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: calc(v-bind(elementSpacing));
  pointer-events: fill;

  &:after {
    position: absolute;
    pointer-events: none;
    content: '';
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 4em;
    transform: translateY(-50%);
    background-color: transparent;
    border: 2px dashed transparent;
    border-radius: .25em;
    padding: 0 1em;
    margin: 0 -1em;
    transition: background-color .2s ease, border-color .2s ease;
  }
}

.emphasize {
  --border-color: var(--p-blue-400);
  padding: 0 1em;
  margin: 0 -1em;

  &:after {
    background: color-mix(in srgb, var(--border-color), transparent 85%);
    border-color: var(--border-color);
    padding: 0;
    margin: 0;
  }
}

.line {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: v-bind(lineWidth);
  z-index: -1;
  background-color: v-bind(color);
  width: calc(100%);

  & .line-left-tail {
    content: '';
    position: absolute;
    z-index: -10;
    left: 0;
    height: v-bind(lineWidth);
    width: 1em;
    transform: translateX(-100%);
    background: linear-gradient(to left, v-bind(color), transparent);

    .elements .element:not(:first-child) & {
      display: none;
    }
  }

  & .line-right-tail {
    content: '';
    position: absolute;
    z-index: -10;
    right: 0;
    height: v-bind(lineWidth);
    width: 1em;
    transform: translateX(100%);
    background: linear-gradient(to right, v-bind(color), transparent);

    .elements .element:not(:last-child) & {
      display: none;
    }
  }

  //border-radius: v-bind(lineWidth);
  //margin: 0 calc(v-bind(lineWidth) / -2);
}
</style>
