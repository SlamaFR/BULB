<script setup lang="ts">
const stop = defineModel<Stop>({ required: true })

const lineContext = inject<LineContext>(LineContextKey)
const showPropertiesDialog = ref(false)
const showConnectionsEditor = ref(false)

const el = ref()
const hovering = useElementHover(el)

const names = ref()
const { width: namesWidth } = useElementSize(names)
</script>

<template>
  <div
    ref="el"
    v-bind="$attrs"
    class="stop-wrapper relative h-4em z-100"
  >
    <div class="flex flex-col items-start">
      <div ref="names" class="names dynamic-part">
        <StopLabel
          :value="stop.name"
          :subtitle="stop.subtitle"
          :place-name="stop.placeName"
          :interest-point="stop.interestPoint"
          :terminus="stop.terminus"
          @click="showPropertiesDialog = true"
        />
      </div>
      <div class="dot-connections" :style="{ marginLeft: `calc((${namesWidth}px - 1em) / 2)` }">
        <div class="dot">
          <StopDot
            class="stop-handle z-1"
            :terminus="stop.terminus"
            :connection="stop.connections.length > 0"
            :color="lineContext?.color.value ?? '#000000'"
          />
        </div>
        <div class="connections dynamic-part">
          <div @click="showConnectionsEditor = true">
            <Connections :connections="stop.connections" />
            <Transition v-if="stop.connections.length === 0" name="fade">
              <div v-show="hovering" class="button-holder">
                <Button icon="i-tabler-playlist-add" rounded @click="showConnectionsEditor = true" />
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>

  <StopPropertiesDialog
    v-model:visible="showPropertiesDialog"
    v-model="stop"
  />
  <ConnectionsEditor
    v-model:visible="showConnectionsEditor"
    v-model:stop="stop"
  />
</template>

<style scoped lang="scss">
.stop-wrapper {
  .debug & {
    outline: 1px solid rgba(0, 255, 255, 0.5);
  }

  padding: 0 0 0 1.25em;
  min-width: 1em;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}

.names {
  .debug & {
    outline: 1px solid magenta;
    outline-offset: .125em;
  }

  position: relative;
  top: -.125em;
  height: 0;
  cursor: pointer;

  transition: filter .2s ease;

  &:hover {
    filter: brightness(.5);
  }

  .stop-wrapper:last-child & {
    width: 1em;
  }
}

.dot-connections {
  display: flex;
  flex-direction: column;
  align-items: start;

  .stop-wrapper:first-child & {
    margin-left: 0 !important;
  }
}

.dot {
  .debug & {
    outline: 1px solid orange;
    outline-offset: .125em;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
}

.connections {
  .debug & {
    outline: 1px solid red;
    outline-offset: .125em;
  }

  min-width: 2.25em;
  position: relative;
  top: .125em;
  height: 0;

  .stop-wrapper:last-child & {
    min-width: 1em;
    width: 1em;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    cursor: pointer;

    .button-holder {
      left: 50%;
      transform: translateX(-50%);
      top: -.125em;
      padding-top: .375em;
      width: .125em;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--p-button-primary-background);
    }

    transition: filter .2s ease;

    &:hover {
      filter: brightness(.5);
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
