<script setup lang="ts">
import ThemeSwitcher from '~/components/ui/ThemeSwitcher.vue'

const version = useVersion()
</script>

<template>
  <Menubar>
    <template #start>
      <div class="flex flex-row gap-2 items-start">
        <h1 class="text-3xl">
          <strong class="hidden md:block">Beautiful Urban Line Builder</strong>
          <strong class="md:hidden visible">BULB</strong>
        </h1>
        <small class="text-gray"><span>v</span>{{ version }}</small>
      </div>
    </template>

    <template #end>
      <div class="flex flex-row gap-4 items-center">
        <span class="hidden lg:block">{{ $t('ui.topbar.catch_phrase') }}</span>
        <div class="flex flex-row gap-1 items-center">
          <Button text rounded label="FAQ" icon="i-tabler-help" @click="navigateTo('/faq')" />
          <ThemeSwitcher />
          <LocaleSwitcher />
          <Button text rounded icon="i-tabler-brand-x" as="a" href="https://x.com/SlamaFR" target="_blank" />
        </div>
      </div>
    </template>
  </Menubar>
</template>
