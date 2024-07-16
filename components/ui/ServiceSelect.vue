<script setup lang="ts">
const service = defineModel<Service>({ required: true })

const selectedService = ref<ServiceChoice>(findServiceByValue(service.value))

watch(selectedService, val => service.value = val.value)
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
      <div class="flex items-center gap-3">
        <div :class="{ 'bg-white': slotProps.value.background, 'rounded-full': slotProps.value.round }">
          <Service class="text-xl" :service="slotProps.value.value" />
        </div>
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <div :class="{ 'bg-white': slotProps.option.background, 'rounded-full': slotProps.option.round }">
          <Service class="text-xl" :service="slotProps.option.value" />
        </div>
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
