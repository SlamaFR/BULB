<script setup lang="ts">
import { computed } from 'vue'
import { modeToShape } from '~/data/modes'
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'
import { isBuiltin, isCustom } from '~/utils/types'

const {
  index,
  mode = undefined,
} = defineProps<{
  index: LineIndex | null
  mode?: Mode | null
}>()

const { findIndexById } = useCustomLineIndices()

const unknownCustomIndex = computed(() => ({
  id: '',
  mode: 'METRO',
  shape: mode ? modeToShape(mode) : 'ROUNDED_SQUARE',
  prefix: '',
  index: '?',
  suffix: '',
  color: '#000000',
}))

const customIndex = computed(() => {
  if (isCustom(index)) {
    return findIndexById(index.$customLineIndex.id) ?? unknownCustomIndex.value
  }
  return unknownCustomIndex.value
})
</script>

<template>
  <div v-if="index !== null">
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
