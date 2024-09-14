<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const loop = defineModel<Loop>({ required: true })

const orientations = [
  { label: 'Gauche', value: 'LEFT' },
  { label: 'Droite', value: 'RIGHT' },
]
</script>

<template>
  <Dialog v-model:visible="visible" append-to="self" modal>
    <template #header>
      <div class="flex flex-row gap-4">
        <Tag severity="warn">
          <i class="i-tabler-traffic-cone" />
          WIP
        </Tag>
        <span class="p-dialog-title" data-pc-section="title">Propriétés de la boucle</span>
      </div>
    </template>
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
