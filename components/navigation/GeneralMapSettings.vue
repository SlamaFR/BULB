<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { useProject } from '~/stores/useProject'
import { modeToDotsColorPolicy, modeToLineStyle, modeToLineThickness } from '~/utils/properties'

const { line } = storeToRefs(useProject())

const showPresetSelector = ref(false)

watch(() => line.value.mode, (val) => {
  if (!val) return
  line.value.lineThickness = modeToLineThickness(val)
  line.value.lineStyle = modeToLineStyle(val)
  line.value.dotsColorPolicy = modeToDotsColorPolicy(val)
})

function updateColor(newColor: string | null) {
  if (newColor !== null) line.value.color = newColor
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="flex flex-col items-stretch gap-x-5 gap-y-2">
      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">{{ $t('ui.properties.mode') }}</span>
        <ModeSelect v-model="line.mode" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <label class="text-nowrap">{{ $t('ui.properties.index') }}</label>
        <IndexSelect v-model="line.index" :mode="line.mode" @update-color="updateColor" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">{{ $t('ui.properties.color') }}</span>
        <ColorSelect v-model="line.color" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">{{ $t('ui.properties.line_thickness') }}</span>
        <LineThicknessSelect v-model="line.lineThickness" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">{{ $t('ui.properties.line_style') }}</span>
        <LineStyleSelect v-model="line.lineStyle" />
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <span class="text-nowrap">{{ $t('ui.properties.dots_color') }}</span>
        <DotsColorSelect v-model="line.dotsColorPolicy" />
      </div>

      <div class="flex flex-col items-start gap-4 py-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="line.fullyAccessible" input-id="property-fully-accessible" binary />
          <label for="property-fully-accessible">{{ $t('ui.properties.fully_accessible') }}</label>
        </div>

        <div class="flex items-center gap-2">
          <Checkbox v-model="line.frameTerminusNames" input-id="property-frame-terminus-names" binary />
          <label for="property-frame-terminus-names">{{ $t('ui.properties.frame_terminus_names') }}</label>
        </div>
      </div>

      <div class="flex flex-col gap-1 flex-auto">
        <div class="flex flex-row items-center gap-2">
          <span class="text-nowrap">{{ $t('ui.properties.size') }}</span>
          <Tag class="text-xs" severity="warn">
            {{ $t('misc.temporary') }}
          </Tag>
        </div>
        <MapSizeSelect v-model="line.mapSize" />
      </div>
    </div>

    <div class="mt-4 flex flex-row justify-end">
      <Button text severity="secondary" :label="$t('ui.properties.use_preset')" icon="i-tabler-adjustments" @click="showPresetSelector = true" />
    </div>
  </div>

  <PresetSelector v-model:visible="showPresetSelector" />
</template>
