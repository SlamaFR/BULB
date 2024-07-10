<script setup lang="ts">
export interface Connection {
  mode: Mode
  lines: MetroLine[] | RerLine[] | TrainLine[] | TramLine[]
}

const {
  connections,
} = defineProps<{
  connections: Connection[]
}>()
</script>

<template>
  <div v-if="connections.length > 0">
    <div class="sep-line large" />
    <div v-for="(connection, index) in connections" :key="index" class="connection-group">
      <div class="connection-group-mode">
        <Mode :mode="connection.mode" />
        <div class="sep-line" />
      </div>
      <div class="connection-group-lines">
        <div v-for="line in connection.lines">
          <Metro v-if="connection.mode === 'METRO'" :line="line" />
          <ExpressTrain v-else-if="connection.mode === 'RER'" :line="line" />
          <Train v-else-if="connection.mode === 'TRAIN'" :line="line" />
          <Tram v-else-if="connection.mode === 'TRAM'" :line="line" />
        </div>
      </div>
    </div>
  </div>
  <!--
  <div v-if="connections.length > 0" class="sep-line large" />
  <div class="flex flex-col">
    <div v-for="(connection, index) in connections" :key="index">
      <div class="mode-connections">
        <div>
          <Mode :mode="connection.mode" />
          <div class="test" />
        </div>
        <div class="lines-grid">
          <div v-for="line in connection.lines">
            <Metro v-if="connection.mode === 'METRO'" :line="line" />
            <ExpressTrain v-else-if="connection.mode === 'RER'" :line="line" />
            <Train v-else-if="connection.mode === 'TRAIN'" :line="line" />
            <Tram v-else-if="connection.mode === 'TRAM'" :line="line" />
          </div>
        </div>
      </div>
    </div>
  </div>
  -->
</template>

<style scoped lang="scss">
.connection-group {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: .125em;
  padding-bottom: .5em;

  & .connection-group-mode .sep-line {
    position: absolute;
    height: calc(100% - 1em - (.0625em  * 2));
  }

  &:last-child .connection-group-mode .sep-line {
    display: none;
  }
}

.connection-group-lines {
  display: grid;
  grid-template-columns: repeat(3, min-content);
  gap: .125em;

  > * {
    min-width: 1em;
  }
}

.sep-line {
  width: .0625em;
  margin: .0625em 0 .0625em .5em;
  transform: translateX(-50%);
  background-color: var(--blue-ratp-paper);
  border-radius: .25em;

  &.large {
    height: .75em;
  }
}
</style>
