<script setup lang="ts">
import { type DraggableEvent, type SortableEvent, VueDraggable } from 'vue-draggable-plus'

const {
  fluid = false,
} = defineProps<{
  fluid?: boolean
}>()

const branch = defineModel<Branch>({ required: true })
const stops = ref(branch.value.$branch.stops)
watchArray(stops, val => branch.value.$branch.stops = val)

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
    if (child.hasAttribute('data-id') && child.getAttribute('data-id') == event.data.id) {
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
      class="stops z-100"
      group="branchElements"
      ghost-class="stop-ghost"
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
    <div class="line" />
  </div>
</template>

<style>
.stop-ghost {
  opacity: .5;
}
</style>

<style scoped lang="scss">
.branch-wrapper {
  //outline: 1px solid red;
  //outline-offset: .125em;

  position: relative;
  z-index: 2;

  &.fluid {
    flex-grow: 1;
  }

  &.empty {
    min-width: 3em;
  }

  &:not(.empty) {
    //margin-right: -.5em;
    //transform: translateX(.5em);
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
  flex-grow: 1;
  flex-direction: row;
  height: 1em;
  justify-content: space-evenly;
  align-items: center;
  gap: calc(v-bind(stopSpacing));

  & > :first-child > *,
  & > :first-child {
    padding-left: 0 !important;
    margin-left: 0 !important;
  }

  & > :last-child > *,
  & > :last-child {
    padding-right: 0 !important;
    margin-right: 0 !important;
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

  //border-radius: v-bind(lineWidth);
  //margin: 0 calc(v-bind(lineWidth) / -2);

  //.fluid & {
  //  //width: calc(100% + v-bind(lineWidth) - .5em);
  //}
  //
  //.branch-wrapper.empty & {
  //  //width: calc(100% + v-bind(lineWidth));
  //}
  //.branch-wrapper:not(.empty) & {
  //  //width: calc(100% + v-bind(lineWidth) - .5em);
  //  //left: .25em;
  //}
}
</style>
