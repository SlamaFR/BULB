<script setup lang="ts">
import { computed } from 'vue'

const { value } = defineProps<{
  value: string
}>()

const valueParts = computed(() => value.split('\n').filter(part => part.trim() !== ''))
</script>

<template>
  <div class="subtitle">
    <Typography v-for="(part, index) in valueParts" :key="`${part}-${index}`" class="name">
      {{ part }}
    </Typography>
  </div>
</template>

<style scoped lang="scss">
.subtitle {
  padding: .125em .125em;
  display: flex;
  flex-direction: column;
  gap: .0625em;
  background-color: var(--place-brown);
  color: white;
  font-weight: bold;
  font-style: italic;
  width: fit-content;

  .debug & {
    outline: 1px solid blue;
  }
}

.name {
  font-size: .5em;
}

span {
  line-height: .9375em;
  margin-top: calc(-2em / 12);
  margin-right: calc(1em / 12);
  text-wrap: nowrap;
  height: fit-content;
}
</style>
