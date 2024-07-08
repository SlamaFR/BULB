<script setup lang="ts">
const { locale: currentLocale } = useCustomI18n()
</script>

<template>
  <select v-model="currentLocale" class="px-2 py-1 rounded-lg">
    <option v-for="locale of availableLocales" :key="locale" :value="locale">
      {{ locale }}
    </option>
  </select>
</template>
