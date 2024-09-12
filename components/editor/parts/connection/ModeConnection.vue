<script setup lang="ts">
const {
  connection,
} = defineProps<{
  connection: ModeConnection
}>()
</script>

<template>
  <div class="connection-group-mode">
    <div class="mode-wrapper flex flex-row gap-.125em items-start" :class="{ pedestrian: connection.$modeConnection.walk }">
      <Pedestrian v-if="connection.$modeConnection.walk" />
      <Mode :mode="connection.$modeConnection.mode" />
    </div>
    <VerticalLine inner />
  </div>
  <div class="connection-group-lines">
    <IconOrnament
      v-for="line in connection.$modeConnection.elements"
      :key="line.id"
      :ornament="line.$modeConnectionElement.ornament"
      :walk="line.$modeConnectionElement.walk"
    >
      <LineIndex :mode="connection.$modeConnection.mode" :index="line.$modeConnectionElement.lineIndex" />
    </IconOrnament>
  </div>
</template>

<style scoped lang="scss">
.connection-group-lines {
  display: grid;
  grid-template-columns: repeat(4, min-content);
  gap: 0;
  width: min-content;

  > :not(:first-child) {
    margin-left: .125em;
  }

  > * {
    min-width: 1em;
  }
}

.mode-wrapper.pedestrian {
  margin-left: -1.125em;
}
</style>
