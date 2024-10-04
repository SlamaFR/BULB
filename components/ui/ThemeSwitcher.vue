<script setup lang="ts">
const { toggle, isDark } = useDark()
</script>

<template>
  <Button text rounded :icon="isDark ? 'i-tabler-moon' : 'i-tabler-sun'" @click="toggle()" />
</template>
