<template>
  <Message severity="warn" pt:root:class="sticky top-0 z-1000 important-rounded-none backdrop-blur-[var(--p-message-blur)]">
    <span v-html="$t('ui.nag')" />
  </Message>
  <div class="flex flex-col p-5 gap-5">
    <Topbar />
    <slot />
  </div>
</template>
