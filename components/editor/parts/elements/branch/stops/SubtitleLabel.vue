<script setup lang="ts">
const {
  subtitle,
  shift = false,
  interestPoint = false,
} = defineProps<{
  subtitle: string
  shift?: boolean
  interestPoint?: boolean
}>()

const stopContext = inject<StopContext>(StopContextKey)
const el = ref<HTMLDivElement | null>(null)

function updateMargin(_shift: boolean, _interestPoint: boolean) {
  let margin = 1.125
  if (_shift) margin += 0.375
  if (_interestPoint) margin += 0.25

  if (stopContext) stopContext.margins.rightMargin.name = `${margin}em`
}

watch([() => shift, () => interestPoint], ([_shift, _interestPoint]) => updateMargin(_shift, _interestPoint))
onMounted(() => updateMargin(shift, interestPoint))
onUnmounted(() => {
  if (stopContext) stopContext.margins.rightMargin.name = '0px'
})
</script>

<template>
  <div ref="el" class="wrapper" :class="{ 'translate-x-.375em': shift }">
    <div class="subtitle" :class="{ 'interest-point': interestPoint }">
      <span>{{ subtitle }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  .debug & {
    outline: 1px solid deepskyblue;
  }

  position: relative;
  height: 0;
  width: .25em !important;

  > * {
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.subtitle {
  transform: translateX(.25em);
  rotate: -30deg;
  transform-origin: bottom left;
  color: var(--blue-ratp-paper);
  font-size: .5em;
  font-weight: bold;
  font-style: italic;

  &.interest-point {
    padding: 0 .375em .0625em .375em;
    background-color: var(--place-brown);
    color: white;
    font-weight: normal;
    font-size: .375em;
  }
}

span {
  line-height: 1em;
  transform: translateY(var(--font-shift-correction));
  text-wrap: nowrap;
  rotate: -30deg;
  transform-origin: bottom left;
  height: fit-content;
}
</style>
