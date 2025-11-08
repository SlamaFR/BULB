<script setup lang="ts">
import { useNow } from '@vueuse/core'
import { useDateFormat } from '@vueuse/shared'
import { storeToRefs } from 'pinia'
import useVersion from '~/composables/useVersion'
import { useProject } from '~/stores/useProject'

const { applicationVersion } = useVersion()
const { line, outdated, presetBased } = storeToRefs(useProject())

const now = useNow()
const date = useDateFormat(now.value, 'DD.MM.YYYY')
</script>

<template>
  <div
    v-bind="$attrs" class="relative content bg-white flex gap-10 flex-row"
    :style="{ minHeight: `${line.mapSize}em` }"
  >
    <div class="ml-3 flex flex-col min-w-fit gap-3">
      <div class="w-full h-8 bg-[var(--blue-ratp-paper)]" />
      <div class="w-full flex flex-row gap-3 justify-center items-center text-4em">
        <Mode :mode="line.mode" />
        <LineIndex :mode="line.mode" :index="line.index" />
      </div>
      <div
        v-if="line.fullyAccessible"
        class="w-full flex flex-row gap-3 justify-center items-center bg-[var(--blue-ratp-paper-secondary)]/50 mt-.5em py-3 text-1.75em"
      >
        <Wheelchair />
      </div>
      <div class="flex-grow" />
      <div class="text-.25em flex flex-col line-height-1.75 text-[var(--blue-ratp-paper)] mb-3">
        <div class="flex flex-row gap-.5">
          <span>BULB •</span>
          <!-- Preset Based Project -->
          <span v-if="presetBased">PBP •</span>
          <!-- Project Version Unsupported / Project Version Supported -->
          <span>{{ outdated ? 'PVU' : 'PVS' }} •</span>
          <span>{{ date }} •</span>
          <span>V{{ applicationVersion }}</span>
        </div>
      </div>
    </div>
    <SectionsGroup
      v-model="line.topology"
      class="w-max-content min-h-15em p-1em pt-20 pr-10em"
    />

    <div class="mr-3 my-3 rotate-180 text-[var(--blue-ratp-paper)] text-.125em opacity-50">
      <div class="legal-notice flex flex-col line-height-1">
        <span>Non affilié à la RATP, à Île-de-France Mobilités ou à toute autre société. Les pictogrammes ainsi que les polices utilisés demeurent la propriété intellectuelle exclusive des entités susmentionnées.</span>
        <span class="italic text-.75em">Not affiliated with RATP, Île-de-France Mobilités or any other company. The pictograms and fonts used remain the exclusive intellectual property of the aforementioned entities.</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  font-size: var(--font-size);
  font-family: 'Parisine-Ptf', sans-serif;
  outline: 1px solid var(--p-gray-200);
  box-sizing: content-box;

  overflow: hidden;
  min-width: max-content;
}

.legal-notice {
  writing-mode: vertical-rl;
}
</style>
