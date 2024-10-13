<template>
  <Message severity="warn" pt:root:class="sticky top-0 z-10 important-rounded-none backdrop-blur-[var(--p-message-blur)]">
    <span v-html="$t('ui.nag')" />
  </Message>
  <div class="flex flex-col p-5 min-h-full w-full">
    <slot />
  </div>
</template>
