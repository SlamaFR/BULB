<script setup lang="ts">
const {
  mode,
  index,
} = defineProps<{
  mode: Mode | null
  index: string | CustomLineIndex | null
}>()
</script>

<template>
  <div v-if="index !== null">
    <Cable v-if="isDefaultIndex(index) && mode === 'CABLE'" :line="index" />
    <Metro v-else-if="isDefaultIndex(index) && mode === 'METRO'" :line="index" />
    <ExpressTrain v-else-if="isDefaultIndex(index) && mode === 'RER'" :line="index" />
    <Train v-else-if="isDefaultIndex(index) && mode === 'TRAIN'" :line="index" />
    <Tram v-else-if="isDefaultIndex(index) && mode === 'TRAM'" :line="index" />
    <CustomLineIndex
      v-else-if="isCustomIndex(index)"
      :shape="index.shape"
      :prefix="index.prefix"
      :index="index.index"
      :suffix="index.suffix"
      :color="index.color"
    />
  </div>
</template>
