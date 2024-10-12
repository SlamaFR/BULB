<script setup lang="ts">
import { ref, watch } from 'vue'
import { findServiceByValue, SERVICES } from '~/data/services'

const service = defineModel<Service | null>({ required: true })

const selectedService = ref<ServiceChoice | null>(findServiceByValue(service.value))

watch(selectedService, val => service.value = val?.value ?? null)
watch(service, val => selectedService.value = findServiceByValue(val))
</script>

<template>
  <Select
    v-model="selectedService"
    :options="SERVICES"
    :placeholder="$t('components.service_select.placeholder')"
    option-label="label"
    class="flex-auto"
    filter
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <Service class="text-xl" :service="slotProps.value.value" />
        <span>{{ $t(slotProps.value.label.toLowerCase()) }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Service class="text-xl" :service="slotProps.option.value" />
        <span>{{ $t(slotProps.option.label.toLowerCase()) }}</span>
      </div>
    </template>
  </Select>
</template>
