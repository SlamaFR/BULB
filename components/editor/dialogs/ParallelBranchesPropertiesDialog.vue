<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const parallelBranches = defineModel<ParallelBranches>({ required: true })

const alignements = [
  { label: 'ui.dialogs.parallel_branches_properties.alignment.left', value: 'LEFT' },
  { label: 'ui.dialogs.parallel_branches_properties.alignment.fluid', value: 'FLUID' },
  { label: 'ui.dialogs.parallel_branches_properties.alignment.right', value: 'RIGHT' },
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
        <span class="p-dialog-title" data-pc-section="title">{{ $t('ui.dialogs.parallel_branches_properties.header') }}</span>
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.parallel_branches_properties.alignment.title') }}</label>
        <SelectButton
          v-model="parallelBranches.$parallelBranches.alignement"
          :options="alignements"
          :option-label="option => $t(option.label)"
          option-value="value"
          :allow-empty="false"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.parallel_branches_properties.section_1_level') }}</label>
        <InputNumber v-model="parallelBranches.$parallelBranches.sections[0].$lineSection.levelOffset" />
      </div>

      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.parallel_branches_properties.section_2_level') }}</label>
        <InputNumber v-model="parallelBranches.$parallelBranches.sections[1].$lineSection.levelOffset" />
      </div>
    </div>
  </Dialog>
</template>
