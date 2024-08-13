<script setup lang="ts">
</script>

<template>
  <div class="wrapper">
    <div class="text-2xl font-bold">
      Aucune section
    </div>
    <div class="text-lg text-[var(--p-gray-500)]">
      Créer une première section de ligne pour commencer
    </div>
    <div class="flex flex-row gap-2 mt-5">
      <Button text severity="secondary">
        <div class="flex flex-col items-center">
          <i class="text-3xl i-bulb-branch" />
          <span>Branche</span>
        </div>
      </Button>
      <Button text severity="secondary">
        <div class="flex flex-col items-center">
          <i class="text-3xl i-bulb-fork" />
          <span>Fourche</span>
        </div>
      </Button>
      <Button text severity="secondary">
        <div class="flex flex-col items-center">
          <i class="text-3xl i-bulb-loop" />
          <span>Boucle</span>
        </div>
      </Button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  border: 1px solid var(--p-panel-border-color);
  border-radius: .5rem;
  background: var(--p-panel-background);
}
</style>
