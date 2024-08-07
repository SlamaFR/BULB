<script setup lang="ts">
const {
  connections,
} = defineProps<{
  connections: Connection[]
}>()

function isMode(connection: Connection): connection is ModeConnection {
  return '$modeConnection' in connection
}

function isService(connection: Connection): connection is ServiceConnection {
  return '$serviceConnection' in connection
}
</script>

<template>
  <div v-if="connections.length > 0">
    <VerticalLine large />
    <div v-for="(connection, index) in connections" :key="index" class="connection-group">
      <ModeConnection v-if="isMode(connection)" :connection="connection" />
      <ServiceConnection v-else-if="isService(connection)" :connection="connection" />
      <span v-else>?</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.connection-group {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: .125em;
  padding-bottom: .5em;
}
</style>
