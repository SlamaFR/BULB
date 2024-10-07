<script setup lang="ts">
import { isSpacer, isStop } from '~/utils/types'

const element = defineModel<BranchElement>({ required: true })
</script>

<template>
  <Stop v-if="isStop(element)" v-model="element" />
  <Spacer v-else-if="isSpacer(element)" v-model="element" />
</template>
