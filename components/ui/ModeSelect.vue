<script setup lang="ts">
import { findModeByValue, MODES } from '~/data/modes'

const mode = defineModel<Mode | null>({ required: true })

const selectedMode = ref<ModeChoice | null>(findModeByValue(mode.value))

watch(selectedMode, val => mode.value = val?.value ?? null)
watch(mode, val => selectedMode.value = findModeByValue(val))
</script>

<template>
  <Select
    v-model="selectedMode"
    :options="MODES"
    :placeholder="$t('components.mode_select.placeholder')"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <Mode class="text-1.25em" plain :mode="slotProps.value.value" />
        <span>{{ $t(slotProps.value.label.toLowerCase()) }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Mode class="text-1.25em" plain :mode="slotProps.option.value" />
        <span>{{ $t(slotProps.option.label.toLowerCase()) }}</span>
      </div>
    </template>
  </Select>
</template>
