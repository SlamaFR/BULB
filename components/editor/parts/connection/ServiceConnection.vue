<script setup lang="ts">
import { computed, inject, watch } from 'vue'
import { StopContextKey } from '~/utils/symbols'

const {
  connection,
} = defineProps<{
  connection: ServiceConnection
}>()

const stopContext = inject<StopContext>(StopContextKey)

const isPedestrian = computed(() => connection.$serviceConnection.walk)
watch(isPedestrian, (val) => {
  if (stopContext) stopContext.margins.leftMargin.connections = val ? '.5em' : '0em'
}, { immediate: true })
</script>

<template>
  <div class="connection-group-mode">
    <div class="mode-wrapper flex flex-row gap-.125em items-start" :class="{ pedestrian: connection.$serviceConnection.walk }">
      <Pedestrian v-if="connection.$serviceConnection.walk" />
      <IconOrnament v-for="service in connection.$serviceConnection.elements" :key="service.id" :ornament="service.$serviceConnectionElement.ornament">
        <Service :service="service.$serviceConnectionElement.service" />
      </IconOrnament>
    </div>
    <div class="flex flex-col items-center w-1em">
      <VerticalLine inner />
    </div>
  </div>
</template>

<style scoped lang="scss">
.connection-group-mode {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: .0625em;
  justify-items: start;
  height: 100%;
}

.connection-group-lines {
  display: grid;
  grid-template-columns: repeat(4, min-content);
  gap: .125em;
  width: min-content;

  > * {
    min-width: 1em;
  }
}

.mode-wrapper.pedestrian {
  margin-left: -1.125em;
}
</style>
