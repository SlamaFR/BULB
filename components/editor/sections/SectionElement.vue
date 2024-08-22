<script setup lang="ts">
import { isBranch, isFork, isLoop, isParallelBranches } from '~/utils/types'

const {
  fluid = false,
  dummy = false,
} = defineProps<{
  fluid?: boolean
  dummy?: boolean
}>()

const element = defineModel<LineElement>({ required: true })
const showPropertiesDialog = ref(false)
</script>

<template>
  <div
    class="element"
    :class="{ fluid }"
    @click="showPropertiesDialog = true"
    @click.stop
  >
    <div class="flex-grow flex flex-col items-center h-full w-full">
      <!-- <span class="title">{{ elementToName(element) }}</span> -->
      <div class="content flex-grow flex items-center w-full">
        <Branch v-if="isBranch(element)" v-model="element" :fluid="fluid" />
        <Fork v-else-if="isFork(element)" :meta="element" />
        <Loop v-else-if="isLoop(element)" :meta="element" />
        <ParallelBranches v-else-if="isParallelBranches(element)" v-model="element" />
      </div>
    </div>

    <div v-if="!dummy">
      <ForkPropertiesDialog
        v-if="isFork(element)"
        v-model="element"
        v-model:visible="showPropertiesDialog"
      />
      <LoopPropertiesDialog
        v-if="isLoop(element)"
        v-model="element"
        v-model:visible="showPropertiesDialog"
      />
      <ParallelBranchesPropertiesDialog
        v-if="isParallelBranches(element)"
        v-model="element"
        v-model:visible="showPropertiesDialog"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.element {
  //outline: 1px solid lime;
  min-width: 1em;

  cursor: grab;
  user-select: none;
  transition: background-color .2s ease;
  border-radius: .25em;

  &:hover:not(&:has(.element:hover)) {
    background-color: var(--p-slate-100);
  }

  &.fluid {
    flex-grow: 1;
  }

  .title {
    padding: .25em .5em;
    color: var(--p-slate-400);
  }
}
</style>
