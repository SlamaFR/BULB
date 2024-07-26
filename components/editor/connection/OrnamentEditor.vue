<script setup lang="ts">
const ornament = defineModel<Ornament | null>({ required: true })
const visible = defineModel<boolean>('visible')

const hasOrnament = ref(!!ornament.value)
const id = useId()

const type = ref<OrnamentType | null>(getOrnamentType(ornament.value))

watch(hasOrnament, (val) => {
  if (val) {
    type.value = 'AIRPORT'
    ornament.value = {
      airport: 'GENERIC',
      position: 'RIGHT',
    }
  } else {
    type.value = null
    ornament.value = null
  }
})
watch(type, (val) => {
  if (val === 'AIRPORT') {
    ornament.value = {
      airport: 'GENERIC',
      position: 'RIGHT',
    }
  } else if (val === 'TEXT') {
    ornament.value = {
      text: '',
      position: 'RIGHT',
    }
  }
})

const positions = [
  { value: 'BOTTOM', label: 'En dessous' },
  { value: 'RIGHT', label: 'À droite' },
]
</script>

<template>
  <Dialog
    v-model:visible="visible"
    header="Décoration du pictogramme"
    modal
    :pt="{
      root: { class: 'min-w-25em' },
      header: { class: 'gap-6' },
    }"
  >
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-4">
        <Checkbox v-model="hasOrnament" :input-id="id" binary />
        <label :for="id">Afficher une décoration</label>
      </div>

      <Tabs v-model:value="type">
        <TabList>
          <Tab value="AIRPORT" :disabled="!hasOrnament">
            Aéroport
          </Tab>
          <Tab value="TEXT" :disabled="!hasOrnament">
            Texte
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="">
            <span class="opacity-50">Aucune décoration disponible</span>
          </TabPanel>
          <TabPanel value="AIRPORT">
            <div v-if="ornament && isAirportOrnament(ornament)" class="form items-center gap-x-4 gap-y-2">
              <span>Position</span>
              <Select
                v-model="ornament.position"
                class="flex-auto"
                :options="positions"
                option-value="value"
                option-label="label"
              />
              <span>Aéroport</span>
              <AirportSelect v-model="ornament.airport" />
            </div>
          </TabPanel>
          <TabPanel value="TEXT">
            <div v-if="ornament && isTextOrnament(ornament)" class="form items-center gap-x-4 gap-y-2">
              <span>Position</span>
              <Select
                v-model="ornament.position"
                class="flex-auto"
                :options="positions"
                option-value="value"
                option-label="label"
              />
              <span>Texte</span>
              <Textarea v-model="ornament.text" row="2" auto-resize />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  </Dialog>
</template>

<style scoped>
.form {
  display: grid;
  grid-template-columns: auto 1fr;
}
</style>
