<script setup lang="ts">
const {
  index,
  prefix = 'T',
  suffix,
  shape,
  color,
  textColor = '#231f20',
} = defineProps<{
  index: string
  prefix?: string
  suffix?: string
  shape: 'CIRCLE' | 'SQUARE' | 'LINES'
  color: string
  textColor?: string
}>()
</script>

<template>
  <div
    class="relative"
    :class="{
      circle: shape === 'CIRCLE',
      square: shape === 'SQUARE',
      lines: shape === 'LINES',
    }"
  >
    <div class="container" />
    <span class="index">
      <span v-if="shape === 'LINES'" class="mr-.5" :class="{ narrow: ['V'].includes(prefix) }">{{ prefix }}</span>
      <span v-for="c in index" :class="{ narrow: c === '1' && (index.length > 1 || shape === 'LINES') }">{{ c }}</span>
      <span v-if="suffix" class="suffix">{{ suffix }}</span>
    </span>
  </div>
</template>

<style scoped>
.container {
  min-width: 1em;
  max-width: 1em;
  min-height: 1em;
  max-height: 1em;
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
  transform: translate(-50%, -50%);
  margin-top: -.0625em;
  color: v-bind(textColor);

  .narrow {
    letter-spacing: -.1em;
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
    font-size: 0.55em;
    color: #231f20;
  }
}
</style>
