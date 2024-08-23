<script setup lang="ts">
const visible = defineModel<boolean>('visible')
const { getModeIndices, createNewIndex, deleteById } = useCustomLineIndices()

const showEditor = ref(false)
const selectedIndex = ref<CustomLineIndexDescription | null>(null)

function create(mode: Mode) {
  selectedIndex.value = createNewIndex(mode)
  showEditor.value = true
}

function edit(index: CustomLineIndexDescription) {
  selectedIndex.value = index
  showEditor.value = true
}

function deleteIndex(id: string) {
  if (selectedIndex.value) {
    deleteById(id)
    showEditor.value = false
  }
}
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Répertoire d’indices personnalisés">
    <Fieldset v-for="mode in MODES" :key="mode.label" :legend="mode.label">
      <template #legend>
        <div class="flex items-center gap-2">
          <Mode class="text-xl" :mode="mode.value" />
          <span>{{ mode.label }}</span>
        </div>
      </template>
      <div class="btn-group">
        <Button
          v-for="index in getModeIndices(mode.value)"
          :key="index.id"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-1em' } }"
          @click="edit(index)"
        >
          <CustomLineIndex
            :shape="index.shape"
            :prefix="index.prefix"
            :index="index.index"
            :suffix="index.suffix"
            :color="index.color"
          />
        </Button>
        <Button
          text
          severity="secondary"
          icon="i-tabler-plus"
          :pt="{ root: { class: 'important-p-1 important-text-2xl important-w-3.625rem important-h-3.625rem' } }"
          @click="create(mode.value)"
        />
      </div>
    </Fieldset>
  </Dialog>

  <LineIndexEditorDialog
    v-if="selectedIndex"
    v-model="selectedIndex"
    v-model:visible="showEditor"
    @delete="deleteIndex"
  />
</template>

<style scoped>
.btn-group {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: .125em;
  font-size: 3em;
}

@media (max-width: 640px) {
  .btn-group {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1024px) and (min-width: 641px) {
  .btn-group {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
