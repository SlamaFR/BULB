<script setup lang="ts">
</script>

<template>
  <Message severity="warn" pt:root:class="sticky top-0 z-10 important-rounded-none backdrop-blur-[var(--p-message-blur)]">
    <span v-html="$t('ui.nag')" />
  </Message>
  <div class="flex flex-col p-5 min-h-full w-full">
    <slot />
  </div>
</template>

<style lang="scss">
:root {
  --p-message-warn-background: color-mix(in srgb, var(--p-yellow-50), transparent 25%);
  --p-message-warn-border-color: var(--p-yellow-200);
  --p-message-warn-color: var(--p-yellow-600);
  --p-message-error-background: color-mix(in srgb, var(--p-red-50), transparent 25%);
  --p-message-error-border-color: var(--p-red-200);
  --p-message-error-color: var(--p-red-600);
  --p-message-info-background: color-mix(in srgb, var(--p-blue-50), transparent 25%);
  --p-message-info-border-color: var(--p-blue-200);
  --p-message-info-color: var(--p-blue-600);
  --p-message-success-background: color-mix(in srgb, var(--p-green-50), transparent 25%);
  --p-message-success-border-color: var(--p-green-200);
  --p-message-success-color: var(--p-green-600);
  --p-message-blur: 10px;
}

.dark-mode:root {
  --p-message-warn-background: color-mix(in srgb, var(--p-yellow-900), transparent 25%);
  --p-message-warn-border-color: var(--p-yellow-900);
  --p-message-warn-color: var(--p-yellow-100);
  --p-message-error-background: color-mix(in srgb, var(--p-red-900), transparent 25%);
  --p-message-error-border-color: var(--p-red-900);
  --p-message-error-color: var(--p-red-100);
  --p-message-info-background: color-mix(in srgb, var(--p-blue-900), transparent 25%);
  --p-message-info-border-color: var(--p-blue-900);
  --p-message-info-color: var(--p-blue-100);
  --p-message-success-background: color-mix(in srgb, var(--p-green-900), transparent 25%);
  --p-message-success-border-color: var(--p-green-900);
  --p-message-success-color: var(--p-green-100);
}
</style>
