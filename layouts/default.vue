<template>
  <div class="bg-[var(--p-primary-contrast-color)] sticky top-0 z-10 flex flex-col">
    <Message severity="warn" pt:root:class="important-rounded-none">
      <span><b>RAPPEL</b> : </span>
      Application en phase de développement.
      Certaines fonctionnalités ne sont pas encore disponibles ou sont incomplètes.
    </Message>
    <Message severity="info" pt:root:class="important-rounded-none">
      <span><b>NOUVEAU</b> : </span>
      Il est maintenant possible d'ajouter des services de transports dans les correspondances
    </Message>
  </div>
  <div class="p-5">
    <slot />
  </div>

  <Toast position="bottom-right" />
</template>
