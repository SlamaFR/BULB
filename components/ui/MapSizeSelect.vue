<script setup lang="ts">
import type { SelectChangeEvent } from 'primevue/select'
import { ref, watch } from 'vue'

interface SizeChoice {
  value: string | null
  label: string
}

const SIZES: SizeChoice[] = [
  { label: 'data.map_size.normal', value: '15' },
  { label: 'data.map_size.large', value: '20' },
  { label: 'data.map_size.big', value: '30' },
  { label: 'data.map_size.huge', value: '50' },
  { label: 'data.map_size.custom', value: '' },
]

function findMapSizeByValue(value: string | null) {
  return SIZES.find(size => size.value === value) ?? { label: 'data.map_size.custom', value: '' }
}

const size = defineModel<string | null>({ required: true })
const selectedSize = ref<SizeChoice | null>(findMapSizeByValue(size.value))
const showCustomDialog = ref(false)

watch(selectedSize, (val) => {
  if (val && val.value === '') return
  size.value = val?.value ?? null
})
watch(size, val => selectedSize.value = findMapSizeByValue(val))
watch(showCustomDialog, (val) => {
  if (!val) selectedSize.value = findMapSizeByValue(size.value)
})

function handleClick(event: SelectChangeEvent) {
  if (event.value.value === '') {
    showCustomDialog.value = true
  }
}

function close() {
  showCustomDialog.value = false
  selectedSize.value = findMapSizeByValue(size.value)
}
</script>

<template>
  <Select
    v-model="selectedSize"
    :options="SIZES"
    :placeholder="$t('components.map_size_select.placeholder')"
    class="flex-auto"
    @change="handleClick"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-1">
        <span>{{ $t(slotProps.value.label) }}</span>
        <span class="opacity-50">{{ slotProps.value.value || size }}em</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-1">
        <span>{{ $t(slotProps.option.label) }}</span>
        <span v-if="slotProps.option.value" class="opacity-50">{{ slotProps.option.value }}em</span>
      </div>
    </template>
  </Select>

  <Dialog
    v-model:visible="showCustomDialog"
    :header="$t('ui.dialogs.custom_map_size.header')"
    modal
  >
    <InputGroup>
      <BInputNumber v-model="size" class="w-full" />
      <InputGroupAddon>
        <span>em</span>
      </InputGroupAddon>
    </InputGroup>
    <template #footer>
      <Button :label="$t('ui.dialogs.custom_map_size.accept')" @click="close()" />
    </template>
  </Dialog>
</template>
