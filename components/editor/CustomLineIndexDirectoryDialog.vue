<script setup lang="ts">
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Répertoire d’indices personnalisés">
    <Fieldset v-for="mode in MODES" :legend="mode.label">
      <template #legend>
        <div class="flex items-center gap-2">
          <Mode class="text-xl" :mode="mode.value" />
          <span>{{ mode.label }}</span>
        </div>
      </template>
      <div class="btn-group">
        <Button
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
        >
          <CustomLineIndex
            shape="CIRCLE"
            index="19"
            color="#2CA90FFF"
          />
        </Button>
        <Button
          text
          severity="secondary"
          icon="i-tabler-plus"
          :pt="{ root: { class: 'important-p-1 important-text-2xl important-w-3.625rem important-h-3.625rem' } }"
        />
      </div>
    </Fieldset>
  </Dialog>
</template>

<style scoped>
.btn-group {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: .125em;
  font-size: 3em;
}
</style>
