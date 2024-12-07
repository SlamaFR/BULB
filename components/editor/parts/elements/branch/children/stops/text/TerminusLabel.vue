<script setup lang="ts">
import { computed } from 'vue'

const {
  value,
  placeName = null,
} = defineProps<{
  value: string
  placeName?: string | null
}>()

const valueParts = computed(() => value.split('\n').filter(part => part.trim() !== ''))
const placeNameParts = computed(() => placeName?.split('\n').filter(part => part.trim() !== '') ?? [])
</script>

<template>
  <div class="frame">
    <div v-if="placeNameParts.length > 0" class="place-name-container">
      <Typography v-for="(part, index) in placeNameParts" :key="`${part}-${index}`" class="place-name">
        {{ part }}
      </Typography>
    </div>
    <div class="name-container">
      <Typography v-for="(part, index) in valueParts" :key="`${part}-${index}`">
        {{ part }}
      </Typography>
    </div>
  </div>
</template>

<style scoped lang="scss">
.frame {
  display: flex;
  flex-direction: column;
  background-color: var(--blue-ratp-paper);
  color: white;
  font-family: 'Parisine Std', sans-serif;
  font-weight: bold;
  width: fit-content;

  .place-name {
    font-size: .5em;
    font-style: italic;
  }

  .debug & {
    outline: 1px solid magenta;
  }
}

.place-name-container {
  display: flex;
  flex-direction: column;
  gap: .1875em;
  padding: .25em .375em;
  border-bottom: 1px solid white;

  & span {
    transform: translateY(.0625em);
  }
}

.name-container {
  display: flex;
  flex-direction: column;
  gap: .3125em;
  padding: .375em;
}

span {
  line-height: .9375em;
  margin-top: -.1875em;
  margin-right: .0625em;
  text-wrap: nowrap;
  height: fit-content;
}
</style>
