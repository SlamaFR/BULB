<script setup lang="ts">
import { computed } from 'vue'
import { goesBelowLine } from '~/utils/text'

const {
  value,
  preventSubtitleOverlapping,
  subtitle = '',
  interestPoint = false,
} = defineProps<{
  value: string
  preventSubtitleOverlapping: boolean
  placeName: string | null
  subtitle: string | null
  interestPoint?: boolean
}>()

const valueParts = computed(() => value.split('\n').filter(part => part.trim() !== ''))
const containsDescenders = computed(() => {
  if (valueParts.value.length === 0) return false
  return goesBelowLine(valueParts.value[valueParts.value.length - 1])
})
const untitled = computed(() => valueParts.value.length === 0)
</script>

<template>
  <div class="regular-label">
    <div class="flex gap-1.0625em" :class="{ 'opacity-50': untitled }">
      <div v-for="(part, index) in valueParts" :key="`${part}-${index}`" class="wrapper translate-x-50%">
        <span class="name">{{ part }}</span>
      </div>
      <div v-if="untitled" class="wrapper translate-x-50%">
        <span class="name">{{ $t('ui.map_editor.toolbox.untitled_stop') }}</span>
      </div>
    </div>
    <div class="w-0 translate-x-.75em">
      <SubtitleLabel v-if="subtitle" :subtitle="subtitle" :interest-point="interestPoint" :shift="containsDescenders && preventSubtitleOverlapping" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.regular-label {
  font-family: 'Parisine Std', sans-serif;
  font-weight: bold;
  color: var(--blue-ratp-paper);
  display: flex;
  flex-direction: row;
  align-items: end;

  width: fit-content;
  height: 1px;
}

.wrapper {
  position: relative;
  height: 0;
  width: 0;

  > * {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  &:has(> .name) {
    display: block;
    height: 1em;
    width: 1em;
  }
}

/*
.place-name {
  font-size: .5em;
  font-weight: bold;
  font-style: italic;
}
 */

span {
  line-height: 1em;
  transform: translateY(var(--font-shift-correction));
  text-wrap: nowrap;
  rotate: -30deg;
  transform-origin: bottom left;
  height: fit-content;
}
</style>
