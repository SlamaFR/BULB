<script setup lang="ts">
const {
  mode,
  index,
} = defineProps<{
  mode: Mode | null
  index: string | null
}>()
</script>

<template>
  <Cable v-if="index && mode === 'CABLE'" :line="index" />
  <Metro v-else-if="index && mode === 'METRO'" :line="index" />
  <ExpressTrain v-else-if="index && mode === 'RER'" :line="index" />
  <Train v-else-if="index && mode === 'TRAIN'" :line="index" />
  <Tram v-else-if="index && mode === 'TRAM'" :line="index" />
</template>
