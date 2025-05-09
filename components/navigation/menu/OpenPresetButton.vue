<script lang="ts" setup>
import { ref } from 'vue'

const showPresetSelector = ref(false)
</script>

<template>
  <Button
    pt:root:class="important-justify-start"
    severity="secondary"
    :label="$t('ui.properties.use_preset')"
    icon="i-tabler-blocks"
    text
    @click="showPresetSelector = true"
  />

  <PresetSelector v-model:visible="showPresetSelector" />
</template>
