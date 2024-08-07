<script setup lang="ts">
const {
  section,
} = defineProps<{
  section: LineSection
}>()

const offset = computed(() => `calc(${section.$lineSection.levelOffset} * -2.75em)`)
</script>

<template>
  <div class="py-2 outline-[magenta] outline-1 outline-solid section flex flex-row items-center w-full">
    <LineElement v-for="element in section.$lineSection.elements" :element="element" />
  </div>
</template>

<style scoped>
.section {
  transform: translateY(v-bind(offset));
}
</style>
