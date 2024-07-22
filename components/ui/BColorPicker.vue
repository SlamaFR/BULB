<script setup lang="ts">
const color = defineModel<string | null>({ required: true })
const pickedColor = ref<string | null>(color.value ?? 'transparent')

function onModelUpdates(value: string | null) {
  if (value === null) return
  color.value = `#${value}`
}

watch(color, val => pickedColor.value = val)
</script>

<template>
  <div class="relative w-full">
    <InputText v-model="color" fluid />
    <div class="absolute top-50% right-.5em translate-y--50%">
      <ColorPicker
        v-model="pickedColor"
        pt:preview:class="important-b-1 important-b-[var(--p-surface-300)] important-b-solid"
        @update:model-value="onModelUpdates"
      />
    </div>
  </div>
</template>
