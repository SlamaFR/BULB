<script setup lang="ts">
const { mode } = defineProps<{
  mode: Mode | null
}>()
const index = defineModel<string | null>({ required: true })

const selectedIndex = ref<IndexChoice | null>(findLineByValueAndMode(index.value, mode))
const availableLines = computed(() => getLinesByMode(mode))

watch(selectedIndex, val => index.value = val?.value ?? null)
watch([() => mode, index], val => selectedIndex.value = findLineByValueAndMode(val[1], val[0]))
</script>

<template>
  <Select
    v-model="selectedIndex"
    :options="availableLines"
    placeholder="Selectionner un indice"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <div class="w-1.25em" :class="{ 'bg-white rounded-sm': ['BOAT', 'BUS', 'CABLE', 'TRAM', 'VELO'].includes(slotProps.value.mode) }">
          <LineIndex class="text-xl" :mode="slotProps.value.mode" :index="slotProps.value.value" />
        </div>
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <div :class="{ 'bg-white rounded-sm': ['BOAT', 'BUS', 'CABLE', 'TRAM', 'VELO'].includes(slotProps.option.mode) }">
          <LineIndex class="text-xl" :mode="slotProps.option.mode" :index="slotProps.option.value" />
        </div>
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
