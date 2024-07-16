<script setup lang="ts">
const {
  index,
} = defineProps<{
  index: number
}>()

const connection = defineModel<ServiceConnection>('connection', { required: true })
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row gap-3">
      <div class="flex items-center">
        <Checkbox v-model="connection.walk" :input-id="`walk_connection_${index}`" binary />
        <label :for="`walk_connection_${index}`" class="ml-2">Correspondance piétonne</label>
      </div>
    </div>

    <div>
      <Divider align="left">
        <b>Lignes</b>
      </Divider>
      <HorizontalScrollContainer>
        <div class="flex flex-row gap-2 overflow-x-scroll">
          <ConnectionServiceEditor
            v-for="(_, i) in connection.services"
            :key="i"
            v-model:service="connection.services[i]"
            :index="i"
            :total="connection.services.length"
          />
          <div class="p-panel p-8 flex items-center justify-center">
            <Button icon="i-tabler-plus" label="Ajouter un service" class="text-nowrap" />
          </div>
        </div>
      </HorizontalScrollContainer>
      <Divider />
    </div>
  </div>
</template>
