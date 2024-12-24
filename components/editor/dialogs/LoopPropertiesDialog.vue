<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const loop = defineModel<Loop>({ required: true })

const orientations = [
  { label: 'ui.dialogs.loop_properties.orientation.left', value: 'LEFT' },
  { label: 'ui.dialogs.loop_properties.orientation.right', value: 'RIGHT' },
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
        <span class="p-dialog-title" data-pc-section="title">{{ $t('ui.dialogs.loop_properties.header') }}</span>
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.loop_properties.orientation.title') }}</label>
        <SelectButton
          v-model="loop.$loop.toward"
          pt:pc-toggle-button:root:class="flex-grow"
          :options="orientations"
          :option-label="option => $t(option.label)"
          option-value="value"
          :allow-empty="false"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.parallel_branches_properties.section_1_level') }}</label>
        <BInputNumber v-model="loop.$loop.linksOffsets[0]" />
      </div>

      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.parallel_branches_properties.section_2_level') }}</label>
        <BInputNumber v-model="loop.$loop.linksOffsets[1]" />
      </div>
    </div>

    <pre v-if="false">
      {{ loop }}
    </pre>
  </Dialog>
</template>
