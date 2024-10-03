<script setup lang="ts">
const {
  index,
  mode,
} = defineProps<{
  index: number
  mode: Mode | null
}>()

const emit = defineEmits<{
  delete: [number]
}>()
const line = defineModel<ModeConnectionElement>('line', { required: true })

const showOrnamentEditor = ref(false)

function permittedTypes(mode: Mode | null) {
  if (mode === 'BUS') return []
  return undefined
}
</script>

<template>
  <div class="p-3 p-panel flex flex-col gap-2 flex-shrink-0">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3">
        <IndexSelect v-model="line.$modeConnectionElement.lineIndex" :mode="mode" />
      </div>
      <div class="flex flex-row items-center gap-3">
        <Checkbox v-model="line.$modeConnectionElement.walk" :input-id="line.id" :disabled="mode === 'BUS'" binary />
        <label :for="line.id" class="text-nowrap">{{ $t('ui.dialogs.connections_editor.group.pedestrian_connection') }}</label>
      </div>

      <div class="flex flex-row gap-2 items-center">
        <Button
          class="flex-grow"
          size="small"
          :label="$t('ui.dialogs.connections_editor.group.ornament')"
          :severity="line.$modeConnectionElement.ornament ? 'primary' : 'secondary'"
          :disabled="mode === 'BUS'"
          @click="showOrnamentEditor = true"
        />
        <Button
          size="small"
          severity="danger"
          icon="i-tabler-trash"
          @click="emit('delete', index)"
        />
      </div>
    </div>
  </div>

  <OrnamentEditor
    v-model="line.$modeConnectionElement.ornament"
    v-model:visible="showOrnamentEditor"
    :permitted-types="permittedTypes(mode)"
  />
</template>
