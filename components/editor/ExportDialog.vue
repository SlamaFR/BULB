<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })

const save = useSaveProject()
const { line } = storeToRefs(useLine())
const name = ref(`${line.value.mode}_${line.value.index}`.toLowerCase())

watch(visible, (val) => {
  if (val) {
    name.value = `${line.value.mode}_${line.value.index}`.toLowerCase()
  }
})

function doExport() {
  save(name.value)
  visible.value = false
}
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Exporter le projet">
    <div class="flex flex-col gap-4">
      <div class="flex flex-row items-center gap-4">
        <span class="text-nowrap">Nom du projet</span>
        <InputText v-model="name" />
      </div>
      <div class="flex flex-row items-center justify-end flex-grow gap-4">
        <Button text label="Annuler" @click="visible = false" />
        <Button label="Exporter" @click="doExport()" />
      </div>
    </div>
  </Dialog>
</template>
