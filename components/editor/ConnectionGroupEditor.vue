<script setup lang="ts">
import ModeConnectionGroupEditor from '~/components/editor/ModeConnectionGroupEditor.vue'

const {
  index,
  total,
  connection,
} = defineProps<{
  index: number
  total: number
  connection: Connection
}>()
</script>

<template>
  <Panel class="min-w-30em" :header="`Groupe de correspondances #${index + 1}`">
    <template #icons>
      <Tag v-if="isModeConnection(connection)" severity="success">
        Mode de transport
      </Tag>
      <Tag v-if="isServiceConnection(connection)" severity="info">
        Services de transport
      </Tag>
    </template>

    <ModeConnectionGroupEditor v-if="isModeConnection(connection)" :connection="connection" />

    <div class="mt-4 flex flex-row items-center justify-between gap-2">
      <div class="flex flex-row items-center gap-2">
        <Button outlined size="small" icon="i-tabler-chevron-up" />
        <Button outlined size="small" icon="i-tabler-chevron-down" />
      </div>
      <Button size="small" label="Supprimer" icon="i-tabler-trash" severity="danger" />
    </div>
  </Panel>
</template>
