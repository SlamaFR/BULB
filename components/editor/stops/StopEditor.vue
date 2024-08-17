<script setup lang="ts">
const stop = defineModel<Stop>({ required: true })
</script>

<template>
  <div class="bg-blue h-1em">
    <StopDot terminus />
  </div>
</template>
