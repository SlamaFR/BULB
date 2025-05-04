<script setup lang="ts">
import { definePageMeta } from '#imports'
import { useElementSize } from '@vueuse/core'
import * as htmlToImage from 'html-to-image'
import { storeToRefs } from 'pinia'
import { computed, onMounted, provide, ref } from 'vue'
import { useProject } from '~/stores/useProject.js'
import { LineContextKey } from '~/utils/symbols.js'

const PIXEL_DENSITY = 144
const CHARSET_DECLARATION = encodeURIComponent('<?xml version="1.0" encoding="UTF-8" standalone="no"?>')

const { line } = storeToRefs(useProject())
const el = ref()

const { width, height } = useElementSize(el)
const pageWidth = computed(() => `${((width.value + 1) / PIXEL_DENSITY).toFixed(7)}in`)
const pageHeight = computed(() => `${((height.value + 1) / PIXEL_DENSITY).toFixed(7)}in`)

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

function generateSvg() {
  const mapContainer = document.getElementById('canvas')!

  htmlToImage.toSvg(mapContainer, {
    canvasWidth: mapContainer.clientWidth,
    canvasHeight: mapContainer.clientHeight,
  }).then((dataUrl) => {
    const [header, svg] = dataUrl.split(',')
    return `${header},${CHARSET_DECLARATION}${svg}`
  }).then((svg) => {
    const a = document.createElement('img')
    a.src = svg
    document.body.appendChild(a)
  }).then(() => {
    document.getElementById('canvas-holder')!.remove()
  }).then(() => {
    const styles = `
      @media print {
      @page {
        size: ${pageWidth.value} ${pageHeight.value} !important;
      }
    }`
    const stylesheet = document.createElement('style')
    stylesheet.textContent = styles
    document.head.appendChild(stylesheet)
  }).then(() => {
    setTimeout(() => {
      window.print()
      setTimeout(() => window.close(), 100)
    }, 1000)
  })
}

onMounted(() => {
  setTimeout(generateSvg, 50)
})
</script>

<template>
  <div id="canvas-holder" class="absolute top-0 inline-block opacity-0">
    <LineCanvas id="canvas" ref="el" />
  </div>
</template>

<style lang="scss">
:root {
  --base-size: 2;
  --font-size: calc(var(--base-size) * 16px);
}

#canvas * {
  pointer-events: none;
  touch-action: none;

  -webkit-print-color-adjust: exact !important; /* Chrome, Safari 6 – 15.3, Edge */
  color-adjust: exact !important; /* Firefox 48 – 96 */
  print-color-adjust: exact !important; /* Firefox 97+, Safari 15.4+ */
}

.export-hide {
  display: none !important;
}

html, body, #__nuxt {
  min-height: 0;
}

@page {
  margin: 0 !important;
}
</style>
