<script setup lang="ts">
import { isServiceConnection } from '~/utils/connections'

const {
  connections,
} = defineProps<{
  connections: (ServiceConnection | ModeConnection)[]
}>()
</script>

<template>
  <div v-if="connections.length > 0">
    <VerticalLine large />
    <div v-for="(connection, index) in connections" :key="index" class="connection-group">
      <ModeConnection v-if="isModeConnection(connection)" :connection="connection" />
      <ServiceConnection v-if="isServiceConnection(connection)" :connection="connection" />
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
