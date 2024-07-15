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
  <Metro v-if="mode === 'METRO'" :line="index" />
  <ExpressTrain v-else-if="mode === 'RER'" :line="index" />
  <Train v-else-if="mode === 'TRAIN'" :line="index" />
  <Tram v-else-if="mode === 'TRAM'" :line="index" />
</template>
