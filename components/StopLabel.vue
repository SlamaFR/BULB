<script setup lang="ts">
const {
  stopName,
  terminus = false,
} = defineProps<{
  stopName: string
  terminus?: boolean
}>()
</script>

<template>
  <div class="stop-label">
    <div class="label" :class="{ terminus }">
      {{ stopName }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.stop-label {
  width: max-content;
  font-weight: 600;
  rotate: -30deg;
  transform-origin: bottom left;
}

.label {
  white-space: pre-line;
  line-height: 1.125;

  &.terminus {
    padding: .125em .25em;
    background-color: var(--blue-ratp-paper);
    color: white;
  }
}
</style>
