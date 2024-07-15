<script setup lang="ts">
const {
  index,
  total,
} = defineProps<{
  index: number
  total: number
}>()

const availableServices: { value: Service, label: string, background: boolean }[] = [
  { value: 'MAIN_STATION', label: 'Grande gare', background: true },
  { value: 'FUNICULAR', label: 'Funiculaire', background: true },
  { value: 'AIRPORT', label: 'Aéroport', background: false },
]

const service = defineModel<ConnectionService>('service', { required: true })
const selectedLine = ref(availableServices.find(it => it.value === service.value.service) ?? availableServices[0])
watch(selectedLine, val => service.value.service = val.value)
</script>

<template>
  <div class="p-3 p-panel flex flex-col gap-2">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3">
        <Select
          v-model="selectedLine"
          :options="availableServices"
          placeholder="Selectionner une ligne"
          class="flex-auto"
        >
          <template #value="slotProps">
            <div class="flex items-center gap-3">
              <div class="w-1.25em" :class="{ 'bg-white': slotProps.value.background }">
                <Service class="text-xl" :service="slotProps.value.value" />
              </div>
              <span>{{ slotProps.value.label }}</span>
            </div>
          </template>
          <template #option="slotProps">
            <div class="flex items-center gap-3">
              <div class="w-1.25em" :class="{ 'bg-white': slotProps.option.background }">
                <Service class="text-xl" :service="slotProps.option.value" />
              </div>
              <span>{{ slotProps.option.label }}</span>
            </div>
          </template>
        </Select>
      </div>
      <!--
      <div class="flex flex-row items-center gap-3">
        <Checkbox v-model="service.walk" :input-id="`walk_connection_${0}`" binary />
        <label :for="`walk_connection_${0}`" class="text-nowrap">Correspondance piétonne</label>
      </div>
      -->

      <div class="flex flex-row gap-2 items-center">
        <Button outlined class="flex-grow" size="small" label="Décoration" />
        <!--
        <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-left" :disabled="index <= 0" />
        <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-right" :disabled="index >= total - 1" />
        -->
        <Button size="small" severity="danger" icon="i-tabler-trash" />
      </div>
    </div>
  </div>
</template>
