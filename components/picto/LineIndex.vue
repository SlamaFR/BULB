<script setup lang="ts">
const {
  index,
} = defineProps<{
  index: LineIndex | null
}>()

const { findIndexById } = useCustomLineIndices()

const unknownCustomIndex: CustomLineIndexDescription = {
  id: '',
  mode: 'METRO',
  shape: 'SQUARE',
  prefix: '',
  index: '?',
  suffix: '',
  color: '#000000',
}
const customIndex = computed(() => {
  if (isCustomIndex(index)) {
    return findIndexById(index.id) ?? unknownCustomIndex
  }
  return unknownCustomIndex
})
</script>

<template>
  <div v-if="index !== null">
    <Cable v-if="isDefaultIndex(index) && index.mode === 'CABLE'" :line="index.index" />
    <Metro v-else-if="isDefaultIndex(index) && index.mode === 'METRO'" :line="index.index" />
    <ExpressTrain v-else-if="isDefaultIndex(index) && index.mode === 'RER'" :line="index.index" />
    <Train v-else-if="isDefaultIndex(index) && index.mode === 'TRAIN'" :line="index.index" />
    <Tram v-else-if="isDefaultIndex(index) && index.mode === 'TRAM'" :line="index.index" />
    <CustomLineIndex
      v-else-if="customIndex"
      :shape="customIndex.shape"
      :prefix="customIndex.prefix"
      :index="customIndex.index"
      :suffix="customIndex.suffix"
      :color="customIndex.color"
    />
  </div>
</template>
