<script setup lang="ts">
import { definePageMeta } from '#imports'
import { storeToRefs } from 'pinia'
import { computed, provide, ref } from 'vue'
import { useProject } from '~/stores/useProject.js'
import { LineContextKey } from '~/utils/symbols.js'

const PIXEL_DENSITY = 144

const { line } = storeToRefs(useProject())
const el = ref()

const pageSize = computed(() => `${(el.value?.clientWidth / PIXEL_DENSITY).toFixed(7)}in ${(el.value?.clientHeight / PIXEL_DENSITY).toFixed(7)}in !important`)
const pageHeight = computed(() => `${(el.value?.clientHeight / PIXEL_DENSITY).toFixed(7)}in`)
const pageWidth = computed(() => `${(el.value?.clientWidth / PIXEL_DENSITY).toFixed(7)}in`)

provide<LineContext>(LineContextKey, {
  color: computed(() => line.value.color ?? '#000000'),
  lineThickness: computed(() => Number.parseFloat(line.value.lineThickness ?? '1') || 1),
  lineStyle: computed(() => line.value.lineStyle ?? 'PLAIN'),
  dotsColorPolicy: computed(() => line.value.dotsColorPolicy ?? 'INHERIT'),
  frameTerminusNames: computed(() => line.value.frameTerminusNames),
})

definePageMeta({
  layout: 'reset',
})
</script>

<template>
  <div ref="el" class="inline-flex">
    <LineCanvas />
  </div>
</template>

<style lang="scss">
:root {
  --base-size: 2;
  --font-size: calc(var(--base-size) * 16px);
}

@media print {
  @page {
    size: v-bind(pageHeight) v-bind(pageWidth) !important;
  }
}
</style>
