<script setup lang="ts">
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'

const visible = defineModel<boolean>('visible')
const { getModeIndices, createNewIndex } = useCustomLineIndices()

const showEditor = ref(false)
const selectedIndex = ref<CustomLineIndex | null>(null)

function create(mode: Mode) {
  selectedIndex.value = createNewIndex(mode)
  showEditor.value = true
}

function edit(index: CustomLineIndex) {
  selectedIndex.value = index
  showEditor.value = true
}
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
          v-for="index in getModeIndices(mode.value)"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
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

  <LineIndexEditorDialog v-model="selectedIndex" v-model:visible="showEditor" />
</template>

<style scoped>
.btn-group {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: .125em;
  font-size: 3em;
}
</style>
