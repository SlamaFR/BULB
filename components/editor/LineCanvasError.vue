<script setup lang="ts">
import { useProject } from '~/stores/useProject'

const { reset } = useProject()

function reload() {
  location.reload()
}

function newProject() {
  reset()
  location.reload()
}
</script>

<template>
  <div class="content flex flex-col items-center justify-center">
    <h2 class="font-bold">
      {{ $t('ui.map_editor.error.title') }}
    </h2>
    <div class="text text-.5em text-center w-30em">
      {{ $t('ui.map_editor.error.detail') }}
    </div>
    <div class="mt-1em flex flex-row gap-2">
      <Button severity="contrast" icon="i-tabler-refresh" :label="$t('ui.map_editor.error.reload')" @click="reload()" />
      <Button severity="contrast" icon="i-tabler-file" :label="$t('ui.map_editor.error.new_project')" @click="newProject()" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  font-size: var(--font-size);
  background: white;
  padding: 1em 1em;
  outline: 1px solid var(--p-gray-200);
  box-sizing: content-box;
  overflow: hidden;
  min-width: fit-content;
}
</style>
