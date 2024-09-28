<script setup lang="ts">
const service = defineModel<Service | null>({ required: true })

const selectedService = ref<ServiceChoice | null>(findServiceByValue(service.value))

watch(selectedService, val => service.value = val?.value ?? null)
watch(service, val => selectedService.value = findServiceByValue(val))
</script>

<template>
  <Select
    v-model="selectedService"
    :options="SERVICES"
    placeholder="Selectionner un mode"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <Service class="text-xl" :service="slotProps.value.value" />
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Service class="text-xl" :service="slotProps.option.value" />
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
