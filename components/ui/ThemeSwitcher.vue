<script setup lang="ts">
import useDark from '~/composables/useDark'

const { toggle, isDark } = useDark()
</script>

<template>
  <Button text rounded :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'" @click="toggle()" />
</template>
