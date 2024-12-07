<script setup lang="ts">
const {
  value,
  interestPoint,
} = defineProps<{
  value: string
  interestPoint?: boolean
}>()
</script>

<template>
  <InterestPointLabel v-if="interestPoint" :value="value" />
  <SubtitleLabel v-else :value="value" />
</template>
