<script setup lang="ts">
const airport = defineModel<Airport | null>({ required: true })

const selectedAirport = ref<AirportChoice | null>(findAirportVyValue(airport.value))

watch(selectedAirport, val => airport.value = val?.value ?? null)
watch(airport, val => selectedAirport.value = findAirportVyValue(val))
</script>

<template>
  <Select
    v-model="selectedAirport"
    :options="AIRPORTS"
    placeholder="Selectionner un aéroport"
    class="flex-auto"
  >
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex items-center gap-3">
        <Airport class="text-xl" :airport="slotProps.value.value" />
        <span>{{ slotProps.value.label }}</span>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex items-center gap-3">
        <Airport class="text-xl" :airport="slotProps.option.value" />
        <span>{{ slotProps.option.label }}</span>
      </div>
    </template>
  </Select>
</template>
