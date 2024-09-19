<script setup lang="ts">
const shape = defineModel<number | null>({ required: true })

interface SizeChoice {
  value: number
  label: string
}

const SIZES: SizeChoice[] = [
  { value: 15, label: 'Normal (15em)' },
  { value: 20, label: 'Grand (20em)' },
  { value: 30, label: 'Très grand (30em)' },
  { value: 50, label: 'Énorme (50em)' },
]
</script>

<template>
  <Select
    v-model="shape"
    :options="SIZES"
    option-label="label"
    option-value="value"
    placeholder="Selectionner une taille"
    class="flex-auto"
  />
</template>
