<script setup lang="ts">
import { isSpacer, isStop } from '~/utils/types'

const { reverse } = defineProps<{
  reverse: boolean
}>()
const element = defineModel<BranchElement>({ required: true })
</script>

<template>
  <Stop v-if="isStop(element)" v-model="element" :reverse="reverse" />
  <Spacer v-else-if="isSpacer(element)" v-model="element" />
</template>
