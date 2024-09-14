<script setup lang="ts">
const props = defineProps<{
  value: string
  placeName: string | null
  subtitle: string | null
  interestPoint?: boolean
  terminus?: boolean
}>()
</script>

<template>
  <TerminusLabel v-if="props.terminus" v-bind="props" />
  <RegularLabel v-else v-bind="props" />
</template>
