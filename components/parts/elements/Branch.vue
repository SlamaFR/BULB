<script setup lang="ts">
const {
  meta,
  fluid = false,
} = defineProps<{
  meta: Branch
  fluid?: boolean
}>()

const lineContext = inject<LineContext>(LineContextKey)

const stopSpacing = computed(() => `${meta.$branch.stopSpacing}em`)
const leftMargin = computed(() => `${meta.$branch.leftMargin ?? 0}em`)
const rightMargin = computed(() => `${meta.$branch.rightMargin ?? 0}em`)

const color = computed(() => lineContext?.color.value ?? '#000000')
const offset = computed(() => `calc(${meta.$branch.levelOffset} * -2.75em)`)
</script>

<template>
  <div
    class="outline-1 outline-red outline-solid bg-red/25 branch-wrapper" :class="{
      fluid,
      negativeLeftMargin: meta.$branch.leftMargin < 0,
      negativeRightMargin: meta.$branch.rightMargin < 0,
      positiveLeftMargin: meta.$branch.leftMargin > 0,
      positiveRightMargin: meta.$branch.rightMargin > 0,
    }"
  >
    <span v-if="false" class="absolute top--1.5em left-0 text-red text-sm">Branch</span>
    <div class="branch">
      <Stop
        v-for="stop in meta.$branch.stops"
        :key="stop.id"
        :name="stop.name"
        :subtitle="stop.subtitle"
        :subtitle-interest-point="stop.interestPoint"
        :prevent-subtitle-overlap="stop.preventSubtitleOverlapping"
        :connections="stop.connections"
      />
    </div>
    <div class="line" />
  </div>
</template>

<style scoped lang="scss">
.branch-wrapper {
  position: relative;
  transform: translateY(v-bind(offset));

  &.fluid {
    flex-grow: 1;
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

.branch {
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-evenly;
  gap: v-bind(stopSpacing);
  height: 1em;
}

.line {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: calc(100%);
  height: .375em;
  z-index: 0;
  background-color: v-bind(color);
}
</style>
