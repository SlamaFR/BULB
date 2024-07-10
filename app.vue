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

<style>
:root {
  --blue-ratp: #0a0082;
  --blue-ratp-paper: #233B8B;
  --yellow-ratp: #ffbe00;
  --place-brown: #80551A;

  --background-color: #eaeaea;

  --metro-3: #82C8E6;
}

body {
  font-size: 24px;
  font-family: 'Parisine Std', sans-serif;
  color: var(--blue-ratp-paper);
  background-color: white;
}
</style>
