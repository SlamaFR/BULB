<script setup lang="ts">
const {
  index,
} = defineProps<{
  index: LineIndex | null
}>()

const { findIndexById } = useCustomLineIndices()

const transparent = computed(() => {
  switch (index?.mode) {
    case 'BUS':
    case 'BOAT':
    case 'CABLE':
    case 'TRAM':
    case 'VELO':
      return true
  }
  return false
})

const unknownCustomIndex: CustomLineIndexDescription = {
  id: '',
  mode: 'METRO',
  shape: 'SQUARE',
  prefix: '',
  index: '?',
  suffix: '',
  color: '#000000',
}

function isBuiltin(index: LineIndex | null): index is BuiltinLineIndex {
  if (index === null) return false
  return '$builtinLineIndex' in index
}
function isCustom(index: LineIndex | null): index is CustomLineIndex {
  if (index === null) return false
  return '$customLineIndex' in index
}

const customIndex = computed(() => {
  if (isCustom(index)) {
    return findIndexById(index.$customLineIndex.id) ?? unknownCustomIndex
  }
  return unknownCustomIndex
})
</script>

<template>
  <div v-if="index !== null" class="aspect-square" :class="{ 'bg-white rounded': transparent }">
    <Cable v-if="isBuiltin(index) && index.$builtinLineIndex.mode === 'CABLE'" :line="index.$builtinLineIndex.index" />
    <Metro v-else-if="isBuiltin(index) && index.$builtinLineIndex.mode === 'METRO'" :line="index.$builtinLineIndex.index" />
    <ExpressTrain v-else-if="isBuiltin(index) && index.$builtinLineIndex.mode === 'RER'" :line="index.$builtinLineIndex.index" />
    <Train v-else-if="isBuiltin(index) && index.$builtinLineIndex.mode === 'TRAIN'" :line="index.$builtinLineIndex.index" />
    <Tram v-else-if="isBuiltin(index) && index.$builtinLineIndex.mode === 'TRAM'" :line="index.$builtinLineIndex.index" />
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
