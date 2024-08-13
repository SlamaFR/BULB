<script setup lang="ts">
const element = defineModel<LineElement>({ required: true })

function elementToName(element: LineElement): string {
  if (isBranch(element)) return 'Branche'
  if (isFork(element)) return 'Fourche'
  if (isLoop(element)) return 'Demi-tour'
  if (isParallelBranches(element)) return 'Branches parallèles'
  return '?'
}
</script>

<template>
  <div class="element">
    <div class="flex-grow flex flex-col items-center h-full">
      <span class="title">{{ elementToName(element) }}</span>
      <div class="content flex-grow flex items-center">
        <Branch v-if="isBranch(element)" :meta="element" />
        <Fork v-else-if="isFork(element)" :meta="element" />
        <Loop v-else-if="isLoop(element)" :meta="element" />
        <ParallelBranches v-else-if="isParallelBranches(element)" :meta="element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.element {
  user-select: none;
  border: 1px solid var(--p-slate-200);

  .title {
    padding: .25em .5em;
    color: var(--p-slate-400);
  }

  .content {
    padding: .5em 0;
  }

  &:first-child .content {
    padding-left: 1em;
  }

  &:last-child .content {
    padding-right: 1em;
  }

  &:first-child {
    border-bottom-left-radius: .25em;
    border-top-left-radius: .25em;
  }

  &:last-child {
    border-bottom-right-radius: .25em;
    border-top-right-radius: .25em;
  }

  &:not(:last-child) {
    border-right: none;
  }
}
</style>
