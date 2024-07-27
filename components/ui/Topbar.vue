<script setup lang="ts">
const { toggle, isDark } = useDark()
</script>

<template>
  <Menubar>
    <template #start>
      <div class="flex flex-row gap-2 items-start">
        <h1 class="text-3xl">
          <strong>Beautiful Urban Line Builder</strong>
        </h1>
        <small class="text-gray">v0.4.3-alpha</small>
      </div>
    </template>

    <template #end>
      <div class="flex flex-row gap-4 items-center">
        <span class="mr-2">Pas mal non ? C'est français 🇫🇷</span>
        <div class="flex flex-row gap-1 items-center">
          <Button text rounded :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'" @click="toggle()" />
          <Button text rounded icon="i-tabler-brand-x" as="a" href="https://x.com/SlamaFR" target="_blank" />
        </div>
      </div>
    </template>
  </Menubar>
</template>
