<script setup lang="ts">
const stop = defineModel<Stop>({ required: true })

const nameParts = computed(() => stop.value.name.split('\n'))
const multiline = computed(() => nameParts.value.length === 2)
const hasPedestrianConnection = computed(() => false)// connections.some(connection => connectio.walk))

const lineContext = inject<LineContext>(LineContextKey)
const showPropertiesDialog = ref(false)
</script>

<template>
  <div
    v-bind="$attrs"
    class="stop-wrapper relative"
    :class="{
      //'multiline': multiline,
      //'with-place': stop.subtitle,
      //'lower-baseline': multiline ? goesBelowLine(nameParts[1]) : goesBelowLine(stop.name),
      //'prevent-subtitle-overlap': stop.preventSubtitleOverlapping,
      //'with-pedestrian-connection': hasPedestrianConnection,
      //'terminus': stop.terminus,
    }"
  >
    <div class="names bg-red">
      <StopLabel
        :value="stop.name"
        :subtitle="stop.subtitle"
        :place-name="stop.placeName"
        :interest-point="stop.interestPoint"
        :terminus="stop.terminus"
        @click="showPropertiesDialog = true"
      />
    </div>
    <div class="flex flex-col items-center">
      <StopDot
        class="stop-handle"
        :terminus="stop.terminus"
        :connection="stop.connections.length > 0"
        :color="lineContext?.color.value ?? '#000000'"
      />
    </div>
    <div class="h-0 w-0 mt-.125em">
      <Connections :connections="stop.connections" />
    </div>
  </div>

  <StopPropertiesDialog
    v-model:visible="showPropertiesDialog"
    v-model="stop"
  />
</template>

<style scoped lang="scss">
.stop-wrapper {
  outline: 1px solid magenta;
  //outline-offset: .25em;

  padding: 0 1.5em;
  min-width: 1em;
  z-index: 20;

  &.with-place {
    margin-right: calc(1.2031em + .25em);
  }

  &.multiline:not(.terminus) {
    margin-left: 1em;
    margin-right: 1em;
  }

  &.multiline.with-place:not(.terminus) {
    margin-left: 1em;
    margin-right: calc(1em + 1.2031em + .25em);
  }

  &.terminus {
    margin-left: .75em;
  }

  &.terminus.multiline {
    margin-left: 3em;
  }

  &.with-pedestrian-connection {
    margin-left: .875em;
  }
}

.names {
  position: relative;
  //left: 50%;
  //top: -.25em;
}
</style>
