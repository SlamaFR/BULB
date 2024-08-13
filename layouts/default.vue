<script setup lang="ts">
</script>

<template>
  <div class="bg-[var(--p-primary-contrast-color)] sticky top-0 z-10 flex flex-col">
    <Message severity="warn" pt:root:class="important-rounded-none">
      <span><b>RAPPEL</b> : </span>
      Application en phase de développement.
      Certaines fonctionnalités ne sont pas encore disponibles ou sont incomplètes.
    </Message>
  </div>
  <div class="flex flex-col p-5 min-h-full w-full">
    <slot />
  </div>

  <Toast position="bottom-right" />
  <ConfirmDialog pt:root:class="max-w-40em m-4" />
</template>
