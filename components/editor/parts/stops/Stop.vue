<script setup lang="ts">
import { goesBelowLine } from '~/utils/text'

const stop = defineModel<Stop>({ required: true })
const terminus = false

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
      'multiline': multiline,
      'with-place': stop.subtitle,
      'lower-baseline': multiline ? goesBelowLine(nameParts[1]) : goesBelowLine(stop.name),
      'prevent-subtitle-overlap': stop.preventSubtitleOverlapping,
      'with-pedestrian-connection': hasPedestrianConnection,
      terminus,
    }"
  >
    <div class="names">
      <div v-if="terminus || nameParts.length === 1" class="stop-label-wrapper">
        <StopLabel
          :stop-name="stop.name"
          :terminus="terminus"
          @click="showPropertiesDialog = true"
        />
      </div>
      <div v-else class="stop-multi-label-wrapper">
        <StopLabel
          v-for="namePart in stop.name.split('\n')"
          :key="namePart"
          :stop-name="namePart"
          :terminus="terminus"
          @click="showPropertiesDialog = true"
        />
      </div>
      <div v-if="stop.subtitle" class="subtitle-label-wrapper">
        <SubtitleLabel
          :value="stop.subtitle"
          :interest-point="stop.interestPoint"
          @click="showPropertiesDialog = true"
        />
      </div>
    </div>
    <StopDot
      class="stop-handle"
      :terminus="terminus"
      :connection="stop.connections.length > 0"
      :color="lineContext?.color.value ?? '#000000'"
    />
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
  //outline: 1px solid magenta;
  padding: 0 1.5em;
  min-width: 1em;
  z-index: 20;
  //left: -.5em;

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
  left: .5em;

  .multiline:not(.terminus) & {
    transform: translateX(-1em);
  }

  .label {
    transition: color .2s ease;
    &.interest-point {
      transition: background-color .2s ease;
    }
  }
  &:hover .label {
    color: var(--p-primary-500);

    &.interest-point {
      background-color: var(--p-primary-500);
      color: white;
    }
  }
}

.stop-label-wrapper {
  position: absolute;
  top: -.25em;
  transform: translateY(-100%);
  width: 0;
}

.stop-multi-label-wrapper {
  position: absolute;
  top: -.25em;
  transform: translate(0, -100%);
  width: 0;

  display: flex;
  flex-direction: row;
  gap: 2em;

  & > div {
    width: 0;
  }
}

.subtitle-label-wrapper {
  position: absolute;
  left: 1.25em;
  top: calc(-.125em + var(--font-shift-correction));
  transform: translateY(-100%);
  width: 0;

  .multiline:not(.terminus) & {
    margin-left: 2em;
  }

  .prevent-subtitle-overlap.lower-baseline:not(.terminus) & {
    margin-left: calc(.375em);
  }

  .prevent-subtitle-overlap.multiline.lower-baseline:not(.terminus) & {
    margin-left: calc(2em + .375em);
  }
}
</style>
