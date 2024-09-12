<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

const connection = defineModel<ModeConnection>('connection', { required: true })

function addLine() {
  connection.value.$modeConnection.elements.push({
    id: uuidv4(),
    $modeConnectionElement: {
      lineIndex: null,
      walk: false,
      ornament: null,
    },
  })
}

function deleteLine(index: number) {
  connection.value.$modeConnection.elements.splice(index, 1)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-col md:flex-row gap-3">
      <div class="flex flex-grow items-center gap-4">
        <span>Mode</span>
        <ModeSelect v-model="connection.$modeConnection.mode" />
      </div>

      <div class="flex items-center">
        <Checkbox v-model="connection.$modeConnection.walk" :input-id="connection.id" binary />
        <label :for="connection.id" class="ml-2">Correspondance piétonne</label>
      </div>
    </div>

    <div>
      <Divider align="left">
        <b>Lignes</b>
      </Divider>
      <HorizontalScrollContainer>
        <div class="flex flex-col md:flex-row gap-2 overflow-y-auto max-h-20em md:overflow-x-scroll">
          <ConnectionLineEditor
            v-for="(_, i) in connection.$modeConnection.elements"
            :key="i"
            v-model:line="connection.$modeConnection.elements[i]"
            :mode="connection.$modeConnection.mode"
            @delete="deleteLine"
          />
          <div class="p-panel p-8 flex items-center justify-center">
            <Button text icon="i-tabler-plus" label="Ajouter une ligne" class="text-nowrap" @click="addLine()" />
          </div>
        </div>
      </HorizontalScrollContainer>
      <Divider />
    </div>
  </div>
</template>
