<script setup lang="ts">
import { ref, watch } from 'vue'
import { AIRPORTS, findAirportVyValue } from '~/data/airports'

const airport = defineModel<Airport | null>({ required: true })

const selectedAirport = ref<AirportChoice | null>(findAirportVyValue(airport.value))

watch(selectedAirport, val => airport.value = val?.value ?? null)
watch(airport, val => selectedAirport.value = findAirportVyValue(val))
</script>

<template>
  <Select
    v-model="selectedAirport"
    :options="AIRPORTS"
    :placeholder="$t('components.airport_select.placeholder')"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <Airport class="text-xl" :airport="slotProps.value.value" />
        <span>{{ $t(slotProps.value.label.toLowerCase()) }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Airport class="text-xl" :airport="slotProps.option.value" />
        <span>{{ $t(slotProps.option.label.toLowerCase()) }}</span>
      </div>
    </template>
  </Select>
</template>
