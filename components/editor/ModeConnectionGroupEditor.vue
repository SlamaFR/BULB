<script setup lang="ts">
const {
  connection,
} = defineProps<{
  connection: ModeConnection
}>()
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex items-center gap-4">
      <span>Mode</span>
      <Select
        v-model="connection.mode"
        :options="modes"
        option-label="name"
        option-value="value"
        placeholder="Selectionner un mode"
        class="flex-auto"
      />
    </div>

    <Fieldset legend="Lignes">
      <div v-for="(line, index) in connection.lines">
        {{ line }}
      </div>
    </Fieldset>
  </div>
</template>
