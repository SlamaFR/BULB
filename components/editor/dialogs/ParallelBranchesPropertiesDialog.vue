<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const parallelBranches = defineModel<ParallelBranches>({ required: true })

const alignements = [
  { label: 'Aligné à gauche', value: 'LEFT' },
  { label: 'Fluide', value: 'FLUID' },
  { label: 'Aligné à droite', value: 'RIGHT' },
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
        <span class="p-dialog-title" data-pc-section="title">Propriétés des branches parallèles</span>
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label>Alignement</label>
        <SelectButton
          v-model="parallelBranches.$parallelBranches.alignement"
          :options="alignements"
          option-label="label"
          option-value="value"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label>Niveau section 1</label>
        <InputNumber v-model="parallelBranches.$parallelBranches.sections[0].$lineSection.levelOffset" />
      </div>

      <div class="flex flex-col gap-1">
        <label>Niveau section 2</label>
        <InputNumber v-model="parallelBranches.$parallelBranches.sections[1].$lineSection.levelOffset" />
      </div>
    </div>
  </Dialog>
</template>
