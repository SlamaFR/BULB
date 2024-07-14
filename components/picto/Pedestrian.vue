<script setup lang="ts">
import pedestrian from 'assets/svg/pedestrian.svg'

const pedestrianUrl = computed(() => `url(${pedestrian})`)
</script>

<template>
  <div class="pedestrian" />
</template>

<style scoped>
.pedestrian {
  margin-top: .125em;
  width: 1em;
  height: .875em;
  mask: v-bind(pedestrianUrl);
  mask-repeat: no-repeat;
  mask-position: right;
  background-color: var(--blue-ratp-paper);
}
</style>
