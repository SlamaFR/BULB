<script setup lang="ts">
import { useElementHover } from '@vueuse/core'
import { computed, ref } from 'vue'
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

const el = ref()
const hoverDialog = useElementHover(el)
const zIndex = computed(() => {
  if (isLoop(element.value) || isFork(element.value)) {
    return 0
  }
  if (isBranch(element.value) || isParallelBranches(element.value)) {
    return 1
  }
  return 0
})
</script>

<template>
  <div
    class="section-element dynamic-part"
    :class="{ fluid }"
    :style="{ zIndex }"
    @click="showPropertiesDialog = true"
    @click.stop
  >
    <div class="flex-grow flex flex-col justify-center items-center h-full w-full">
      <div class="content flex items-center w-full" :class="{ emphasis: hoverDialog && showPropertiesDialog && false }">
        <Branch v-if="isBranch(element)" v-model="element" :fluid="fluid" />
        <Fork v-else-if="isFork(element)" :meta="element" />
        <Loop v-else-if="isLoop(element)" :meta="element" />
        <ParallelBranches v-else-if="isParallelBranches(element)" v-model="element" />
      </div>
    </div>

    <Teleport to="body">
      <div v-if="!dummy" ref="el">
        <BranchPropertiesDialog
          v-if="isBranch(element)"
          v-model="element"
          v-model:visible="showPropertiesDialog"
        />
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
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
.section-element {
  min-width: 1em;
  user-select: none;
  transition: background-color .2s ease;
  border-radius: .25em;

  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  &:hover:not(&:has(.dynamic-part:hover)) {
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

.content {
  transition: outline-color .2s ease;
  outline: 3px solid transparent;
  outline-offset: .25em;
  border-radius: .125rem;

  &.emphasis {
    outline-color: var(--p-primary-500);
    z-index: 100;
  }
}
</style>
