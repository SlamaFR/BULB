<script setup lang="ts">
const {
  element,
  fluid = false,
} = defineProps<{
  element: LineElement
  fluid?: boolean
}>()

const isBranch = (element: LineElement): element is Branch => '$branch' in element
const isFork = (element: LineElement): element is Fork => '$fork' in element
const isLoop = (element: LineElement): element is Loop => '$loop' in element
const isParallelBranches = (element: LineElement): element is ParallelBranches => '$parallelBranches' in element
</script>

<template>
  <Branch v-if="isBranch(element)" :meta="element" :fluid="fluid" />
  <Fork v-else-if="isFork(element)" :meta="element" />
  <Loop v-else-if="isLoop(element)" :meta="element" />
  <ParallelBranches v-else-if="isParallelBranches(element)" :meta="element" />
  <span v-else>?</span>
</template>
