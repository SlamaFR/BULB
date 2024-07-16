<script setup lang="ts">
const {
  index,
  total,
} = defineProps<{
  index: number
  total: number
}>()

const emit = defineEmits<{
  delete: [number]
}>()
const connection = defineModel<ModeConnection | ServiceConnection>('connection', { required: true })
</script>

<template>
  <Panel
    class="min-w-35em max-w-40em"
    :header="`Groupe de correspondances #${index + 1}`"
    :pt="{
      root: { class: 'flex flex-col' },
      content: { class: 'h-full' },
      contentContainer: { class: 'h-full' },
    }"
  >
    <template #icons>
      <Tag v-if="isModeConnection(connection)" severity="warn">
        Mode de transport
      </Tag>
      <Tag v-if="isServiceConnection(connection)" severity="info">
        Services de transport
      </Tag>
    </template>

    <div class="h-full flex flex-col gap-2 justify-between">
      <ModeConnectionGroupEditor v-if="isModeConnection(connection)" v-model:connection="connection" :index="index" />
      <ServiceConnectionGroupEditor v-else-if="isServiceConnection(connection)" v-model:connection="connection" :index="index" />
      <div v-else />

      <div class="flex flex-row items-center justify-between gap-2">
        <div class="flex flex-row items-center gap-2">
          <!--
          <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-up" :disabled="index <= 0" />
          <Button outlined size="small" severity="secondary" icon="i-tabler-chevron-down" :disabled="index >= total - 1" />
          -->
        </div>
        <Button size="small" label="Supprimer" icon="i-tabler-trash" severity="danger" @click="emit('delete', index)" />
      </div>
    </div>
  </Panel>
</template>
