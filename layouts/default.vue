<script setup lang="ts">
</script>

<template>
  <div class="bg-[var(--p-primary-contrast-color)] sticky top-0 z-10 flex flex-col">
    <Message severity="warn" pt:root:class="important-rounded-none">
      <span v-html="$t('ui.nag')" />
    </Message>
  </div>
  <div class="flex flex-col p-5 min-h-full w-full">
    <slot />
  </div>
</template>
