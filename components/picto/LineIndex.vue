<script setup lang="ts">
const {
  mode,
  index,
} = defineProps<{
  mode: Mode
  index: string
}>()
</script>

<template>
  <Cable v-if="mode === 'CABLE'" :line="index" />
  <Metro v-else-if="mode === 'METRO'" :line="index" />
  <ExpressTrain v-else-if="mode === 'RER'" :line="index" />
  <Train v-else-if="mode === 'TRAIN'" :line="index" />
  <Tram v-else-if="mode === 'TRAM'" :line="index" />
</template>
