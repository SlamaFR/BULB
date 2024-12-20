<script setup lang="ts">
import { computed, inject, watch } from 'vue'
import { StopContextKey } from '~/utils/symbols'
import { goesBelowLine } from '~/utils/text'

const {
  value,
  preventSubtitleOverlapping,
  subtitle = '',
  interestPoint = false,
  accessible = 'undefined',
  reverse,
} = defineProps<{
  value: string
  preventSubtitleOverlapping: boolean
  placeName: string | null
  subtitle: string | null
  accessible: boolean | 'undefined' | undefined
  interestPoint?: boolean
  reverse: boolean
}>()

const stopContext = inject<StopContext>(StopContextKey)!

const valueParts = computed(() => value.split('\n').filter(part => part.trim() !== ''))
const shift = computed(() => {
  if (valueParts.value.length === 0) return false
  return goesBelowLine(valueParts.value[valueParts.value.length - 1]) && preventSubtitleOverlapping
})

watch([shift, () => interestPoint, () => subtitle], ([_shift, _interestPoint, _subtitle]) => {
  let margin = 1
  if (_shift) margin += 0.25
  if (_interestPoint) margin += 0.5

  if (_subtitle) {
    stopContext.margins.rightMargin.subtitle = `${margin}em`
  } else {
    stopContext.margins.rightMargin.subtitle = `0em`
  }
}, { immediate: true })
</script>

<template>
  <div class="regular-label" :class="{ reverse, 'opacity-50 export-hide': valueParts.length === 0 }">
    <div class="flex gap-1em">
      <TiltedText v-for="(part, index) in valueParts" :key="`${part}-${index}`" :reverse="reverse">
        <div class="title-holder">
          <TitleLabel :value="part" />
          <Wheelchair
            v-if="index === valueParts.length - 1 && accessible !== 'undefined'"
            :off="!accessible"
          />
        </div>
      </TiltedText>
      <TiltedText v-if="valueParts.length === 0" :reverse="reverse">
        <TitleLabel :value="$t('ui.map_editor.toolbox.untitled_stop')" />
      </TiltedText>
    </div>
    <div
      v-if="subtitle"
      class="subtitle-holder"
      :class="{
        'interest-point': interestPoint,
        shift,
      }"
    >
      <TiltedText :reverse="reverse">
        <StopSubtitle :interest-point="interestPoint" :value="subtitle" />
      </TiltedText>
    </div>
  </div>
</template>

<style scoped lang="scss">
.regular-label {
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  min-width: 1em;
  height: 0;
}

.title-holder {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: .25em;

  .reverse & {
    flex-direction: row-reverse;
  }
}

.subtitle-holder {
  --initial: 0em;
  --interest-point: 0em;
  --shift: 0em;

  transform: translate(calc(var(--initial) + var(--interest-point) + var(--shift)), -.125em);
  width: 0;

  .reverse & {
    --initial: 0.5625em;

    transform: translate(calc(var(--initial) + var(--interest-point) + var(--shift)), .25em);
  }

  &.shift {
    --shift: .25em;
  }

  &.interest-point {
    --interest-point: .5em;

    .reverse & {
      --interest-point: 0em;
    }
  }
}
</style>
