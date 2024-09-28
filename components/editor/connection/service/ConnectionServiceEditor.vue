<script setup lang="ts">
const {
  index,
} = defineProps<{
  index: number
}>()

const emit = defineEmits<{
  delete: [number]
}>()
const service = defineModel<ServiceConnectionElement>('service', { required: true })

const showOrnamentEditor = ref(false)

function permittedTypes(service: Service | null) {
  if (service === 'AIRPORT') return ['AIRPORT_NAME']
  return undefined
}
</script>

<template>
  <div class="p-3 p-panel flex flex-col gap-2 flex-shrink-0">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3">
        <ServiceSelect v-model="service.$serviceConnectionElement.service" />
      </div>

      <div class="flex flex-row gap-2 items-center">
        <Button
          class="flex-grow"
          size="small"
          label="Décoration"
          :severity="service.$serviceConnectionElement.ornament ? 'primary' : 'secondary'"
          @click="showOrnamentEditor = true"
        />
        <Button size="small" severity="danger" icon="i-tabler-trash" @click="emit('delete', index)" />
      </div>
    </div>
  </div>

  <OrnamentEditor
    v-model="service.$serviceConnectionElement.ornament"
    v-model:visible="showOrnamentEditor"
    :permitted-types="permittedTypes(service.$serviceConnectionElement.service)"
  />
</template>
