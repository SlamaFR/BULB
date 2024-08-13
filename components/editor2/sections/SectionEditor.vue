<script setup lang="ts">
const section = defineModel<LineSection>({ required: true })
</script>

<template>
  <div class="section">
    <div class="flex flex-row items-center gap-2">
      <Button rounded text icon="i-tabler-x" size="small" severity="danger" />
      <span class="font-bold text-1rem">Section</span>
    </div>
    <div class="elements">
      <SectionElement
        v-for="(element, i) in section.$lineSection.elements"
        :key="element.id"
        v-model="section.$lineSection.elements[i]"
      />
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: .5em;

  padding: .5em;
  border: 1px dashed var(--p-slate-300);
  border-radius: .75em;
}

.elements {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
</style>
