<script setup lang="ts">
const {
  line,
} = defineProps<{
  line: Line
}>()

const lineColor = computed(() => line.color ?? 'black')

provide<LineContext>(LineContextKey, {
  color: lineColor,
})
</script>

<template>
  <div class="flex flex-row outline-cyan outline-1 p-1 outline-solid">
    <LineSection v-for="section in line.lineTopology" :key="section.id" :section="section" />
  </div>
</template>

<style scoped>
* {
  font-family: 'Parisine Std';
  color: var(--blue-ratp-paper);
}
</style>
