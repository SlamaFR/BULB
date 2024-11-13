<script setup lang="ts">
const visible = defineModel<boolean>('visible', { required: true })
const fork = defineModel<Fork>({ required: true })

const orientations = [
  { label: 'ui.dialogs.fork_properties.orientation.left', value: 'LEFT' },
  { label: 'ui.dialogs.fork_properties.orientation.right', value: 'RIGHT' },
]
const shapes = [
  { label: 'ui.dialogs.fork_properties.shape.upward', value: [1, 0] },
  { label: 'ui.dialogs.fork_properties.shape.symmetrical', value: [1, -1] },
  { label: 'ui.dialogs.fork_properties.shape.downward', value: [0, -1] },
]
const arrows = [
  { label: 'ui.dialogs.fork_properties.directional_arrows.none', value: undefined },
  { label: 'ui.dialogs.fork_properties.directional_arrows.clockwise', value: 'CW' },
  { label: 'ui.dialogs.fork_properties.directional_arrows.counterclockwise', value: 'CCW' },
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
        <span class="p-dialog-title" data-pc-section="title">{{ $t('ui.dialogs.fork_properties.header') }}</span>
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.fork_properties.orientation.title') }}</label>
        <SelectButton
          v-model="fork.$fork.toward"
          :options="orientations"
          :option-label="option => $t(option.label)"
          option-value="value"
          :allow-empty="false"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.fork_properties.shape.title') }}</label>
        <SelectButton
          v-model="fork.$fork.linksOffset"
          :options="shapes"
          :option-label="option => $t(option.label)"
          option-value="value"
          :allow-empty="false"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.fork_properties.directional_arrows.title') }}</label>
        <SelectButton
          v-model="fork.$fork.directionalArrows"
          :options="arrows"
          :option-label="option => $t(option.label)"
          option-value="value"
          :allow-empty="false"
        />
      </div>
      <div class="flex flex-col gap-1">
        <label>{{ $t('ui.dialogs.fork_properties.size_multiplier') }}</label>
        <InputText v-model="fork.$fork.offsetMultiplier" numeric />
      </div>
    </div>

    <pre v-if="false">
      {{ fork }}
    </pre>
  </Dialog>
</template>
