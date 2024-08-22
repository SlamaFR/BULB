<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const fork = defineModel<Fork>({ required: true })

const orientations = [
  { label: 'Gauche', value: 'LEFT' },
  { label: 'Droite', value: 'RIGHT' },
]
const shapes = [
  { label: 'Vers le haut', value: [1, 0] },
  { label: 'Symétrique', value: [1, -1] },
  { label: 'Vers le bas', value: [0, -1] },
]
</script>

<template>
  <Dialog v-model:visible="visible" header="Propriétés de fourche">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label>Orientation</label>
        <SelectButton
          v-model="fork.$fork.toward"
          :options="orientations"
          option-label="label"
          option-value="value"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>Forme</label>
        <SelectButton
          v-model="fork.$fork.linksOffset"
          :options="shapes"
          option-label="label"
          option-value="value"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>Multiplicateur de taille</label>
        <InputNumber v-model="fork.$fork.offsetMultiplier" />
      </div>
    </div>

    <pre v-if="false">
      {{ fork }}
    </pre>
  </Dialog>
</template>
