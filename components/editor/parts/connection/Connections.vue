<script setup lang="ts">
import { useElementSize } from '@vueuse/core'
import { computed, inject, ref, watch } from 'vue'
import { STOP_PADDING } from '~/utils/dimensions'
import { StopContextKey } from '~/utils/symbols'
import { isMode, isService } from '~/utils/types'

const {
  connections,
  reverse = false,
} = defineProps<{
  connections: Connection[]
  reverse?: boolean
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
  <div v-if="hasConnections" ref="el" class="connections-box" :class="{ reverse }">
    <div v-if="!reverse" class="flex flex-col items-center w-1em">
      <VerticalLine large />
    </div>
    <div class="connection-groups">
      <div v-for="connection in connections" :key="connection.id" class="connection-group">
        <ModeConnection v-if="isMode(connection)" :connection="connection" />
        <ServiceConnection v-else-if="isService(connection)" :connection="connection" />
        <span v-else>?</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.connections-box {
  display: flex;
  flex-direction: column;

  &.reverse {
    flex-direction: column-reverse;
  }

  .debug & {
    outline: 1px solid red;
  }
}

.connection-groups {
  display: flex;
  flex-direction: column;
}

.connection-group {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .125em;
  margin-top: .0625em;
  align-items: start;
}
</style>
