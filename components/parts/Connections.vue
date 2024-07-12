<script setup lang="ts">
import pedestrian from '~/assets/svg/pedestrian.svg'

const {
  connections,
} = defineProps<{
  connections: Connection[]
}>()

const pedestrianUrl = computed(() => `url(${pedestrian})`)
</script>

<template>
  <div v-if="connections.length > 0">
    <div class="sep-line large" />
    <div v-for="(connection, index) in connections" :key="index" class="connection-group">
      <div class="connection-group-mode">
        <div class="mode-wrapper flex flex-row gap-.5 items-center">
          <div v-if="connection.walk" class="pedestrian" />
          <Mode :mode="connection.mode" />
        </div>
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
    height: calc(100% - 1em - (.0625em * 2));
  }

  &:last-child .connection-group-mode .sep-line {
    display: none;
  }
}

.connection-group-mode .pedestrian {
  margin-top: .0625em;
  width: .875em;
  height: .875em;
  mask: v-bind(pedestrianUrl);
  background-color: var(--blue-ratp-paper);
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

.mode-wrapper:has(.pedestrian) {
  margin-left: -1em;
}

.sep-line {
  min-width: .0625em;
  max-width: .0625em;
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
