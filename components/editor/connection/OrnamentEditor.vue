<script setup lang="ts">
const ornament = defineModel<Ornament | null>({ required: true })
const visible = defineModel<boolean>('visible')

const hasOrnament = ref(!!ornament.value)
const id = useId()

const ornamentType = computed(() => {
  if (!ornament.value) return null
  if (isAirport(ornament.value)) return 'AIRPORT'
  if (isText(ornament.value)) return 'TEXT'
  throw new Error('Unknown ornament type')
})
const type = ref<'AIRPORT' | 'TEXT' | null>(ornamentType.value)

watch([hasOrnament, type], ([enabled, _type]) => {
  if (enabled) {
    type.value = _type || 'AIRPORT'
    switch (type.value) {
      case 'AIRPORT':
        ornament.value = {
          position: 'RIGHT',
          $airportOrnament: {
            airport: null,
          },
        }
        break
      case 'TEXT':
        ornament.value = {
          position: 'RIGHT',
          $textOrnament: {
            text: '',
          },
        }
        break
    }
  } else {
    type.value = null
    ornament.value = null
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
            <div v-if="ornament && isAirport(ornament)" class="form items-center gap-x-4 gap-y-2">
              <span>Position</span>
              <Select
                v-model="ornament.position"
                class="flex-auto"
                :options="positions"
                option-value="value"
                option-label="label"
              />
              <span>Aéroport</span>
              <AirportSelect v-model="ornament.$airportOrnament.airport" />
            </div>
          </TabPanel>
          <TabPanel value="TEXT">
            <div v-if="ornament && isText(ornament)" class="form items-center gap-x-4 gap-y-2">
              <span>Position</span>
              <Select
                v-model="ornament.position"
                class="flex-auto"
                :options="positions"
                option-value="value"
                option-label="label"
              />
              <span>Texte</span>
              <Textarea v-model="ornament.$textOrnament.text" row="2" auto-resize />
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
