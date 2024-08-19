<script setup lang="ts">
import { isBranch, isFork, isLoop, isParallelBranches } from '~/utils/types'

const element = defineModel<LineElement>({ required: true })
</script>

<template>
  <div class="element">
    <div class="flex-grow flex flex-col items-center h-full">
      <!-- <span class="title">{{ elementToName(element) }}</span> -->
      <div class="content flex-grow flex items-center">
        <Branch v-if="isBranch(element)" v-model="element" />
        <Fork v-else-if="isFork(element)" :meta="element" />
        <Loop v-else-if="isLoop(element)" :meta="element" />
        <ParallelBranches v-else-if="isParallelBranches(element)" :meta="element" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.element {
  cursor: grab;
  user-select: none;
  transition: background-color .2s ease;
  border-radius: .25em;

  &:hover {
    background-color: var(--p-slate-100);
  }

  .title {
    padding: .25em .5em;
    color: var(--p-slate-400);
  }
}
</style>
