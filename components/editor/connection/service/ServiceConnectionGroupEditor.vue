<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

const connection = defineModel<ServiceConnection>('connection', { required: true })

function addService() {
  connection.value.$serviceConnection.elements.push({
    id: uuidv4(),
    $serviceConnectionElement: {
      service: null,
      ornament: null,
    },
  })
}

function deleteService(index: number) {
  connection.value.$serviceConnection.elements.splice(index, 1)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-col md:flex-row gap-3">
      <div class="flex items-center">
        <Checkbox v-model="connection.$serviceConnection.walk" :input-id="connection.id" binary />
        <label :for="connection.id" class="ml-2">{{ $t('ui.dialogs.connections_editor.group.pedestrian_connection') }}</label>
      </div>
    </div>

    <div>
      <Divider align="left">
        <b>{{ $t('ui.dialogs.connections_editor.group.service.services.header') }}</b>
      </Divider>
      <HorizontalScrollContainer>
        <div class="flex flex-col md:flex-row gap-2 overflow-y-auto max-h-20em md:overflow-x-scroll">
          <ConnectionServiceEditor
            v-for="(_, i) in connection.$serviceConnection.elements"
            :key="i"
            v-model:service="connection.$serviceConnection.elements[i]"
            :index="i"
            @delete="deleteService"
          />
          <div class="p-panel p-8 flex items-center justify-center">
            <Button :label="$t('ui.dialogs.connections_editor.group.service.services.add')" text icon="i-tabler-plus" class="text-nowrap" @click="addService()" />
          </div>
        </div>
      </HorizontalScrollContainer>
      <Divider />
    </div>
  </div>
</template>
