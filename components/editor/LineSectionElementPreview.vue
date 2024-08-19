<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

const {
  type,
} = defineProps<{
  type: 'BRANCH' | 'FORK' | 'PARALLEL_BRANCHES' | 'LOOP'
}>()
</script>

<template>
  <Branch
    v-if="type === 'BRANCH'"
    :model-value="{
      id: uuidv4(),
      $branch: {
        stopSpacing: 1,
        stops: [],
      },
    }"
  />
  <Fork
    v-else-if="type === 'FORK'"
    :meta="{
      id: uuidv4(),
      $fork: {
        toward: 'RIGHT',
        originOffset: 0,
        linksOffset: [1, -1],
        offsetMultiplier: 1,
      },
    }"
  />
  <ParallelBranches
    v-else-if="type === 'PARALLEL_BRANCHES'"
    :meta="{
      id: uuidv4(),
      $parallelBranches: {
        alignement: 'LEFT',
        sections: [
          {
            id: uuidv4(),
            $lineSection: {
              levelOffset: 1,
              elements: [
                {
                  id: uuidv4(),
                  $branch: {
                    stopSpacing: 1,
                    stops: [],
                    leftMargin: 3,
                    rightMargin: 3,
                  },
                },
              ],
            },
          },
          {
            id: uuidv4(),
            $lineSection: {
              levelOffset: -1,
              elements: [
                {
                  id: uuidv4(),
                  $branch: {
                    stopSpacing: 1,
                    stops: [],
                    leftMargin: 3,
                    rightMargin: 3,
                  },
                },
              ],
            },
          },
        ],
      },
    }"
  />
  <Loop
    v-else-if="type === 'LOOP'"
    :meta="{
      id: uuidv4(),
      $loop: {
        toward: 'LEFT',
        linksOffsets: [1, -1],
      },
    }"
  />
</template>
