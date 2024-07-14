<script setup lang="ts">
const {
  connection,
} = defineProps<{
  connection: ModeConnection
}>()
</script>

<template>
  <div class="connection-group-mode">
    <div class="mode-wrapper flex flex-row gap-.5 items-start" :class="{ pedestrian: connection.walk }">
      <Pedestrian v-if="connection.walk" />
      <Mode :mode="connection.mode" />
    </div>
    <VerticalLine inner />
  </div>
  <div class="connection-group-lines">
    <IconOrnament v-for="line in connection.lines" :ornament="line.ornament" :walk="line.walk">
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
