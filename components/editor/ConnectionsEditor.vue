<script setup lang="ts">
const stop = defineModel<Stop | null>('stop')
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
    {{ stop?.connections }}
  </Dialog>
</template>
