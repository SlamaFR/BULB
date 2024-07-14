<script setup lang="ts">
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
  <Panel
    class="min-w-30em"
    :header="`Groupe de correspondances #${index + 1}`"
    :pt="{
      root: { class: 'flex flex-col' },
      content: { class: 'h-full' },
      contentContainer: { class: 'h-full' },
    }"
  >
    <template #icons>
      <Tag v-if="isModeConnection(connection)" severity="success">
        Mode de transport
      </Tag>
      <Tag v-if="isServiceConnection(connection)" severity="info">
        Services de transport
      </Tag>
    </template>

    <div class="h-full flex flex-col gap-4 justify-between">
      <ModeConnectionGroupEditor v-if="isModeConnection(connection)" :index="index" :connection="connection" />
      <div v-else />

      <div class="flex flex-row items-center justify-between gap-2">
        <div class="flex flex-row items-center gap-2">
          <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-up" :disabled="index <= 0" />
          <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-down" :disabled="index >= total - 1" />
        </div>
        <Button size="small" label="Supprimer" icon="i-tabler-trash" severity="danger" />
      </div>
    </div>
  </Panel>
</template>
