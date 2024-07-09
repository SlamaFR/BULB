<script setup lang="ts">
const {
  placeName,
} = defineProps<{
  placeName: string
}>()
</script>

<template>
  <div class="place-label">
    <div class="label">
      <div>{{ placeName }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.place-label {
  width: max-content;
  rotate: -30deg;
  transform-origin: bottom left;
}

.label {
  white-space: pre-line;
  line-height: 1;
  padding: .1875em .25em;
  background-color: var(--place-brown);
  color: white;
  height: fit-content;
  font-size: .45em;
  font-weight: 100;
  font-style: italic;

  & > div {
    transform: translateY(-.0625em);
  }
}
</style>
