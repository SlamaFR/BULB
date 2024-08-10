<script setup lang="ts">
const {
  connections,
} = defineProps<{
  connections: Connection[]
}>()

const isMode = (connection: Connection): connection is ModeConnection => '$modeConnection' in connection
const isService = (connection: Connection): connection is ServiceConnection => '$serviceConnection' in connection
</script>

<template>
  <div v-if="connections.length > 0">
    <VerticalLine large />
    <div v-for="connection in connections" :key="connection.id" class="connection-group">
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
