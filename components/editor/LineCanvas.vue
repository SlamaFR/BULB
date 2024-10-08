<script setup lang="ts">
const version = useVersion()
const { line } = storeToRefs(useProject())
</script>

<template>
  <div v-bind="$attrs" class="relative content bg-white pr-10em flex gap-10 flex-row" :style="{ minHeight: `${line.mapSize}em` }">
    <div class="ml-3 flex flex-col min-w-fit">
      <div class="w-full h-8 bg-[var(--blue-ratp-paper)] mb-3" />
      <div class="w-full flex flex-row gap-3 justify-center items-center text-4em">
        <Mode :mode="line.mode" />
        <LineIndex :index="line.index" />
      </div>
    </div>
    <SectionsGroup
      v-model="line.topology"
      class="w-max-content min-h-15em p-1em pt-20"
    />

    <div class="absolute bottom-3 left-3 text-[var(--blue-ratp-paper)]">
      <div class="text-.2em flex flex-col line-height-1.75">
        <span>{{ $t('ui.map_editor.watermark') }} • bulb.slama.io</span>
        <span class="opacity-50 text-.5em">Version {{ version }}</span>
        <hr class="my-.5">
        <span class="text-.825em">Non affilié à la RATP, à Île-de-France Mobilités ou à toute autre société. Les pictogrammes ainsi que les polices utilisés demeurent la propriété intellectuelle exclusive des entités susmentionnées.</span>
        <span class="italic text-.75em">Not affiliated with RATP, Île-de-France Mobilités or any other company. The pictograms and fonts used remain the exclusive intellectual property of the aforementioned entities.</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  font-size: var(--font-size);
  font-family: 'Parisine Std', sans-serif;
  outline: 1px solid var(--p-gray-200);
  box-sizing: content-box;

  overflow: hidden;
  min-width: max-content;
}
</style>
