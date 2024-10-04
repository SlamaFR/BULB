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
        <span class="p-dialog-title" data-pc-section="title">{{ $t('ui.dialogs.connections_editor.header', { stopName: stop.name }) }}</span>
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
        <Button :label="$t('ui.dialogs.connections_editor.mode')" text severity="warn" icon="i-tabler-plus" @click="addModeConnection()" />
        <Divider align="center" type="dotted">
          <b>{{ $t('ui.dialogs.connections_editor.or') }}</b>
        </Divider>
        <Button :label="$t('ui.dialogs.connections_editor.service')" text severity="info" icon="i-tabler-plus" @click="addServiceConnection()" />
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
