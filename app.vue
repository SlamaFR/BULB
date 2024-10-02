<script setup lang="ts">
import useLocale from '~/composables/useLocale'
import useVersionTracking from '~/composables/useVersionTracking'

useVersionTracking()
useLocale()
</script>

<template>
  <NuxtLayout>
    <Snow />
    <NuxtPage />
  </NuxtLayout>

  <BToast />
  <ConfirmDialog pt:root:class="max-w-40em m-4" />
</template>

<style lang="scss">
:root {
  --blue-ratp: #0a0082;
  --blue-ratp-paper: #1F3C90;
  --blue-ratp-paper-secondary: rgba(31, 59, 143, 0.125);
  --yellow-ratp: #ffbe00;
  --place-brown: #80551A;
  --gray: #414241;
  --background-color: #eaeaea;

  --font-shift-correction: -.0625em;
}

html, body {
  font-size: 16px;
}

html, body, #__nuxt {
  height: 100%;
}
</style>
