<script setup lang="ts">
const {
  element,
  fluid = false,
} = defineProps<{
  element: LineElement
  fluid?: boolean
}>()
</script>

<template>
  <Branch v-if="isBranch(element)" :meta="element" :fluid="fluid" />
  <Fork v-else-if="isFork(element)" :meta="element" />
  <Loop v-else-if="isLoop(element)" :meta="element" />
  <ParallelBranches v-else-if="isParallelBranches(element)" :meta="element" />
  <span v-else>?</span>
</template>
