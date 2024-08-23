<script setup lang="ts">
const { mode, index, color } = storeToRefs(useLine())

const showPresetSelector = ref(false)

function updateColor(newColor: string | null) {
  if (newColor !== null) color.value = newColor
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col items-stretch gap-x-5 gap-y-2">
      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">Mode de transport</span>
        <ModeSelect v-model="mode" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <label class="text-nowrap">Indice de ligne</label>
        <IndexSelect v-model="index" :mode="mode" @update-color="updateColor" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">Couleur du plan</span>
        <ColorSelect v-model="color" />
      </div>
    </div>

    <div class="mt-4 flex flex-row justify-end">
      <Button text severity="secondary" label="Utiliser un préréglage" icon="i-tabler-adjustments" @click="showPresetSelector = true" />
    </div>
  </div>

  <PresetSelector v-model:visible="showPresetSelector" />
</template>
