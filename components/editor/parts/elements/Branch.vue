<script setup lang="ts">
import { type DraggableEvent, type SortableEvent, VueDraggable } from 'vue-draggable-plus'

const {
  fluid = false,
} = defineProps<{
  fluid?: boolean
}>()

const branch = defineModel<Branch>({ required: true })
const stops = computed({
  get: () => branch.value.$branch.stops,
  set: val => branch.value.$branch.stops = val,
})

const lineContext = inject<LineContext>(LineContextKey)

const stopSpacing = computed(() => `${branch.value.$branch.stopSpacing}em`)
const leftMargin = computed(() => `${branch.value.$branch.leftMargin ?? 0}em`)
const rightMargin = computed(() => `${branch.value.$branch.rightMargin ?? 0}em`)

const color = computed(() => lineContext?.color.value ?? '#000000')
const lineWidth = computed(() => `${lineContext?.lineWidth.value ?? 1}em`)

/* Simply because the lib is muffin broken */
function moveOut(event: DraggableEvent<Stop>) {
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
      empty: stops.length === 0,
      fluid,
      negativeLeftMargin: (branch.$branch.leftMargin ?? 0) < 0,
      negativeRightMargin: (branch.$branch.rightMargin ?? 0) < 0,
      positiveLeftMargin: (branch.$branch.leftMargin ?? 0) > 0,
      positiveRightMargin: (branch.$branch.rightMargin ?? 0) > 0,
    }"
  >
    <VueDraggable
      v-model="stops"
      :animation="150"
      class="stops open"
      group="branchElements"
      ghost-class="stop-ghost"
      :swap-threshold=".75"
      handle=".stop-handle"
      @remove="(e: SortableEvent) => moveOut(e as DraggableEvent<Stop>)"
    >
      <Stop
        v-for="(stop, i) in stops"
        :key="stop.id"
        v-model="stops[i]"
        :data-id="stop.id"
      />
    </VueDraggable>
    <div class="line">
      <div class="export-hide line-left-tail" />
      <div class="export-hide line-right-tail" />
    </div>
  </div>
</template>

<style>
.stop-ghost {
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

.stops {
  display: flex;
  z-index: 10;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: calc(v-bind(stopSpacing));
  pointer-events: fill;
}

.open {
  padding: 0 2em;
  margin: 0 -2em;
  height: 4em;

  .debug & {
    outline: 1px dashed lime;
  }

  .elements .element:not(:last-child) & {
    padding-right: 0;
    margin-right: 0;
  }

  .elements .element:not(:first-child) & {
    padding-left: 0;
    margin-left: 0;
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
