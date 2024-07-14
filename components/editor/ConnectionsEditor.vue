<script setup lang="ts">
import ConnectionGroupEditor from '~/components/editor/ConnectionGroupEditor.vue'

const {
  stop,
} = defineProps<{
  stop: Stop | null
}>()
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    :header="`Correspondances de '${stop?.name}'`"
    :pt="{
      header: { class: 'gap-6' },
    }"
  >
    <div v-if="(stop?.connections?.length ?? 0) > 0" class="flex flex-col gap-3">
      <ConnectionGroupEditor
        v-for="(connection, index) in stop?.connections"
        :key="index"
        :index="index"
        :total="stop?.connections?.length ?? 0"
        :connection="connection"
      />
    </div>

    <div v-else div="flex items-center justify-center">
      <span>Aucune correspondance</span>
    </div>

    <div class="mt-4 flex flex-row justify-end gap-2">
      <Button label="Ajouter un groupe" icon="i-tabler-plus" />
    </div>
  </Dialog>
</template>

<style scoped>
</style>
