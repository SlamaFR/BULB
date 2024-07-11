<script setup lang="ts">
import type { Connection } from '~/components/Connections.vue'
import { goesBelowLine } from '~/utils/text'

const {
  name,
  placeName = null,
  color,
  terminus = false,
  connections = [],
} = defineProps<{
  name: string
  placeName?: string | null
  color: string
  terminus?: boolean
  connections?: Connection[]
}>()

const nameParts = computed(() => name.split('\n'))
const nameGoesBelowBaseline = computed(() => goesBelowLine(name))
</script>

<template>
  <div
    class="wrapper relative"
    :class="{
      'multiline': nameParts.length > 1,
      'with-place': placeName,
      'lower-baseline': nameGoesBelowBaseline,
      terminus,
    }"
  >
    <div class="names">
      <div v-if="terminus || nameParts.length === 1" class="stop-label-wrapper">
        <StopLabel :stop-name="name" :terminus="terminus" />
      </div>
      <div v-else class="stop-multi-label-wrapper">
        <StopLabel
          v-for="(namePart, index) of name.split('\n')"
          :key="index"
          :stop-name="namePart"
          :terminus="terminus"
        />
      </div>
      <div v-if="placeName" class="place-label-wrapper">
        <PlaceLabel :place-name="placeName" />
      </div>
    </div>
    <StopDot :terminus="terminus" :connection="connections.length > 0" :color="color" />
    <div class="translate-x--.5em">
      <Connections :connections="connections" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-width: 3.5em;

  &:last-child {
    min-width: 0;
    max-width: 0;
  }

  &:not(.terminus):not(:last-child) {
    &.with-place {
      margin-right: 1em;

      &.multiline {
        .names {
          transform: translateX(-.5em);
        }

        margin-left: .5em;
      }
    }

    &.multiline {
      margin-right: .75em;

      &.with-place {
        margin-right: 2em;
      }
    }
  }

  &:last-child {
    &.multiline {
      margin-left: 1.5em;

      .with-place + & {
        margin-left: 2em;
      }

      .with-place + &.with-place {
        margin-left: 2.75em;
      }

      .multiline.with-place + &.with-place {
        margin-left: 2.5em;
      }
    }

    .with-place + &.with-place {
      margin-left: .5em;
    }
  }
}

.terminus.with-place .names {
  transform: translateX(calc(-1.65em / 2));
}

.stop-label-wrapper {
  position: absolute;
  top: -.125em;
  transform: translateY(-100%);
}

.stop-multi-label-wrapper {
  position: absolute;
  top: -.125em;
  transform: translate(calc(-50% + .375em), -100%);

  display: flex;
  flex-direction: row;
  gap: 1em;

  & > div {
    width: 1em;
  }
}

.place-label-wrapper {
  position: absolute;
  left: 1.5em;
  top: -.25em;
  transform: translateY(-100%);

  .lower-baseline:not(.terminus) & {
    margin-left: .375em;
  }

  .terminus.with-place & {
    left: 1.75em;
  }

  .multiline & {
    left: 2.375em;
  }
}
</style>
