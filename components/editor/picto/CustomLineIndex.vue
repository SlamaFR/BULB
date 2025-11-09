<script setup lang="ts">
import { computed } from 'vue'
import { textContrast } from '~/utils/colors'

const {
  index,
  prefix = '',
  suffix = '',
  shape,
  color,
} = defineProps<{
  index: string
  prefix?: string
  suffix?: string
  shape: IndexShape
  color: string
}>()

const NARROW_CHARS = []

const textColor = computed(() => textContrast(color) ? 'var(--light-text)' : 'var(--dark-text)')
</script>

<template>
  <div
    class="wrapper overflow-hidden"
    :class="{
      'circle': shape === 'CIRCLE',
      'rounded-square': shape === 'ROUNDED_SQUARE',
      'lines': shape === 'LINES',
      'rectangle': shape === 'RECTANGLE',
      'cut-rectangle': shape === 'CUT_RECTANGLE',
    }"
  >
    <Shape :shape="shape" :color="color" />
    <span class="index">
      <span v-if="prefix && shape === 'LINES'" class="prefix">{{ prefix }}</span>
      <span v-for="(c, i) in index" :key="i" :class="{ narrow: NARROW_CHARS.includes(c) }">{{ c }}</span>
      <span v-if="suffix" class="suffix">{{ suffix }}</span>
    </span>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: relative;
  display: block;
  min-width: 1em;
  width: 1em;
  min-height: 1em;
  height: 1em;

  --light-text: white;
  --dark-text: #231f20;

  &.lines::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    border-radius: .0625em;
  }
}

.index {
  display: flex;
  flex-direction: row;
  align-items: start;
  font-family: "Parisine Ptf", sans-serif;
  font-weight: 600;
  font-size: 0.75em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: v-bind(textColor);

  & span {
    text-box: trim-both cap alphabetic;
  }

  .narrow {
    letter-spacing: -.1em;
  }

  :first-child.narrow {
    margin-left: -.0625em;
  }

  :first-child.narrow:has(+ .narrow) {
    margin-left: -.125em;
  }

  .prefix {
    margin-right: .125em;
  }

  .suffix {
    font-size: 0.75em;
    margin-top: calc(.125em + .0625em);
  }
}

.circle {
  .index .suffix {
    font-size: 0.375em;
    margin-top: calc(1.5em - .125em);
    margin-right: -.25em;
  }
}

.lines {
  .index {
    font-size: 0.5375em;
    color: #231f20;
  }
}

.cut-rectangle,
.rectangle {
  &.wrapper {
    min-width: 2em;
    width: 2em;
    min-height: .9em;
    height: .9em;

    --dark-text: #24303B;
  }

  & .index {
    font-size: 0.5em;
    font-weight: 600;
    line-height: 1;
  }
}

.cut-rectangle .index {
  color: var(--light-text);
}
</style>
