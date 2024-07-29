<script setup lang="ts">
import { fr } from '~/assets/locales/fr.json'

const { config } = usePrimeVue()
useVersionTracking()
config.locale = fr
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
:root {
  --blue-ratp: #0a0082;
  --blue-ratp-paper: #233B8B;
  --yellow-ratp: #ffbe00;
  --place-brown: #80551A;
  --gray: #414241;
  --background-color: #eaeaea;

  --font-shift-correction: -.0625em;
}

html, body {
  font-size: 16px;
}
</style>
