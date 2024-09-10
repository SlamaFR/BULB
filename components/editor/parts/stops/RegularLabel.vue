<script setup lang="ts">
const {
  value,
  subtitle = '',
  interestPoint = false,
} = defineProps<{
  value: string
  placeName: string | null
  subtitle: string | null
  interestPoint?: boolean
}>()

const valueParts = computed(() => value.split('\n'))
</script>

<template>
  <div class="regular-label">
    <div class="flex gap-1.0625em">
      <div v-for="part in valueParts" class="wrapper translate-x-50%">
        <span class="name">{{ part }}</span>
      </div>
    </div>
    <SubtitleLabel v-if="subtitle" :subtitle="subtitle" :interest-point="interestPoint" />
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
  //height: 0;
  width: fit-content;
  //transform: translateX(-50%);

  //background: red;
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

.place-name {
  font-size: .5em;
  font-weight: bold;
  font-style: italic;
}

.name {
  //outline: 1px solid cyan;
  //height: 1em;
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

    .wrapper:has(&) {
      //margin-left: .25em;
    }
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
