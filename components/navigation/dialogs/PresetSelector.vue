<script setup lang="ts">
const visible = defineModel<boolean>('visible')

const { line } = storeToRefs(useProject())

function loadPreset(_mode: Mode, _index: LineIndex, _color?: string) {
  line.value.mode = _mode
  line.value.index = _index
  if (_color) line.value.color = _color
  visible.value = false
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    :header="$t('ui.dialogs.use_preset.header')"
    modal
  >
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
          <LineIndex mode="METRO" :index="metro.value" />
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
          v-for="train in TRAIN_LINES"
          :key="train.label"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('TRAIN', train.value, train.color)"
        >
          <LineIndex mode="TRAIN" :index="train.value" />
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

<style scoped>
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
