<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'
import { VueDraggable } from 'vue-draggable-plus'

const visible = defineModel<boolean>('visible', { required: true })
const branch = defineModel<Branch>({ required: true })

const stopName = ref('')
const stopsToAdd = ref<{ id: string, name: string }[]>([])

watch(stopName, val => stopName.value = mapName(val))

function mapName(name: string | null) {
  return name
    ?.replace(/ – | - | —/g, ' – ')
    ?.replace(/'/g, '’') ?? ''
}

function submitStop() {
  if (stopName.value) {
    stopsToAdd.value.push({ id: uuidv4(), name: stopName.value })
    stopName.value = ''
  }
}

function reset() {
  stopsToAdd.value = []
}

function addAllStops() {
  const stops = stopsToAdd.value.map(stop => ({
    id: stop.id,
    $stop: {
      name: stop.name,
      placeName: '',
      subtitle: '',
      interestPoint: false,
      preventSubtitleOverlapping: true,
      closed: false,
      terminus: false,
      connections: [],
    },
  } satisfies Stop))
  branch.value.$branch.elements.push(...stops)
  stopsToAdd.value = []
  visible.value = false
}
</script>

<template>
  <Dialog
    v-model:visible="visible"
    append-to="self"
    class="max-w-full sm:max-w-45em"
    modal
  >
    <template #header>
      <div class="flex flex-row gap-2 items-center">
        <span class="p-dialog-title">{{ $t('ui.dialogs.warp_add.header') }}</span>
        <Tag rounded severity="info" :value="$t('misc.beta')" />
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <p v-html="$t('ui.dialogs.warp_add.notice')" />
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.warp_add.stop_name') }}</label>
          <InputGroup>
            <InputText v-model="stopName" @keydown.tab.prevent="submitStop()" />
            <Button icon="i-tabler-plus" @click="submitStop()" />
          </InputGroup>
        </div>
        <div class="flex flex-col gap-1">
          <label>{{ $t('ui.dialogs.warp_add.stops_list') }}</label>
          <VueDraggable
            v-model="stopsToAdd"
            class="stops flex flex-col w-full overflow-y-auto h-15em"
            :animation="150"
            handle=".element-handle"
          >
            <div
              v-for="(item, index) in stopsToAdd" :key="item.id"
              class="stop px-2 py-1 flex flex-row items-center gap-4"
            >
              <i class="element-handle i-tabler-menu-2 text-[var(--p-gray-500)] text-.75em cursor-grab ml-2" />
              <span class="flex-grow text-truncate min-w-0">{{ item.name }}</span>
              <Button
                class="flex-shrink-0"
                icon="i-tabler-trash"
                size="small"
                severity="danger"
                rounded
                text
                @click="stopsToAdd.splice(index, 1)"
              />
            </div>

            <div v-if="stopsToAdd.length === 0" class="px-2 py-10 flex flex-row items-center justify-center h-full">
              <span class="text-[var(--p-gray-500)]">{{ $t('ui.dialogs.warp_add.stops_list_empty') }}</span>
            </div>
          </VueDraggable>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row items-center sm:mt-4 gap-1">
        <Button
          :label="$t('ui.dialogs.warp_add.reset')"
          class="w-full sm:w-auto"
          severity="secondary"
          text
          @click="reset()"
        />
        <div class="flex-grow invisible sm:visible" />
        <Button
          :label="$t('ui.dialogs.warp_add.add_all_stops')"
          class="w-full sm:w-auto"
          @click="addAllStops()"
        />
      </div>
    </div>
  </Dialog>
</template>

<style lang="scss">
kbd {
  background-color: var(--p-gray-100);
  border-radius: 0.25em;
  padding: 0.1em 0.25em;
  box-shadow: 0 0 0 1px var(--p-gray-300);
  font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  font-size: 0.9em;
  line-height: 1;
  color: var(--p-gray-700);
  margin: 0 0.125em;
  border: 1px solid var(--p-gray-300);

  .dark-mode & {
    background-color: var(--p-gray-800);
    box-shadow: 0 0 0 1px var(--p-gray-600);
    color: var(--p-gray-100);
    border: 1px solid var(--p-gray-600);
  }
}
</style>

<style scoped lang="scss">
.stops {
  border: 1px solid var(--p-inputtext-border-color);
  border-radius: .375em;

  .stop {
    border-bottom: 1px solid var(--p-inputtext-border-color);
  }
}
</style>
