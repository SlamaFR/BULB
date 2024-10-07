<script setup lang="ts">
// const {
//  meta,
// } = defineProps<{
//  meta: ParallelBranches
// }>()

const meta = defineModel<ParallelBranches>({ required: true })
</script>

<template>
  <div
    class="my-6em relative flex flex-col"
    :class="{
      left: meta.$parallelBranches.alignement === 'LEFT',
      right: meta.$parallelBranches.alignement === 'RIGHT',
      fluid: meta.$parallelBranches.alignement === 'FLUID',
    }"
  >
    <div v-for="(section, i) in meta.$parallelBranches.sections" :key="section.id" class="child-branch">
      <!-- <LineSection :section="section" :fluid="meta.$parallelBranches.alignement === 'FLUID'" /> -->
      <SectionEditor v-model="meta.$parallelBranches.sections[i]" :fluid="meta.$parallelBranches.alignement === 'FLUID'" inner />
    </div>
  </div>
</template>

<style scoped lang="scss">
.child-branch {
  height: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 2;
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
