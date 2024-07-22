<script setup lang="ts">
import BColorPicker from '~/components/ui/BColorPicker.vue'

const visible = defineModel<boolean>('visible')

const indexProps = reactive({
  shape: null,
  index: '',
  prefix: '',
  suffix: '',
  color: null,
})
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    pt:root:class="min-w-25em"
    pt:header:class="gap-6"
  >
    <template #header>
      <div class="flex flex-row gap-2 items-center">
        <span class="p-dialog-title">Éditeur d’indice de ligne</span>
        <Tag rounded severity="info" value="Nouveau" />
      </div>
    </template>
    <div class="content">
      <div class="form">
        <div class="flex flex-col gap-1 col-span-2">
          <label>Forme</label>
          <ShapeSelect v-model="indexProps.shape" />
        </div>
        <div class="flex flex-col gap-1 col-span-2">
          <label for="index_editor_index">Indice</label>
          <InputGroup>
            <InputText
              id="index_editor_prefix"
              v-model="indexProps.prefix"
              :disabled="indexProps.shape !== 'LINES'"
              placeholder="Préfixe"
            />
            <InputText
              id="index_editor_index"
              v-model="indexProps.index"
              placeholder="Valeur"
            />
            <InputText
              id="index_editor_suffix"
              v-model="indexProps.suffix"
              placeholder="Suffixe"
            />
          </InputGroup>
        </div>
        <div class="flex flex-col gap-1 col-span-2">
          <label>Couleur</label>
          <div class="grid cols-2 items-center gap-4">
            <ColorSelect v-model="indexProps.color" />
            <BColorPicker v-model="indexProps.color" />
          </div>
        </div>
      </div>
      <Panel header="Prévisualisation">
        <div class="text-10em bg-white p-3 rounded-lg">
          <CustomLineIndex
            :shape="indexProps.shape"
            :index="indexProps.index"
            :prefix="indexProps.prefix"
            :suffix="indexProps.suffix"
            :color="indexProps.color"
            text-color="auto"
          />
        </div>
      </Panel>
    </div>
  </Dialog>
</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: start;
}

.form {
  display: grid;
  max-width: 25em;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
