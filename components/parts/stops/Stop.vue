<script setup lang="ts">
import { goesBelowLine } from '~/utils/text'

const {
  name,
  subtitle = null,
  subtitleInterestPoint = false,
  preventSubtitleOverlap = true,
  color = null,
  terminus = false,
  connections = [],
} = defineProps<{
  name: string
  subtitle?: string | null
  subtitleInterestPoint?: boolean
  preventSubtitleOverlap?: boolean
  color?: string
  terminus?: boolean
  connections?: Connection[]
}>()

const nameParts = computed(() => name.split('\n'))
const multiline = computed(() => nameParts.value.length === 2)
const hasPedestrianConnection = computed(() => connections.some(connection => connection.walk))

const lineContext = inject<LineContext>(LineContextKey)
</script>

<template>
  <div
    class="stop-wrapper relative"
    :class="{
      'multiline': multiline,
      'with-place': subtitle,
      'lower-baseline': multiline ? goesBelowLine(nameParts[1]) : goesBelowLine(name),
      'prevent-subtitle-overlap': preventSubtitleOverlap,
      'with-pedestrian-connection': hasPedestrianConnection,
      terminus,
    }"
  >
    <div class="names">
      <div v-if="terminus || nameParts.length === 1" class="stop-label-wrapper">
        <StopLabel :stop-name="name" :terminus="terminus" />
      </div>
      <div v-else class="stop-multi-label-wrapper">
        <StopLabel
          v-for="namePart in name.split('\n')"
          :key="namePart"
          :stop-name="namePart"
          :terminus="terminus"
        />
      </div>
      <div v-if="subtitle" class="subtitle-label-wrapper">
        <SubtitleLabel :value="subtitle" :interest-point="subtitleInterestPoint" />
      </div>
    </div>
    <StopDot
      class="stop-handle"
      :terminus="terminus"
      :connection="connections.length > 0"
      :color="color ?? lineContext?.color.value ?? '#000000'"
    />
    <div class="h-0 w-0 mt-.125em">
      <Connections :connections="connections" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.stop-wrapper {
  outline: 1px solid magenta;
  padding: 0 1.5em;
  min-width: 1em;
  z-index: 2;
  left: -.5em;

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
  .multiline:not(.terminus) & {
    transform: translateX(-1em);
  }
}

.stop-label-wrapper {
  position: absolute;
  top: -.25em;
  transform: translateY(-100%);
}

.stop-multi-label-wrapper {
  position: absolute;
  top: -.25em;
  transform: translate(0, -100%);

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

  .multiline:not(.terminus) & {
    margin-left: 2.25em;
  }

  .prevent-subtitle-overlap.lower-baseline:not(.terminus) & {
    margin-left: calc(.375em);
  }

  .prevent-subtitle-overlap.multiline.lower-baseline:not(.terminus) & {
    margin-left: calc(2.25em + .375em);
  }
}
</style>
