<script setup lang="ts">
import type { SelectChangeEvent } from 'primevue/select'
import { ref, watch } from 'vue'

interface LineThicknessChoice {
  value: string
  label: string
}

const THICKNESSES: LineThicknessChoice[] = [
  { label: 'data.line_thickness.normal', value: '0.375' },
  { label: 'data.line_thickness.medium', value: '0.625' },
  { label: 'data.line_thickness.thick', value: '1.375' },
  { label: 'data.line_thickness.custom', value: '' },
]

function findThicknessByValue(value: string | null) {
  return THICKNESSES.find(thickness => thickness.value === value) ?? { label: 'data.line_thickness.custom', value: '' }
}

const thickness = defineModel<string | null>({ required: true })
const selectedThickness = ref<LineThicknessChoice | null>(findThicknessByValue(thickness.value))
const showCustomDialog = ref(false)

watch(selectedThickness, (val) => {
  if (val && val.value === '') return
  thickness.value = val?.value ?? null
})
watch(thickness, val => selectedThickness.value = findThicknessByValue(val))
watch(showCustomDialog, (val) => {
  if (!val) selectedThickness.value = findThicknessByValue(thickness.value)
})

function handleClick(event: SelectChangeEvent) {
  if (event.value.value === '') {
    showCustomDialog.value = true
  }
}

function close() {
  showCustomDialog.value = false
  selectedThickness.value = findThicknessByValue(thickness.value)
}
</script>

<template>
  <Select
    v-model="selectedThickness"
    :options="THICKNESSES"
    :placeholder="$t('components.line_thickness_select.placeholder')"
    class="flex-auto"
    @change="handleClick"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-1">
        <span>{{ $t(slotProps.value.label.toLowerCase()) }}</span>
        <span v-if="slotProps.value.value" class="opacity-50">{{ slotProps.value.value }}</span>
        <span v-if="!slotProps.value.value">({{ thickness || '1' }})</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-1">
        <span>{{ $t(slotProps.option.label.toLowerCase()) }}</span>
        <span v-if="slotProps.option.value" class="opacity-50">{{ slotProps.option.value }}</span>
      </div>
    </template>
  </Select>

  <Dialog
    v-model:visible="showCustomDialog"
    :header="$t('ui.dialogs.custom_line_thickness.header')"
    modal
  >
    <InputGroup>
      <InputText v-model="thickness" class="w-full" />
      <InputGroupAddon>
        <span>em</span>
      </InputGroupAddon>
    </InputGroup>
    <template #footer>
      <Button :label="$t('ui.dialogs.custom_line_thickness.accept')" @click="close()" />
    </template>
  </Dialog>
</template>
