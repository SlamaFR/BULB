<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { computed, inject, ref, watch } from 'vue'
import { STOP_PADDING } from '~/utils/dimensions'
import { StopContextKey } from '~/utils/symbols'
import { isMode, isService } from '~/utils/types'

const {
  connections,
} = defineProps<{
  connections: Connection[]
}>()

const stopContext = inject<StopContext>(StopContextKey)
const hasConnections = computed(() => connections.length > 0)
const el = ref()

const { width } = useElementSize(el)
const namesWidth = computed(() => stopContext?.namesWidth.value ?? '0px')
watch([hasConnections, width, namesWidth], ([visible, _width, _namesWidth]) => {
  if (stopContext) {
    if (visible) {
      stopContext.margins.rightMargin.connections = `calc(${_width}px - (${_namesWidth} + 1em) / 2 - ${STOP_PADDING})`
    } else {
      stopContext.margins.rightMargin.connections = `0px`
    }
  }
}, { immediate: true })
</script>

<template>
  <div v-if="hasConnections" ref="el" class="connections-box">
    <VerticalLine large />
    <div v-for="connection in connections" :key="connection.id" class="connection-group">
      <ModeConnection v-if="isMode(connection)" :connection="connection" />
      <ServiceConnection v-else-if="isService(connection)" :connection="connection" />
      <span v-else>?</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.debug .connections-box {
  outline: 1px solid red;
}

.connection-group {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: .125em;
  padding-bottom: .5em;
}
</style>
