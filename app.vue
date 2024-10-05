<script setup lang="ts">
useVersionTracking()
useLocale()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Toast position="bottom-right" />
  <ConfirmDialog pt:root:class="max-w-40em m-4" />
</template>

<style lang="scss">
:root {
  --blue-ratp: #0a0082;
  --blue-ratp-paper: #1F3C90;
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
