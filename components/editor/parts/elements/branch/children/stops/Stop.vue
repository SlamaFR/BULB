<script setup lang="ts">
import { useElementHover, useElementSize } from '@vueuse/core'
import { computed, inject, provide, reactive, ref } from 'vue'
import { STOP_PADDING } from '~/utils/dimensions'
import { LineContextKey, StopContextKey } from '~/utils/symbols'

const { reverse } = defineProps<{
  reverse: boolean
}>()
const stop = defineModel<Stop>({ required: true })
const lineContext = inject<LineContext>(LineContextKey)!
const showPropertiesDialog = ref(false)
const showConnectionsEditor = ref(false)

const el = ref()
const hovering = useElementHover(el)

const padding = computed(() => STOP_PADDING)
const margins = reactive({
  leftMargin: {
    name: '0px',
    connections: '0px',
  },
  rightMargin: {
    name: '0px',
    subtitle: '0px',
    connections: '0px',
  },
})

const leftMargin = computed(() => `max(${margins.leftMargin.name}, ${margins.leftMargin.connections})`)
const rightMargin = computed(() => `max(${margins.rightMargin.name}, ${margins.rightMargin.subtitle}, ${margins.rightMargin.connections})`)
const namesMargin = computed(() => `min(-.125em, -${Math.max(0, lineContext.lineThickness.value - 0.375) / 2}em)`)
const connectionsMargin = computed(() => `max(.125em, ${Math.max(0, lineContext.lineThickness.value - 0.825) / 2}em)`)
const inverted = computed(() => stop.value.$stop.reverse || reverse)

const names = ref()
const { width } = useElementSize(names)
const namesWidth = computed(() => `${width.value}px`)

provide<StopContext>(StopContextKey, { margins, namesWidth, inverted })
</script>

<template>
  <div
    ref="el"
    v-bind="$attrs"
    class="stop-wrapper relative z-100"
    :class="{ reverse: inverted }"
  >
    <div
      class="flex items-start" :class="{
        'flex-col-reverse': inverted,
        'flex-col': !inverted,
      }"
    >
      <div ref="names" class="names dynamic-part">
        <StopLabel
          :value="stop.$stop.name"
          :subtitle="stop.$stop.subtitle"
          :place-name="stop.$stop.placeName"
          :interest-point="stop.$stop.interestPoint"
          :prevent-subtitle-overlapping="stop.$stop.preventSubtitleOverlapping"
          :terminus="stop.$stop.terminus"
          :accessible="stop.$stop.accessible"
          :reverse="inverted"
          @click="(e: Event) => {
            e.stopPropagation()
            showPropertiesDialog = true
          }"
        />
      </div>
      <div class="dot-connections">
        <div class="dot">
          <StopDot
            class="branch-element-handle z-1"
            :terminus="stop.$stop.terminus"
            :connection="stop.$stop.connections.length > 0"
            :color="lineContext.color.value"
            :closed="stop.$stop.closed"
            @click="(e: Event) => e.stopPropagation()"
          />
        </div>
        <div class="w-0 connections dynamic-part">
          <div
            @click="(e: Event) => {
              e.stopPropagation()
              showConnectionsEditor = true
            }"
          >
            <Connections :connections="stop.$stop.connections" :reverse="inverted" />
            <Transition v-if="stop.$stop.connections.length === 0" name="fade">
              <div v-show="hovering" class="button-holder export-hide">
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
  padding-left: v-bind(leftMargin);
  padding-right: v-bind(rightMargin);
  min-width: 1em;
  min-height: 5em;
  z-index: 20;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  .branch-elements > &:first-child,
  .branch-elements > .branch-element-ghost:first-child & {
    margin-left: calc((v-bind(namesWidth) - 1em) / -2) !important;
    padding-left: 0;

    .names {
      margin-left: 0;
    }

    .dot-connections {
      margin-left: calc((v-bind(namesWidth) - 1em) / 2);
    }
  }

  .branch-elements > &:last-child,
  .branch-elements > .branch-element-ghost:last-child & {
    margin-right: calc((v-bind(namesWidth) - 1em) / -2) !important;
    padding-right: 0;

    .names {
      margin-right: 0;
    }

    .dot-connections {
      width: 1em;
    }
  }

  .debug & {
    outline: 1px solid cyan;
  }
}

.names {
  .debug & {
    outline: 1px solid blue;
  }

  position: relative;
  top: v-bind(namesMargin);
  height: 0;
  cursor: pointer;
  margin: 0 v-bind(STOP_PADDING);
  transition: filter .2s ease;

  .reverse & {
    top: auto;
    bottom: v-bind(namesMargin);
  }

  &:hover {
    filter: brightness(.5);
  }
}

.dot-connections {
  display: flex;
  flex-direction: column;
  align-items: start;

  margin-left: calc((v-bind(namesWidth) - 1em) / 2 + v-bind(padding));

  .reverse & {
    flex-direction: column-reverse;
  }
}

.dot {
  .debug & {
    outline: 1px solid magenta;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
}

.connections {
  min-width: 1em;
  position: relative;
  top: v-bind(connectionsMargin);
  height: 0;

  .reverse & {
    top: auto;
    bottom: v-bind(connectionsMargin);
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    cursor: pointer;

    .reverse & {
      transform: translateY(-100%);
    }

    .button-holder {
      left: .5em;
      transform: translateX(-50%);
      top: calc(v-bind(connectionsMargin) * -1);
      padding-top: .5em;
      width: .125em;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--p-button-primary-background);

      .reverse & {
        top: auto;
        bottom: calc(v-bind(connectionsMargin) * -1);
        padding-top: 0;
        padding-bottom: .5em;
      }
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
