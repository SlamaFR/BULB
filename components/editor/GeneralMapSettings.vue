<script setup lang="ts">
const { mode, index, color, stopSpacing } = storeToRefs(useLine())

const showPresetSelector = ref(false)
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
        <IndexSelect v-model="index" :mode="mode" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">Couleur du plan</span>
        <ColorSelect v-model="color" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span>Espacement minimum des arrêts</span>
        <InputNumber
          v-model="stopSpacing"
          class="flex-auto"
          :min="1"
          :allow-empty="false"
          suffix=" unité(s)"
          show-buttons
          button-layout="horizontal"
        >
          <template #incrementbuttonicon>
            <span class="i-tabler-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="i-tabler-minus" />
          </template>
        </InputNumber>
      </div>
    </div>

    <div class="mt-4 flex flex-row justify-end">
      <Button text severity="secondary" label="Utiliser un préréglage" icon="i-tabler-adjustments" @click="showPresetSelector = true" />
    </div>
  </div>

  <PresetSelector v-model:visible="showPresetSelector" />
</template>
