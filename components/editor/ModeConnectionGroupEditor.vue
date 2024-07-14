<script setup lang="ts">
const {
  index,
  connection,
} = defineProps<{
  index: number
  connection: ModeConnection
}>()
</script>

<template>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row gap-3">
      <div class="flex flex-grow items-center gap-4">
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

      <div class="flex items-center">
        <Checkbox v-model="connection.walk" :input-id="`walk_connection_${index}`" binary />
        <label :for="`walk_connection_${index}`" class="ml-2">Correspondance piétonne</label>
      </div>
    </div>

    <Fieldset legend="Lignes">
      <div v-for="(line, index) in connection.lines" :key="index">
        {{ line }} {{ index }}
      </div>
    </Fieldset>
  </div>
</template>
