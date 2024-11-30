<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { inject, onUnmounted, ref, watch } from 'vue'
import { StopContextKey } from '~/utils/symbols'

const {
  value,
  placeName = '',
  subtitle = '',
  interestPoint = false,
  accessible = 'undefined',
  reverse,
} = defineProps<{
  value: string
  placeName: string | null
  subtitle: string | null
  interestPoint?: boolean
  reverse: boolean
  accessible: boolean | 'undefined' | undefined
}>()

const stopContext = inject<StopContext>(StopContextKey)!

const frame = ref<HTMLDivElement | null>(null)
const { stop } = useResizeObserver(frame, e => updateMargins(e[0].target as HTMLDivElement))
watch(stopContext.inverted, () => updateMargins(frame.value!))

watch([() => interestPoint], ([_interestPoint]) => {
  let margin = 1
  if (_interestPoint) margin += 0.5

  if (subtitle) {
    stopContext.margins.rightMargin.subtitle = `${margin}em`
  } else {
    stopContext.margins.rightMargin.subtitle = `0em`
  }
}, { immediate: true })

function updateMargins(element: HTMLElement) {
  const size = element.offsetHeight
  if (reverse) {
    stopContext.margins.rightMargin.name = `calc(${size * 2}px - 1.5em)`
    stopContext.margins.leftMargin.name = '0px'
  } else {
    stopContext.margins.leftMargin.name = `calc(${size * 2}px - 1.5em)`
    stopContext.margins.rightMargin.name = '0px'
  }
}

onUnmounted(() => {
  stop()
  stopContext.margins.rightMargin.name = '0px'
  stopContext.margins.leftMargin.name = '0px'
})
</script>

<template>
  <div class="terminus-label" :class="{ reverse }">
    <TiltedText :reverse="reverse">
      <div ref="frame" class="flex flex-col items-end gap-1" :class="{ 'opacity-50 export-hide': !value }">
        <div class="title-holder">
          <TerminusLabel :value="value || $t('ui.map_editor.toolbox.untitled_stop')" :place-name="placeName" />
          <Wheelchair v-if="accessible !== 'undefined'" :off="!accessible" />
        </div>
        <StopSubtitle v-if="subtitle && reverse" :interest-point="interestPoint" :value="subtitle" />
      </div>
    </TiltedText>
    <TiltedText
      v-if="subtitle && !reverse"
      class="subtitle-holder"
      :class="{
        'interest-point': interestPoint,
      }"
    >
      <StopSubtitle :interest-point="interestPoint" :value="subtitle" />
    </TiltedText>
  </div>
</template>

<style scoped lang="scss">
.terminus-label {
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: .75em;
  transform: translateY(-.125em);
  width: 1em;
  height: 0;

  .reverse & {
    transform: translateY(.125em);
  }
}

.title-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .125em;

  .reverse & {
    flex-direction: row-reverse;
  }
}

.subtitle-holder {
  --initial: -.75;
  --interest-point: 0;

  transform: translateX(calc((var(--initial) + var(--interest-point)) * 1em));
  width: 0;

  &.interest-point {
    --interest-point: .5;
  }
}
</style>
