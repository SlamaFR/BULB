<script setup lang="ts">
// switch to preferred locale on load
const router = useRouter()
const switchLocalePath = useSwitchLocalePath()
const locale = useLocale()

tryOnBeforeMount(() => {
  router.replace(switchLocalePath(locale.value))
})
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

  --metro-3: #82C8E6;

  --font-shift-correction: -.0625em;
}

html, body {
  font-size: 16px;
}
</style>
