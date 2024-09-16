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
</script>

<template>
  <div class="p-3 p-panel flex flex-col gap-2 flex-shrink-0">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3">
        <IndexSelect v-model="line.$modeConnectionElement.lineIndex" :mode="mode" />
      </div>
      <div class="flex flex-row items-center gap-3">
        <Checkbox v-model="line.$modeConnectionElement.walk" :input-id="line.id" binary />
        <label :for="line.id" class="text-nowrap">Correspondance piétonne</label>
      </div>

      <div class="flex flex-row gap-2 items-center">
        <Button
          class="flex-grow"
          size="small"
          label="Décoration"
          :severity="line.$modeConnectionElement.ornament ? 'primary' : 'secondary'"
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

  <OrnamentEditor v-model="line.$modeConnectionElement.ornament" v-model:visible="showOrnamentEditor" />
</template>
