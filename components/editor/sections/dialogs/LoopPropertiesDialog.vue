<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const loop = defineModel<Loop>({ required: true })

const orientations = [
  { label: 'Gauche', value: 'LEFT' },
  { label: 'Droite', value: 'RIGHT' },
]
</script>

<template>
  <Dialog v-model:visible="visible" append-to="self" header="Propriétés de boucle">
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label>Orientation</label>
        <SelectButton
          v-model="loop.$loop.toward"
          :options="orientations"
          option-label="label"
          option-value="value"
        />
      </div>
    </div>

    <pre v-if="false">
      {{ loop }}
    </pre>
  </Dialog>
</template>
