<script setup lang="ts">
const sections = defineModel<LineSection[]>({ required: true })
</script>

<template>
  <SectionEmptyState v-if="sections.length === 0" />
  <div v-else class="flex flex-row items-center gap-1em">
    <SectionEditor v-for="(section, i) in sections" :key="section.id" v-model="sections[i]" />
  </div>
</template>
