<script setup lang="ts">
const stop = defineModel<Stop>({ required: true })
</script>

<template>
  <div class="stop">
    <Stop
      name="Nom de l’arrêt"
      subtitle="rrrrrrr"
    />
  </div>
</template>

<style scoped>
.stop {
  background-color: red;
  min-width: 1em;
  min-height: 1em;
}
</style>
