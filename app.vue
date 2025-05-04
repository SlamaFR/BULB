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
  min-height: 100vh;
}

kbd {
  background-color: var(--p-gray-100);
  border-radius: 0.25em;
  padding: 0.1em 0.25em;
  box-shadow: 0 0 0 1px var(--p-gray-300);
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 0.9em;
  line-height: 1;
  color: var(--p-gray-700);
  margin: 0 0.125em;
  border: 1px solid var(--p-gray-300);

  .dark-mode & {
    background-color: var(--p-gray-800);
    box-shadow: 0 0 0 1px var(--p-gray-600);
    color: var(--p-gray-100);
    border: 1px solid var(--p-gray-600);
  }
}
</style>
