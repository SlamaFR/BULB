<script setup lang="ts">
const {
  element,
  fluid = false,
} = defineProps<{
  element: LineElement
  fluid?: boolean
}>()

function isBranch(element: LineElement): element is Branch {
  return '$branch' in element
}

function isFork(element: LineElement): element is Fork {
  return '$fork' in element
}

function isLoop(element: LineElement): element is Loop {
  return '$loop' in element
}

function isParallelBranches(element: LineElement): element is ParallelBranches {
  return '$parallelBranches' in element
}
</script>

<template>
  <Branch v-if="isBranch(element)" :meta="element" :fluid="fluid" />
  <Fork v-else-if="isFork(element)" :meta="element" />
  <Loop v-else-if="isLoop(element)" :meta="element" />
  <ParallelBranches v-else-if="isParallelBranches(element)" :meta="element" />
  <span v-else>?</span>
</template>
