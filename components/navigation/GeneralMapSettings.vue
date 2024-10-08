<script setup lang="ts">
const { mode, index, color, mapSize } = storeToRefs(useProject())

const showPresetSelector = ref(false)

function updateColor(newColor: string | null) {
  if (newColor !== null) color.value = newColor
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col items-stretch gap-x-5 gap-y-2">
      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">{{ $t('ui.properties.mode') }}</span>
        <ModeSelect v-model="mode" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <label class="text-nowrap">{{ $t('ui.properties.index') }}</label>
        <IndexSelect v-model="index" :mode="mode" @update-color="updateColor" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">{{ $t('ui.properties.color') }}</span>
        <ColorSelect v-model="color" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <div class="flex flex-row items-center gap-2">
          <span class="text-nowrap">{{ $t('ui.properties.size') }}</span>
          <Tag class="text-xs" severity="warn">
            {{ $t('misc.temporary') }}
          </Tag>
        </div>
        <MapSizeSelect v-model="mapSize" />
      </div>
    </div>

    <div class="mt-4 flex flex-row justify-end">
      <Button text severity="secondary" :label="$t('ui.properties.use_preset')" icon="i-tabler-adjustments" @click="showPresetSelector = true" />
    </div>
  </div>

  <PresetSelector v-model:visible="showPresetSelector" />
</template>
