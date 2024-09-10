<script setup lang="ts">
const stop = defineModel<Stop>({ required: true })

const lineContext = inject<LineContext>(LineContextKey)
const showPropertiesDialog = ref(false)

const el = ref()
const hovering = useElementHover(el)
</script>

<template>
  <div
    ref="el"
    v-bind="$attrs"
    class="stop-wrapper relative h-4em z-100"
  >
    <div class="names dynamic-part">
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
    <div class="connections">
      <Transition name="fade">
        <div v-show="hovering" class="w-1em absolute flex flex-col items-center">
          <Button icon="i-tabler-list" severity="secondary" rounded />
        </div>
      </Transition>
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
  padding: 0 1.5em;
  min-width: 1em;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

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
  top: -.25em;
  height: 0;
  cursor: pointer;

  transition: filter .2s ease;

  &:hover {
    filter: brightness(.5);
  }
}

.connections {
  //width: 0;
  position: relative;
  top: .125em;
  height: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
