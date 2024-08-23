<script setup lang="ts">
const emit = defineEmits<{
  delete: [id: string]
}>()
const index = defineModel<CustomLineIndexDescription>({ required: true })
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    pt:root:class="md:min-w-25em"
    pt:header:class="gap-6"
  >
    <template #header>
      <div class="flex flex-row gap-2 items-center">
        <span class="p-dialog-title">Éditeur d’indice de ligne</span>
        <Tag rounded severity="info" value="Bêta" />
      </div>
    </template>
    <div class="content">
      <div class="form">
        <div class="flex flex-col gap-1">
          <label>Mode</label>
          <ModeSelect v-model="index.mode" />
        </div>
        <div class="flex flex-col gap-1">
          <label>Forme</label>
          <ShapeSelect v-model="index.shape" />
        </div>
        <div class="flex flex-col gap-1 col-span-2">
          <label for="index_editor_index">Indice</label>
          <InputGroup>
            <InputText
              id="index_editor_prefix"
              v-model="index.prefix"
              :disabled="index.shape !== 'LINES'"
              placeholder="Préfixe"
            />
            <InputText
              id="index_editor_index"
              v-model="index.index"
              placeholder="Valeur"
            />
            <InputText
              id="index_editor_suffix"
              v-model="index.suffix"
              placeholder="Suffixe"
            />
          </InputGroup>
        </div>
        <div class="flex flex-col gap-1 col-span-2">
          <label>Couleur</label>
          <div class="grid cols-2 items-center gap-4">
            <ColorSelect v-model="index.color" />
            <BColorPicker v-model="index.color" />
          </div>
        </div>
      </div>
      <Panel header="Prévisualisation">
        <div class="text-10em bg-white p-3 rounded-lg">
          <CustomLineIndex
            :shape="index.shape"
            :index="index.index"
            :prefix="index.prefix"
            :suffix="index.suffix"
            :color="index.color"
            text-color="auto"
          />
        </div>
      </Panel>
    </div>
    <template #footer>
      <div class="flex flex-row gap-2 items-center justify-between flex-grow">
        <div class="flex flex-row gap-2 items-center">
          <Button text label="Supprimer" icon="i-tabler-trash" severity="danger" @click="emit('delete', index.id)" />
        </div>
      </div>
    </template>
  </Dialog>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: start;
}

@media (max-width: 640px) {
  .content {
    display: flex;
    flex-direction: column-reverse;
    gap: 2em;
    align-items: center;
  }
}

.form {
  display: grid;
  max-width: 25em;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
