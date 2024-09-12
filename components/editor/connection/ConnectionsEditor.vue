<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

const visible = defineModel<boolean>('visible')
const stop = defineModel<Stop>('stop', { required: true })

function addModeConnection() {
  stop.value.connections.push({
    id: uuidv4(),
    $modeConnection: {
      mode: null,
      elements: [],
      walk: false,
    },
  })
}

function addServiceConnection() {
  stop.value.connections.push({
    id: uuidv4(),
    $serviceConnection: {
      elements: [],
      walk: false,
    },
  })
}

function deleteConnection(index: number) {
  stop.value.connections.splice(index, 1)
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    :header="`Correspondances de '${stop.name}'`"
    :pt="{
      header: { class: 'gap-6' },
    }"
  >
    <template #header>
      <div class="flex flex-row gap-4">
        <Tag severity="warn">
          <i class="i-tabler-traffic-cone" />
          WIP
        </Tag>
        <span class="p-dialog-title" data-pc-section="title">Correspondances de '{{ stop.name }}'</span>
      </div>
    </template>
    <div class="connections">
      <ConnectionGroupEditor
        v-for="(_, index) in stop.connections"
        :key="index"
        v-model:connection="stop.connections[index]"
        :index="index"
        @delete="deleteConnection"
      />
      <div class="md:min-w-30em md:min-h-25em p-panel p-8 flex flex-col items-center justify-center">
        <Button text severity="warn" icon="i-tabler-plus" label="Mode de transport" @click="addModeConnection()" />
        <Divider align="center" type="dotted">
          <b>Ou</b>
        </Divider>
        <Button text severity="info" icon="i-tabler-plus" label="Services de transport" @click="addServiceConnection()" />
      </div>
    </div>
  </Dialog>
</template>

<style scoped>
.connections {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .75em;
}

@media (max-width: 1024px) {
  .connections {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
