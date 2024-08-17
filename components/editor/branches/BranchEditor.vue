<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus'

const branch = defineModel<Branch>({ required: true })

const stops = ref(branch.value.$branch.stops)
watchArray(stops, (val) => {
  branch.value.$branch.stops = val
}, { deep: true })
</script>

<template>
  <div class="branch ">
    <!--
    <div class="flex flex-row items-center gap-2">
      <Button rounded text icon="i-tabler-x" size="small" severity="danger" />
      <span class="font-bold text-1rem">Section</span>
    </div>
    -->
    <VueDraggable
      v-model="stops"
      :animation="150"
      class="elements z-1"
      group="branchElements"
    >
      <StopEditor
        v-for="(stop, i) in stops"
        :key="stop.id"
        v-model="stops[i]"
      />
    </VueDraggable>
    <div class="absolute h-.5em w-full top-50% translate-y--50% bg-black" />
  </div>
</template>

<style scoped>
.branch {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  gap: .5em;
  padding: 3em 0;
}

.elements {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3em;
  min-height: 15em;
  min-width: 10em;
}
</style>
