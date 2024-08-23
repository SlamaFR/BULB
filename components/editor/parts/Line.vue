<script setup lang="ts">
const {
  line,
} = defineProps<{
  line: Line
}>()

provide<LineContext>(LineContextKey, {
  color: computed(() => line.color ?? 'black'),
  lineWidth: computed(() => line.lineWidth),
})
</script>

<template>
  <div class="flex flex-row">
    <LineSection v-for="section in line.topology" :key="section.id" :section="section" />
  </div>
</template>

<style scoped>
* {
  font-family: 'Parisine Std';
  color: var(--blue-ratp-paper);
}
</style>
