<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { isAirport, isAirportName, isText } from '~/utils/types'

type OrnamentType = 'AIRPORT' | 'AIRPORT_NAME' | 'TEXT'

const { permittedTypes = ['AIRPORT', 'TEXT'] } = defineProps<{
  permittedTypes?: OrnamentType[]
}>()
const ornament = defineModel<Ornament | null>({ required: true })
const visible = defineModel<boolean>('visible')

const hasOrnament = ref(!!ornament.value)
const id = useId()

const ornamentType = computed(() => {
  if (!ornament.value) return ''
  if (isAirport(ornament.value)) return 'AIRPORT'
  if (isAirportName(ornament.value)) return 'AIRPORT_NAME'
  if (isText(ornament.value)) return 'TEXT'
  throw new Error('Unknown ornament type')
})
const type = ref<OrnamentType | ''>(ornamentType.value)

watch([hasOrnament, type], ([enabled, _type]) => {
  if (enabled) {
    type.value = (_type || permittedTypes[0]) ?? ''
    switch (type.value) {
      case 'AIRPORT':
        ornament.value = {
          id: uuidv4(),
          position: 'RIGHT',
          $airportOrnament: {
            airport: null,
          },
        }
        break
      case 'AIRPORT_NAME':
        ornament.value = {
          id: uuidv4(),
          position: 'RIGHT',
          $airportNameOrnament: {
            name: '',
          },
        }
        break
      case 'TEXT':
        ornament.value = {
          id: uuidv4(),
          position: 'RIGHT',
          $textOrnament: {
            text: '',
          },
        }
        break
    }
  } else {
    type.value = ''
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
          <Tab v-if="permittedTypes.includes('AIRPORT')" value="AIRPORT" :disabled="!hasOrnament">
            Aéroport
          </Tab>
          <Tab v-if="permittedTypes.includes('AIRPORT_NAME')" value="AIRPORT_NAME" :disabled="!hasOrnament">
            Nom d’aéroport
          </Tab>
          <Tab v-if="permittedTypes.includes('TEXT')" value="TEXT" :disabled="!hasOrnament">
            Texte
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel value="">
            <span class="opacity-50">Aucune décoration disponible</span>
          </TabPanel>
          <TabPanel v-if="permittedTypes.includes('AIRPORT')" value="AIRPORT">
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
          <TabPanel v-if="permittedTypes.includes('AIRPORT_NAME')" value="AIRPORT_NAME">
            <div v-if="ornament && isAirportName(ornament)" class="form items-center gap-x-4 gap-y-2">
              <span>Nom</span>
              <InputText v-model="ornament.$airportNameOrnament.name" />
            </div>
          </TabPanel>
          <TabPanel v-if="permittedTypes.includes('TEXT')" value="TEXT">
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
