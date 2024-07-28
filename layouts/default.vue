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
  <div class="bg-[var(--p-primary-contrast-color)] static top-0 z-10 flex flex-col">
    <Message severity="info" pt:root:class="important-rounded-none">
      <span><b>INFORMATION</b> : </span>
      <ul class="list-disc pl-6">
        <li>Le format de stockage des projets a évolué, rendant les projets existants obsolètes. Certaines personnalisations pourraient être perdues.</li>
        <li>Le site devient petit à petit responsive, profitez de cet outil directement sur votre smartphone ! (Pas encore totalement terminé, j'ai déjà remarqué les petits problèmes d'affichage)</li>
        <li>La sauvegarde des projets est de nouveau fonctionnelle</li>
        <li>Les indices personnalisés présentent des problèmes d'alignement au moment de l'exportation. Je suis déjà sur le coup.</li>
      </ul>
    </Message>
  </div>
  <div class="p-5">
    <slot />
  </div>

  <Toast position="bottom-right" />
</template>
