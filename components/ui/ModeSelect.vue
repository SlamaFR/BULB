<script setup lang="ts">
const mode = defineModel<Mode>({ required: true })

const selectedMode = ref<ModeChoice>(findModeByValue(mode.value))

watch(selectedMode, val => mode.value = val.value)
watch(mode, val => selectedMode.value = findModeByValue(val))
</script>

<template>
  <Select
    v-model="selectedMode"
    :options="MODES"
    placeholder="Selectionner un mode"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div class="flex items-center gap-3">
        <Mode class="text-xl" plain :mode="slotProps.value.value" />
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Mode class="text-xl" plain :mode="slotProps.option.value" />
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
