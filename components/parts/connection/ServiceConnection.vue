<script setup lang="ts">
const {
  connection,
} = defineProps<{
  connection: ServiceConnection
}>()
</script>

<template>
  <div class="connection-group-mode">
    <div class="mode-wrapper flex flex-row gap-.5 items-start" :class="{ pedestrian: connection.walk }">
      <Pedestrian v-if="connection.walk" />
      <IconOrnament v-for="(service, index) in connection.services" :key="index" :ornament="service.ornament">
        <Service :service="service.service" />
      </IconOrnament>
    </div>
    <VerticalLine inner />
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
