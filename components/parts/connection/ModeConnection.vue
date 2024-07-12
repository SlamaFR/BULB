<script setup lang="ts">
import pedestrian from '~/assets/svg/pedestrian.svg'
import VerticalLine from '~/components/parts/connection/VerticalLine.vue'

const {
  connection,
} = defineProps<{
  connection: ModeConnection
}>()

const pedestrianUrl = computed(() => `url(${pedestrian})`)
</script>

<template>
  <div class="connection-group-mode">
    <div class="mode-wrapper flex flex-row gap-.5 items-start">
      <div v-if="connection.walk" class="pedestrian" />
      <Mode :mode="connection.mode" />
    </div>
    <VerticalLine inner />
  </div>
  <div class="connection-group-lines">
    <IconOrnament v-for="line in connection.lines" :ornament="line.ornament">
      <Metro v-if="connection.mode === 'METRO'" :line="line.lineIndex" />
      <ExpressTrain v-else-if="connection.mode === 'RER'" :line="line.lineIndex" />
      <Train v-else-if="connection.mode === 'TRAIN'" :line="line.lineIndex" />
      <Tram v-else-if="connection.mode === 'TRAM'" :line="line.lineIndex" />
    </IconOrnament>
  </div>
</template>

<style scoped lang="scss">
.connection-group {
  & .connection-group-mode .sep-line {
    position: absolute;
    height: calc(100% - 1em - (.0625em * 2));
  }

  &:last-child .connection-group-mode .sep-line {
    display: none;
  }
}

.connection-group-mode .pedestrian {
  margin-top: .125em;
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
</style>
