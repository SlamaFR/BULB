<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { computed } from 'vue'

const connection = defineModel<ModeConnection>('connection', { required: true })
const pedestrianChild = computed(() => connection.value.$modeConnection.elements.some(it => it.$modeConnectionElement.walk))

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
        <span>{{ $t('ui.dialogs.connections_editor.group.mode.mode') }}</span>
        <ModeSelect v-model="connection.$modeConnection.mode" />
      </div>

      <div class="flex items-center">
        <Checkbox
          v-model="connection.$modeConnection.walk"
          :input-id="connection.id"
          :disabled="pedestrianChild && !connection.$modeConnection.walk"
          binary
        />
        <label :for="connection.id" class="ml-2">{{
          $t('ui.dialogs.connections_editor.group.pedestrian_connection')
        }}</label>
      </div>
    </div>

    <div>
      <Divider align="left">
        <b>{{ $t('ui.dialogs.connections_editor.group.mode.lines.header') }}</b>
      </Divider>
      <HorizontalScrollContainer>
        <div class="flex flex-col md:flex-row gap-2 overflow-y-auto max-h-20em md:overflow-x-scroll">
          <ConnectionLineEditor
            v-for="(_, i) in connection.$modeConnection.elements"
            :key="i"
            v-model:line="connection.$modeConnection.elements[i]"
            :index="i"
            :mode="connection.$modeConnection.mode"
            :allow-pedestrian="!pedestrianChild && !connection.$modeConnection.walk && i > 0"
            @delete="deleteLine"
          />
          <div class="p-panel p-8 flex items-center justify-center">
            <Button
              :label="$t('ui.dialogs.connections_editor.group.mode.lines.add')" text icon="i-tabler-plus"
              class="text-nowrap" @click="addLine()"
            />
          </div>
        </div>
      </HorizontalScrollContainer>
      <Divider />
    </div>
  </div>
</template>
