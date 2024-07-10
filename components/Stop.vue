<script setup lang="ts">
import type { Connection } from '~/components/Connections.vue'

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
</script>

<template>
  <div
    class="wrapper relative"
    :class="{
      'multiline': nameParts.length > 1,
      'with-place': placeName,
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

/*
.wrapper.multiline:not(:first-child) {
  margin-left: 1em;

  &:has(.terminus) {
    margin-left: 1.5em;
  }
}
.wrapper.multiline.with-place {
  margin: 0 1.25em;

  & .names {
    transform: translateX(calc(-1em / 2));
  }
}

.wrapper.with-place:has(.terminus) {
  margin-left: 1.5em;
}

.wrapper:last-child {
  min-width: 0;
  max-width: 0;
}
 */

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

  .terminus.with-place & {
    left: 1.65em;
  }

  .multiline & {
    left: 2.65em;
  }
}
</style>
