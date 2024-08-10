<script setup lang="ts">
const {
  section,
  fluid = false,
} = defineProps<{
  section: LineSection
  fluid?: boolean
}>()

const offset = computed(() => `calc(${section.$lineSection.levelOffset} * -2.75em)`)
</script>

<template>
  <div class="section flex flex-row items-center w-full">
    <LineElement v-for="element in section.$lineSection.elements" :key="element.id" :element="element" :fluid="fluid" />
  </div>
</template>

<style scoped>
.section {
  transform: translateY(v-bind(offset));
  z-index: 2;
}
</style>
