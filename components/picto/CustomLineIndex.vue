<script setup lang="ts">
const {
  index,
  prefix = 'T',
  suffix = '',
  shape,
  color,
} = defineProps<{
  index: string
  prefix?: string
  suffix?: string
  shape: 'CIRCLE' | 'SQUARE' | 'LINES'
  color: string
}>()

const textColor = computed(() => textContrast(color) ? 'white' : '#231f20')
</script>

<template>
  <div
    class="wrapper"
    :class="{
      'circle': shape === 'CIRCLE',
      'square': shape === 'SQUARE',
      'lines': shape === 'LINES',
      'bg-white rounded': shape === 'LINES',
    }"
  >
    <Shape :shape="shape" :color="color" />
    <span class="index">
      <span v-if="shape === 'LINES'" class="prefix">{{ prefix }}</span>
      <span v-for="c in index" :class="{ narrow: c === '1' && (index.length > 1 || shape === 'LINES') }">{{ c }}</span>
      <span v-if="suffix" class="suffix">{{ suffix }}</span>
    </span>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  display: block;
  min-width: 1em;
  width: 1em;
  min-height: 1em;
  height: 1em;
}

.container {
  width: 100%;
  height: 100%;
  background-color: v-bind(color);
}

.index {
  display: flex;
  flex-direction: row;
  align-items: start;
  font-family: "Parisine Std", sans-serif;
  font-weight: 600;
  font-size: 0.75em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(-50% - 0.0625em));
  color: v-bind(textColor);

  .circle &:has(.narrow),
  .square &:has(.narrow) {
    transform: translate(calc(-50% - 0.0625em), calc(-50% - 0.0625em));
  }

  .narrow {
    letter-spacing: -.1em;
  }
  .narrow:first-child:has(+ :not(.narrow)) {
    margin-left: 0.0625em;
  }
  :not(.narrow) + .narrow:last-child {
    margin-right: -0.125em;
  }

  .prefix {
    margin-right: .0625em;
  }

  .suffix {
    font-size: 0.75em;
    margin-top: calc(.125em + .0625em);
  }
}

.circle {
  .container {
    mask: url(assets/svg/masks/circle.svg) no-repeat;
  }

  .index .suffix {
    font-size: 0.375em;
    margin-top: calc(1.375em - .0625em);
    margin-right: -.25em;
  }
}

.square {
  .container {
    mask: url(assets/svg/masks/square.svg) no-repeat;
  }
}

.lines {
  .container {
    mask: url(assets/svg/masks/lines.svg) no-repeat;
  }

  .index {
    font-size: 0.5625em;
    color: #231f20;
  }
}
</style>
