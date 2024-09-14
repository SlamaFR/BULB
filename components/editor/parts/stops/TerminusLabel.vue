<script setup lang="ts">
const {
  value,
  placeName = '',
  subtitle = '',
  interestPoint = false,
} = defineProps<{
  value: string
  placeName: string | null
  subtitle: string | null
  interestPoint?: boolean
}>()

const valueParts = computed(() => value.split('\n'))
const placeNameParts = computed(() => placeName?.split('\n'))
</script>

<template>
  <div class="terminus-label">
    <div class="flex">
      <div class="wrapper translate-x-50%">
        <div class="frame">
          <span v-for="part in placeNameParts" v-if="placeName" class="place-name">
            {{ part }}
          </span>
          <span v-for="part in valueParts">
            {{ part }}
          </span>
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

  width: fit-content;
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

.frame {
  display: flex;
  flex-direction: column;
  padding: .25em 0;
  gap: .125em;
  background-color: var(--blue-ratp-paper);
  color: white;
  rotate: -30deg;
  transform-origin: bottom left;

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
