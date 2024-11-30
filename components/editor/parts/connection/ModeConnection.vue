<script setup lang="ts">
import { computed, inject, watch } from 'vue'
import { StopContextKey } from '~/utils/symbols'

const {
  connection,
} = defineProps<{
  connection: ModeConnection
}>()

const CONDENSED_MODES: Mode[] = ['BUS', 'NOCTILIEN']
const MAX_COLUMNS = 4

const stopContext = inject<StopContext>(StopContextKey)

const isPedestrian = computed(() => connection.$modeConnection.walk)
const condensed = computed(() => {
  if (connection.$modeConnection.mode === null) return false
  return CONDENSED_MODES.includes(connection.$modeConnection.mode)
})

watch(isPedestrian, (val) => {
  if (stopContext) stopContext.margins.leftMargin.connections = val ? '.5em' : '0em'
}, { immediate: true })

function position(index: number) {
  if (!condensed.value) return null
  if (connection.$modeConnection.elements.length <= MAX_COLUMNS * 2) return { gridRow: 1 + index % 2 }
  return { gridColumn: 1 + index % MAX_COLUMNS }
}
</script>

<template>
  <div class="connection-group-mode">
    <div class="mode-wrapper flex flex-row gap-.125em items-start" :class="{ pedestrian: connection.$modeConnection.walk }">
      <Pedestrian v-if="connection.$modeConnection.walk" />
      <Mode :mode="connection.$modeConnection.mode" />
    </div>
    <VerticalLine inner />
  </div>
  <div
    class="connection-group-lines" :class="{ condensed, single: connection.$modeConnection.elements.length <= 1 }"
  >
    <IconOrnament
      v-for="(line, index) in connection.$modeConnection.elements"
      :key="line.id"
      :ornament="line.$modeConnectionElement.ornament"
      :walk="line.$modeConnectionElement.walk"
      :style="position(index)"
    >
      <LineIndex :mode="connection.$modeConnection.mode" :index="line.$modeConnectionElement.lineIndex" />
    </IconOrnament>
  </div>
</template>

<style scoped lang="scss">
.connection-group-mode {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: .0625em;
  justify-items: center;
  height: 100%;
}

.connection-group-lines {
  display: grid;
  grid-template-columns: repeat(v-bind(MAX_COLUMNS), min-content);
  row-gap: .125em;
  margin-bottom: 0.3125em;

  > * {
    min-width: 1em;
    margin-right: .125em;
  }

  .reverse > .connection-groups .connection-group:last-child & {
    margin-bottom: .4375em;
  }
}

.condensed {
  row-gap: .1em;

  & > div {
    font-size: .5em;
    margin-right: .25em;
  }

  &.single {
    height: 1em;

    & > div {
      grid-row: 1/3 !important;
      justify-content: center;
    }
  }
}

.mode-wrapper.pedestrian {
  margin-left: -1.125em;
}
</style>
