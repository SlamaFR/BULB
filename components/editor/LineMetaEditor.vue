<script setup lang="ts">
// Couleurs charte graphique IDFM
const colors = [
  { name: 'Rouge coquelicot', value: '#ed1c2a', textColor: 'white' },
  { name: 'Orange', value: '#f78f4b', textColor: 'black' },
  { name: 'Jaune Vif', value: '#ffcd02', textColor: 'black' },
  { name: 'Jaune Ocre', value: '#e0b03b', textColor: 'black' },
  { name: 'Maron', value: '#8d6539', textColor: 'white' },
  { name: 'Olive Clair', value: '#cec92a', textColor: 'black' },
  { name: 'Olive Foncé', value: '#9b993b', textColor: 'white' },
  { name: 'Vert Foncé', value: '#008c5a', textColor: 'white' },
  { name: 'Vert Clair', value: '#77c696', textColor: 'black' },
  { name: 'Turquoise', value: '#00b397', textColor: 'white' },
  { name: 'Bleu Clair', value: '#87d3df', textColor: 'black' },
  { name: 'Bleu Outremer', value: '#4c90cd', textColor: 'white' },
  { name: 'Bleu Foncé', value: '#006db8', textColor: 'black' },
  { name: 'Violet', value: '#662c91', textColor: 'white' },
  { name: 'Magenta', value: '#bb4a9b', textColor: 'white' },
  { name: 'Lilas', value: '#c5a3cd', textColor: 'black' },
  { name: 'Rose', value: '#f59fb3', textColor: 'black' },
  { name: 'Rouge Framboise', value: '#b80b4b', textColor: 'white' },
]

const { mode, index, color } = storeToRefs(useLine())

const selectedColor = ref(colors.find(c => c.value === color.value) ?? colors[0])
watch(selectedColor, val => color.value = val.value)
</script>

<template>
  <div class="flex flex-col gap-4 mb-8">
    <div class="flex items-center gap-4">
      <span class="w-24">Mode</span>
      <Select
        v-model="mode"
        :options="modes"
        option-label="name"
        option-value="value"
        placeholder="Selectionner un mode"
        class="flex-auto"
      />
    </div>
    <div class="flex items-center gap-4">
      <label for="line_index" class="w-24">Indice</label>
      <InputText
        id="line_index"
        v-model="index"
        class="flex-auto"
        autocomplete="off"
      />
    </div>
    <div class="flex items-center gap-4">
      <span class="w-24">Couleur</span>
      <Select
        v-model="selectedColor"
        :options="colors"
        option-label="name"
        placeholder="Selectionner une couleur"
        class="flex-auto"
      >
        <template #value="slotProps">
          <div
            :style="{
              backgroundColor: slotProps.value.value,
              color: slotProps.value.textColor,
              width: 'fit-content',
            }" class="rounded-lg px-2 py-.5"
          >
            {{ slotProps.value.name }}
          </div>
        </template>
        <template #option="slotProps">
          <div
            :style="{
              backgroundColor: slotProps.option.value,
              color: slotProps.option.textColor,
            }" class="rounded-lg px-2 py-.5"
          >
            {{ slotProps.option.name }}
          </div>
        </template>
      </Select>
    </div>
  </div>
</template>
