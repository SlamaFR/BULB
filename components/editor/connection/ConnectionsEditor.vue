<script setup lang="ts">
const visible = defineModel<boolean>('visible')
const stop = defineModel<Stop>('stop', { required: true })
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
    <div class="connections">
      <ConnectionGroupEditor
        v-for="(connection, index) in stop.connections"
        :key="index"
        v-model:connection="stop.connections[index]"
        :index="index"
        :total="stop.connections.length ?? 0"
      />
      <div class="min-w-30em p-panel p-8 flex flex-col items-center justify-center">
        <!-- add mode or add service -->
        <Button severity="warn" icon="i-tabler-plus" label="Mode de transport" />
        <Divider align="center" type="dotted">
          <b>Ou</b>
        </Divider>
        <Button severity="info" icon="i-tabler-plus" label="Services de transport" />
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
</style>
