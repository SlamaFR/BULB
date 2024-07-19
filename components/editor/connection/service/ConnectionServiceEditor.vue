<script setup lang="ts">
const {
  index,
  total,
} = defineProps<{
  index: number
  total: number
}>()

const emit = defineEmits<{
  delete: [number]
}>()
const service = defineModel<ConnectionService>('service', { required: true })

const showOrnamentEditor = ref(false)
</script>

<template>
  <div class="p-3 p-panel flex flex-col gap-2 flex-shrink-0">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3">
        <ServiceSelect v-model="service.service" />
      </div>
      <!--
      <div class="flex flex-row items-center gap-3">
        <Checkbox v-model="service.walk" :input-id="`walk_connection_${0}`" binary />
        <label :for="`walk_connection_${0}`" class="text-nowrap">Correspondance piétonne</label>
      </div>
      -->

      <div class="flex flex-row gap-2 items-center">
        <Button
          class="flex-grow"
          size="small"
          label="Décoration"
          :severity="service.ornament ? 'primary' : 'secondary'"
          @click="showOrnamentEditor = true"
        />
        <Button size="small" severity="danger" icon="i-tabler-trash" @click="emit('delete', index)" />
      </div>
    </div>
  </div>

  <OrnamentEditor v-model="service.ornament" v-model:visible="showOrnamentEditor" />
</template>
