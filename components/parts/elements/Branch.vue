<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const branch = defineModel<Branch>({ required: true })
const stops = ref(branch.value.$branch.stops)
watchArray(stops, val => branch.value.$branch.stops = val, { deep: true })

const lineContext = inject<LineContext>(LineContextKey)

const stopSpacing = computed(() => `${branch.value.$branch.stopSpacing}em`)
const leftMargin = computed(() => `${branch.value.$branch.leftMargin ?? 0}em`)
const rightMargin = computed(() => `${branch.value.$branch.rightMargin ?? 0}em`)

const color = computed(() => lineContext?.color.value ?? '#000000')
const lineWidth = computed(() => `${lineContext?.lineWidth.value ?? 1}em`)
</script>

<template>
  <div
    class="branch-wrapper" :class="{
      empty: stops.length === 0,
      fluid: false,
      negativeLeftMargin: (branch.$branch.leftMargin ?? 0) < 0,
      negativeRightMargin: (branch.$branch.rightMargin ?? 0) < 0,
      positiveLeftMargin: (branch.$branch.leftMargin ?? 0) > 0,
      positiveRightMargin: (branch.$branch.rightMargin ?? 0) > 0,
    }"
  >
    <VueDraggable
      v-model="stops"
      :animation="150"
      class="stops z-1"
      group="branchElements"
      :empty-insert-threshold="10"
      :swap-threshold="10"
      ghost-class="stop-ghost"
      handle=".stop-handle"
    >
      <Stop
        v-for="stop in stops"
        :key="stop.id"
        :name="stop.name"
        :subtitle="stop.subtitle"
        :subtitle-interest-point="stop.interestPoint"
        :prevent-subtitle-overlap="stop.preventSubtitleOverlapping"
        :connections="stop.connections"
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
  outline: 1px solid green;
  position: relative;
  z-index: 2;

  &.fluid {
    flex-grow: 1;
  }

  &.empty {
    min-width: 3em;
  }
  &:not(.empty) {
    margin-right: -.5em;
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
  //justify-content: space-evenly;
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
  left: 0;
  transform: translateY(-50%);
  height: v-bind(lineWidth);
  z-index: -1;
  background-color: v-bind(color);
  border-radius: v-bind(lineWidth);
  margin: 0 calc(v-bind(lineWidth) / -2);
  width: calc(100% + v-bind(lineWidth) - 1em);

  .empty & {
    width: calc(100% + v-bind(lineWidth));
  }
}
</style>
