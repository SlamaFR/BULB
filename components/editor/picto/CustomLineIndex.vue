<script setup lang="ts">
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
  shape: 'CIRCLE' | 'SQUARE' | 'LINES'
  color: string
}>()

const NARROW_CHARS = ['1', 'I', 'l']

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
    <span class="index overflow-hidden">
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
  padding-bottom: .125em;
  color: v-bind(textColor);

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
</style>
