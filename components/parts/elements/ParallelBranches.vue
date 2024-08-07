<script setup lang="ts">
const {
  meta,
} = defineProps<{
  meta: ParallelBranches
}>()
</script>

<template>
  <div
    class="relative flex flex-col"
    :class="{
      left: meta.$parallelBranches.alignement === 'LEFT',
      right: meta.$parallelBranches.alignement === 'RIGHT',
      fluid: meta.$parallelBranches.alignement === 'FLUID',
    }"
  >
    <div v-for="section in meta.$parallelBranches.sections" class="child-branch">
      <LineSection :section="section" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.child-branch {
  height: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  //transform: translateY(-.5em);
}

.left {
  align-items: start;
}

.right {
  align-items: end;
}

.fluid {
  align-items: stretch;
}
</style>
