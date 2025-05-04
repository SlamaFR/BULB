<script setup lang="ts">
import { ref, watch } from 'vue'

const model = defineModel<string | number | null | undefined>({ required: true })

const currentValue = ref<string>(model.value?.toString() ?? '')
watch(currentValue, (value) => {
  const mappedValue = value.replaceAll(/,/g, '.')
  const number = Number.parseFloat(mappedValue)
  if (!Number.isNaN(number)) model.value = number
})
</script>

<template>
  <InputText v-model="currentValue" v-bind="$attrs" />
</template>
