<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useConfirm } from 'primevue/useconfirm'
import { useI18n } from 'vue-i18n'
import useVersion from '~/composables/useVersion'
import { METRO_LINES, RER_LINES, TRAM_LINES, TRANSILIEN_LINES } from '~/data/lines'
import { getPreset } from '~/data/presets'
import { useProject } from '~/stores/useProject'
import { modeToDotsColorPolicy, modeToLineStyle, modeToLineThickness } from '~/utils/properties'

const FULL_TEMPLATE = {
  METRO: ['1', '2', '3', '3bis', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
}

const visible = defineModel<boolean>('visible')

const { line, version } = storeToRefs(useProject())
const { applicationVersion } = useVersion()
const confirm = useConfirm()
const { t } = useI18n()

function loadFullPreset(preset: Project) {
  confirm.require({
    header: t('ui.dialogs.use_full_preset.header'),
    message: t('ui.dialogs.use_full_preset.message'),
    acceptProps: {
      label: t('ui.dialogs.use_full_preset.accept'),
      severity: 'warn',
    },
    rejectProps: {
      label: t('ui.dialogs.use_full_preset.reject'),
      severity: 'secondary',
      text: true,
    },
    accept: () => {
      version.value = applicationVersion
      line.value.mode = preset.line.mode
      line.value.index = preset.line.index
      line.value.color = preset.line.color
      line.value.lineThickness = preset.line.lineThickness
      line.value.lineStyle = preset.line.lineStyle
      line.value.dotsColorPolicy = preset.line.dotsColorPolicy
      line.value.mapSize = preset.line.mapSize
      line.value.topology = preset.line.topology
      visible.value = false
    },
  })
}

function loadPreset(_mode: Mode, _index: LineIndex, _color?: string) {
  const preset = getPreset(_mode, _index)

  if (preset !== null) {
    loadFullPreset(preset)
  } else {
    line.value.mode = _mode
    line.value.index = _index
    if (_color) line.value.color = _color
    line.value.lineThickness = modeToLineThickness(_mode)
    line.value.lineStyle = modeToLineStyle(_mode)
    line.value.dotsColorPolicy = modeToDotsColorPolicy(_mode)
    visible.value = false
  }
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.use_preset.header')"
    modal
  >
    <Message class="my-1 max-w-42em">
      {{ $t('ui.dialogs.use_preset.full_presets_notice') }}
    </Message>
    <Fieldset :legend="$t('data.mode.metro')">
      <div class="btn-group">
        <Button
          v-for="metro in METRO_LINES"
          :key="metro.label"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('METRO', metro.value, metro.color)"
        >
          <div class="relative">
            <LineIndex mode="METRO" :index="metro.value" />
            <i
              v-if="FULL_TEMPLATE.METRO.includes(metro.value.$builtinLineIndex.index)"
              class="absolute bottom-0 right-0 badge"
            />
          </div>
        </Button>
      </div>
    </Fieldset>
    <Fieldset :legend="$t('data.mode.rer')">
      <div class="btn-group">
        <Button
          v-for="rer in RER_LINES"
          :key="rer.label"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('RER', rer.value, rer.color)"
        >
          <LineIndex mode="RER" :index="rer.value" />
        </Button>
      </div>
    </Fieldset>
    <Fieldset :legend="$t('data.mode.transilien')">
      <div class="btn-group">
        <Button
          v-for="transilien in TRANSILIEN_LINES"
          :key="transilien.label"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('TRAIN', transilien.value, transilien.color)"
        >
          <LineIndex mode="TRAIN" :index="transilien.value" />
        </Button>
      </div>
    </Fieldset>
    <Fieldset :legend="$t('data.mode.tram')">
      <div class="btn-group">
        <Button
          v-for="tram in TRAM_LINES"
          :key="tram.label"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('TRAM', tram.value, tram.color)"
        >
          <div class="bg-white rounded">
            <LineIndex mode="TRAM" :index="tram.value" />
          </div>
        </Button>
      </div>
    </Fieldset>
  </Dialog>
</template>

<style scoped lang="scss">
.badge {
  font-size: .3em;
  width: 1em;
  height: 1em;
  background: var(--p-text-color);
  outline: .35rem solid var(--p-dialog-background);
  border-radius: 50%;
  transition: outline-color var(--p-button-transition-duration);

  .p-button:hover & {
    outline-color: var(--p-button-text-secondary-hover-background);
  }
}

.btn-group {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: .125em;
  font-size: 3em;
}

@media (max-width: 640px) {
  .btn-group {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 1024px) and (min-width: 641px) {
  .btn-group {
    grid-template-columns: repeat(8, 1fr);
  }
}
</style>
