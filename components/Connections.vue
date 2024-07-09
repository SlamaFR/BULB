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
  <div class="flex flex-col">
    <div v-for="(connection, index) in connections">
      <div class="sep-line" :class="{ large: index === 0 }" />
      <div class="mode-connections">
        <Mode :mode="connection.mode" />
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
</template>

<style scoped lang="scss">
.mode-connections {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: .125em;
}

.lines-grid {
  display: grid;
  grid-template-columns: repeat(3, 1em);
  gap: .125em;

  img {
    max-width: none;
  }
}

.sep-line {
  height: .5em;
  width: .0625em;
  margin-left: .5em;
  transform: translateX(-50%);
  margin-top: .0625em;
  margin-bottom: .0625em;
  background-color: var(--blue-ratp-paper);
  border-radius: .25em;

  &.large {
    height: 1em;
  }
}
</style>
