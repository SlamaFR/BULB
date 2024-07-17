<script setup lang="ts">
const visible = defineModel<boolean>('visible')

const { mode, index, color } = storeToRefs(useLine())

function loadPreset(_mode: Mode, _index: string, _color: string) {
  mode.value = _mode
  index.value = _index
  color.value = _color
  visible.value = false
}
</script>

<template>
  <Dialog v-model:visible="visible" modal header="Utiliser un préréglage">
    <Fieldset legend="Métro">
      <div class="btn-group">
        <Button
          v-for="metro in METRO_LINES"
          :key="metro"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('METRO', metro.value, metro.color)"
        >
          <Metro :line="metro.value" />
        </Button>
      </div>
    </Fieldset>
    <Fieldset legend="RER">
      <div class="btn-group">
        <Button
          v-for="rer in RER_LINES"
          :key="rer"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('RER', rer.value, rer.color)"
        >
          <ExpressTrain :line="rer.value" />
        </Button>
      </div>
    </Fieldset>
    <Fieldset legend="Transilien">
      <div class="btn-group">
        <Button
          v-for="train in TRAIN_LINES"
          :key="train"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('TRAIN', train.value, train.color)"
        >
          <Train :line="train.value" />
        </Button>
      </div>
    </Fieldset>
    <Fieldset legend="Tram">
      <div class="btn-group">
        <Button
          v-for="tram in TRAM_LINES"
          :key="tram"
          text
          severity="secondary"
          :pt="{ root: { class: 'important-p-1 important-text-5xl' } }"
          @click="loadPreset('TRAM', tram.value, tram.color)"
        >
          <div class="bg-white rounded">
            <Tram :line="tram.value" />
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
</style>
