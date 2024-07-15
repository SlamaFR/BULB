<script setup lang="ts">
const ornament = defineModel<Ornament | null>({ required: true })
const visible = defineModel<boolean>('visible')
</script>

<template>
  <Dialog v-model:visible="visible" modal>
    {{ ornament }}
  </Dialog>
</template>
