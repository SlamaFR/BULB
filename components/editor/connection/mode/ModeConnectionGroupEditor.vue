<script setup lang="ts">
const {
  index: groupIndex,
} = defineProps<{
  index: number
}>()

const connection = defineModel<ModeConnection>('connection', { required: true })

function addLine() {
  connection.value.lines.push({
    lineIndex: null,
    walk: false,
    ornament: null,
  })
}

function deleteLine(index: number) {
  connection.value.lines.splice(index, 1)
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row gap-3">
      <div class="flex flex-grow items-center gap-4">
        <span>Mode</span>
        <ModeSelect v-model="connection.mode" />
      </div>

      <div class="flex items-center">
        <Checkbox v-model="connection.walk" :input-id="`walk_connection_${groupIndex}`" binary />
        <label :for="`walk_connection_${index}`" class="ml-2">Correspondance piétonne</label>
      </div>
    </div>

    <div>
      <Divider align="left">
        <b>Lignes</b>
      </Divider>
      <HorizontalScrollContainer>
        <div class="flex flex-row gap-2 overflow-x-scroll">
          <ConnectionLineEditor
            v-for="(_, i) in connection.lines"
            :key="i"
            v-model:line="connection.lines[i]"
            :index="i"
            :group-index="groupIndex"
            :total="connection.lines.length"
            :mode="connection.mode"
            @delete="deleteLine"
          />
          <div class="p-panel p-8 flex items-center justify-center">
            <Button icon="i-tabler-plus" label="Ajouter une ligne" class="text-nowrap" @click="addLine()" />
          </div>
        </div>
      </HorizontalScrollContainer>
      <Divider />
    </div>
  </div>
</template>
