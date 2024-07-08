<script lang="ts" setup>
const { isDark, toggle } = useDark()
const { t } = useCustomI18n()
</script>

<template>
  <header class="p-5 w-full flex-center flex-row justify-between absolute">
    <p class="text-8 font-text">
      <ClientOnly>
        {{ isDark ? t('theme.dark') : t('theme.light') }}
        <template #fallback>
          ...
        </template>
      </ClientOnly>
    </p>
    <div class="flex flex-row gap-2">
      <LocaleSwitch />
      <button class="icon-btn text-5" @click="toggle()">
        <div i="tabler-sun dark:tabler-moon" />
      </button>
    </div>
  </header>
</template>
