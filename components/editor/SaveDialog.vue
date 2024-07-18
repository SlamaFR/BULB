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
  <Dialog v-model:visible="visible" modal header="Sauvegarder le projet">
    <div class="flex flex-col gap-5">
      <div class="flex flex-row items-center gap-4">
        <span class="text-nowrap">Nom du projet</span>
        <InputGroup>
          <InputText v-model="name" />
          <InputGroupAddon>.json</InputGroupAddon>
        </InputGroup>
      </div>
      <div class="flex flex-row items-center justify-end flex-grow gap-4">
        <Button text severity="secondary" label="Annuler" @click="visible = false" />
        <Button label="Sauvegarder" @click="doExport()" />
      </div>
    </div>
  </Dialog>
</template>
