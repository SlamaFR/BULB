<script setup lang="ts">
const {
  index,
  groupIndex,
  total,
  mode,
} = defineProps<{
  index: number
  groupIndex: number
  total: number
  mode: Mode
}>()

const line = defineModel<ConnectionLine>('line', { required: true })
const ornamentEditorButtonSeverity = computed(() => line.value.ornament ? 'primary' : 'secondary')

const showOrnamentEditor = ref(false)
</script>

<template>
  <div class="p-3 p-panel flex flex-col gap-2">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3">
        <IndexSelect v-model="line.lineIndex" :mode="mode" />
      </div>
      <div class="flex flex-row items-center gap-3">
        <Checkbox v-model="line.walk" :input-id="`walk_connection_${groupIndex}_line_${index}`" binary />
        <label :for="`walk_connection_${groupIndex}_line_${index}`" class="text-nowrap">Correspondance piétonne</label>
      </div>

      <div class="flex flex-row gap-2 items-center">
        <Button outlined :severity="ornamentEditorButtonSeverity" class="flex-grow" size="small" label="Décoration" @click="showOrnamentEditor = true" />
        <!--
        <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-left" :disabled="index <= 0" />
        <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-right" :disabled="index >= total - 1" />
        -->
        <Button size="small" severity="danger" icon="i-tabler-trash" />
      </div>
    </div>
  </div>

  <OrnamentEditor v-model="line.ornament" v-model:visible="showOrnamentEditor" />
</template>
