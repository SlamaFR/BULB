<script setup lang="ts">
import { isBuiltin, isCustom } from '~/utils/types'

const {
  index,
} = defineProps<{
  index: LineIndex | null
}>()

const { findIndexById } = useCustomLineIndices()

const transparent = computed(() => {
  if (index) {
    switch (index?.mode) {
      // case 'BUS':
      case 'BOAT':
      case 'CABLE':
      case 'TRAM':
      case 'VELO':
        return true
    }
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

const customIndex = computed(() => {
  if (isCustom(index)) {
    return findIndexById(index.$customLineIndex.id) ?? unknownCustomIndex
  }
  return unknownCustomIndex
})
</script>

<template>
  <div v-if="index !== null" :class="{ 'bg-white rounded': transparent }">
    <Bus v-if="isBuiltin(index) && index.mode === 'BUS'" :line="index.$builtinLineIndex.index" />
    <Cable v-if="isBuiltin(index) && index.mode === 'CABLE'" :line="index.$builtinLineIndex.index" />
    <Metro v-else-if="isBuiltin(index) && index.mode === 'METRO'" :line="index.$builtinLineIndex.index" />
    <ExpressTrain v-else-if="isBuiltin(index) && index.mode === 'RER'" :line="index.$builtinLineIndex.index" />
    <Train v-else-if="isBuiltin(index) && index.mode === 'TRAIN'" :line="index.$builtinLineIndex.index" />
    <Tram v-else-if="isBuiltin(index) && index.mode === 'TRAM'" :line="index.$builtinLineIndex.index" />
    <CustomLineIndex
      v-else-if="isCustom(index)"
      :shape="customIndex.shape"
      :prefix="customIndex.prefix"
      :index="customIndex.index"
      :suffix="customIndex.suffix"
      :color="customIndex.color"
    />
  </div>
</template>
