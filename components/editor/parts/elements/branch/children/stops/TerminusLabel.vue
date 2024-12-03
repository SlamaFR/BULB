<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { computed, inject, onUnmounted, ref } from 'vue'
import { StopContextKey } from '~/utils/symbols'

const {
  value,
  placeName = '',
  subtitle = '',
  interestPoint = false,
  accessible = 'undefined',
} = defineProps<{
  value: string
  placeName: string | null
  subtitle: string | null
  interestPoint?: boolean
  accessible: boolean | 'undefined'
}>()

const stopContext = inject<StopContext>(StopContextKey)

const frame = ref<HTMLDivElement | null>(null)
const { stop } = useResizeObserver(frame, (e) => {
  const size = (e[0].target as HTMLDivElement)?.offsetHeight
  if (stopContext) {
    // some Pythagoras stuff does the trick
    // simplified because the angle is 30deg (ratio of 1:2)
    stopContext.margins.leftMargin.name = `calc(${size * 2}px - 1.5em)`
  }
})

const valueParts = computed(() => value.split('\n').filter(part => part.trim() !== ''))
const placeNameParts = computed(() => placeName?.split('\n').filter(part => part.trim() !== '') ?? [])
const untitled = computed(() => valueParts.value.length === 0)

onUnmounted(() => {
  stop()
  if (stopContext !== undefined) stopContext.margins.leftMargin.name = '0px'
})
</script>

<template>
  <div class="terminus-label">
    <div class="flex">
      <div class="wrapper translate-x-50%">
        <div class="name-container flex flex-row gap-2 items-center">
          <div ref="frame" class="frame" :class="{ 'opacity-50 export-hide': untitled }">
            <span v-for="part in placeNameParts" :key="part" class="place-name">
              {{ part }}
            </span>
            <span v-for="part in valueParts" :key="part">
              {{ part }}
            </span>
            <span v-if="untitled">{{ $t('ui.map_editor.toolbox.untitled_stop') }}</span>
          </div>
          <Wheelchair v-if="accessible !== 'undefined'" :off="!accessible" />
        </div>
      </div>
    </div>
    <div v-if="subtitle" class="translate-x-.125em">
      <SubtitleLabel :subtitle="subtitle" :interest-point="interestPoint" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.terminus-label {
  font-family: 'Parisine Std', sans-serif;
  font-weight: bold;
  color: var(--blue-ratp-paper);
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: .75em;
  transform: translateY(-.125em);

  width: 1em;
  height: 1px;
}

.wrapper {
  position: relative;
  height: 0;
  width: 1em;

  > * {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.name-container {
  rotate: -30deg;
  transform-origin: bottom left;
}

.frame {
  display: flex;
  flex-direction: column;
  padding: .25em 0;
  gap: .125em;
  background-color: var(--blue-ratp-paper);
  color: white;

  .place-name {
    padding: 0 .5em;
    font-size: .5em;
    font-style: italic;

    &:has(+:not(.place-name)) {
      padding-bottom: .5em;
      border-bottom: 1px solid white;
    }
  }

  span {
    padding: 0 .25em;
  }
}

span {
  line-height: 1em;
  transform: translateY(var(--font-shift-correction));
  text-wrap: nowrap;
}
</style>
