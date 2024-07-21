<script setup lang="ts">
import BColorPicker from '~/components/ui/BColorPicker.vue'

const visible = defineModel<boolean>('visible')

const indexProps = reactive({
  shape: 'LINES',
  index: '1',
  prefix: 'T',
  suffix: 'a',
  color: '#000000',
})
</script>

<template>
  <Dialog
    v-model:visible="visible"
    header="Éditeur d’indice de ligne"
    modal
    pt:root:class="min-w-25em"
    pt:header:class="gap-6"
  >
    <div class="content">
      <div class="form">
        <div class="flex flex-col gap-1">
          <label>Forme</label>
          <ShapeSelect v-model="indexProps.shape" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="index_editor_index">Indice</label>
          <InputText
            id="index_editor_index"
            v-model="indexProps.index"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="index_editor_prefix">Préfixe</label>
          <InputText
            id="index_editor_prefix"
            v-model="indexProps.prefix"
            :disabled="indexProps.shape !== 'LINES'"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="index_editor_suffix">Suffixe</label>
          <InputText
            id="index_editor_suffix"
            v-model="indexProps.suffix"
          />
        </div>
        <div class="flex flex-col gap-1 col-span-2">
          <label for="index_editor_suffix">Couleur</label>
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
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
