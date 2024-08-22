<script setup lang="ts">
const sections = defineModel<LineSection[]>({ required: true })
</script>

<template>
  <div class="flex flex-row items-center gap-1em">
    <SectionEditor v-for="(section, i) in sections" :key="section.id" v-model="sections[i]" />
  </div>
</template>
