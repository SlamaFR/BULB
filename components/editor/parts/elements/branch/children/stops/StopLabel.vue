<script setup lang="ts">
const props = defineProps<{
  value: string
  placeName: string | null
  subtitle: string | null
  preventSubtitleOverlapping: boolean
  interestPoint?: boolean
  terminus?: boolean
  accessible: boolean | 'undefined' | undefined
}>()
</script>

<template>
  <TerminusLabel v-if="props.terminus" v-bind="props" />
  <RegularLabel v-else v-bind="props" :prevent-subtitle-overlapping="preventSubtitleOverlapping" />
</template>
