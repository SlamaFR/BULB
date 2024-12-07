<script setup lang="ts">
import { isMacOS } from '@basitcodeenv/vue3-device-detect'
import { useMagicKeys } from '@vueuse/core'
import { v4 as uuidv4 } from 'uuid'
import { computed, nextTick, ref, watch } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import { cleanName } from '~/utils/text'

const visible = defineModel<boolean>('visible', { required: true })
const branch = defineModel<Branch>({ required: true })

const addDirectionOptions = [
  { label: 'ui.dialogs.warp_add.direction.left', value: true },
  { label: 'ui.dialogs.warp_add.direction.right', value: false },
]
const addPositioningOptions = [
  { label: 'ui.dialogs.warp_add.positioning.left', value: true },
  { label: 'ui.dialogs.warp_add.positioning.right', value: false },
]

const { meta_enter, ctrl_enter } = useMagicKeys()

const stopName = ref('')
const placeName = ref('')
const subtitle = ref('')
const reverseOrder = ref(false)
const insertLeft = ref(false)
const stopsToAdd = ref<{
  id: string
  name: string
  placeName: string | null
  subtitle: string | null
  terminus: boolean
}[]>([])
const stopsList = ref<HTMLDivElement | null>(null)
const nameInput = ref<any | null>(null)
const metakey = computed(() => isMacOS ? '⌘' : 'Ctrl')

watch(stopName, val => stopName.value = cleanName(val))
watch(placeName, val => placeName.value = cleanName(val))
watch(subtitle, val => subtitle.value = cleanName(val))
watch([meta_enter, ctrl_enter], () => addAllStops())
watch(visible, (val) => {
  if (!val) reset()
})

function submitStop() {
  if (stopName.value) {
    stopsToAdd.value.push({
      id: uuidv4(),
      name: stopName.value,
      placeName: placeName.value,
      subtitle: subtitle.value,
      terminus: false,
    })
    stopName.value = ''
    placeName.value = ''
    subtitle.value = ''
    nameInput.value?.$el.focus()
    nextTick(() => {
      if (stopsList.value) stopsList.value.scrollTop = stopsList.value.scrollHeight
    })
  }
}

function reset() {
  stopName.value = ''
  placeName.value = ''
  subtitle.value = ''
  reverseOrder.value = false
  insertLeft.value = false
  stopsToAdd.value = []
  nameInput.value?.$el.focus()
}

function addAllStops() {
  const stops = stopsToAdd.value.map(stop => ({
    id: stop.id,
    $stop: {
      name: stop.name,
      placeName: stop.placeName,
      subtitle: stop.subtitle,
      accessible: 'undefined',
      reverse: false,
      interestPoint: false,
      preventSubtitleOverlapping: true,
      closed: false,
      terminus: stop.terminus,
      connections: [],
    },
  } satisfies Stop))

  if (reverseOrder.value) stops.reverse()
  if (insertLeft.value) {
    branch.value.$branch.elements.unshift(...stops)
  } else {
    branch.value.$branch.elements.push(...stops)
  }

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
        <New />
      </div>
    </template>
    <div class="flex flex-col gap-4">
      <i18n-t keypath="ui.dialogs.warp_add.notice" tag="p">
        <template #nextShortcut>
          <kbd>Enter</kbd>
        </template>
        <template #submitShortcut>
          <kbd>{{ metakey }}</kbd>&nbsp;+&nbsp;<kbd>Enter</kbd>
        </template>
      </i18n-t>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-1">
            <label>{{ $t('ui.dialogs.warp_add.stop_name') }}</label>
            <InputGroup>
              <Textarea
                ref="nameInput"
                v-model="stopName"
                pt:root:class="w-full important-h-auto"
                :spellcheck="false"
                auto-resize
                autofocus
                @keydown.enter="(e: KeyboardEvent) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    submitStop()
                  }
                }"
              />
              <Button
                severity="secondary"
                icon="i-tabler-plus"
                tabindex="-1"
                @click="submitStop()"
              />
            </InputGroup>
            <i18n-t keypath="ui.dialogs.warp_add.linebreak" tag="span" class="text-xs opacity-50">
              <template #shortcut>
                <kbd>Shift</kbd>&nbsp;+&nbsp;<kbd>Enter</kbd>
              </template>
            </i18n-t>
          </div>

          <div class="flex flex-col gap-1">
            <label>{{ $t('ui.dialogs.warp_add.city_name') }}</label>
            <InputText
              v-model="placeName"
              :spellcheck="false"
              @keydown.enter="(e: KeyboardEvent) => {
                e.preventDefault()
                submitStop()
              }"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label>{{ $t('ui.dialogs.warp_add.subtitle') }}</label>
            <InputText
              v-model="subtitle"
              :spellcheck="false"
              @keydown.enter="(e: KeyboardEvent) => {
                e.preventDefault()
                submitStop()
              }"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label>{{ $t('ui.dialogs.warp_add.direction.title') }}</label>
            <SelectButton
              v-model="reverseOrder"
              pt:pc-toggle-button:root:class="flex-grow"
              :options="addDirectionOptions"
              :option-label="option => $t(option.label)"
              option-value="value"
              :allow-empty="false"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label>{{ $t('ui.dialogs.warp_add.positioning.title') }}</label>
            <SelectButton
              v-model="insertLeft"
              pt:pc-toggle-button:root:class="flex-grow"
              :options="addPositioningOptions"
              :option-label="option => $t(option.label)"
              option-value="value"
              :allow-empty="false"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex flex-col gap-1 flex-grow">
            <label>{{ $t('ui.dialogs.warp_add.stops_list') }}</label>
            <div ref="stopsList" class="stops overflow-y-auto flex-grow max-h-25em">
              <VueDraggable
                v-if="stopsToAdd.length > 0"
                v-model="stopsToAdd"
                class="flex flex-col"
                :animation="150"
                handle=".element-handle"
              >
                <div
                  v-for="(item, index) in stopsToAdd" :key="item.id"
                  class="stop px-2 py-1 flex flex-row items-center gap-4"
                >
                  <i class="element-handle i-tabler-menu-2 text-[var(--p-gray-500)] text-.75em cursor-grab ml-2" />
                  <div class="flex flex-grow flex-col text-truncate">
                    <span>{{ item.name }}</span>
                    <div class="flex flex-row items-center gap-1 text-truncate text-xs opacity-50">
                      <span v-if="item.placeName">{{ item.placeName }}</span>
                      <span v-if="item.placeName && item.subtitle">•</span>
                      <span v-if="item.subtitle">{{ item.subtitle }}</span>
                    </div>
                  </div>
                  <div class="flex flex-row items-center">
                    <Button
                      v-tooltip.left="$t('ui.dialogs.stop_properties.terminus')"
                      class="flex-shrink-0"
                      :icon="item.terminus ? 'i-tabler-directions-filled' : 'i-tabler-directions'"
                      size="small"
                      severity="secondary"
                      rounded
                      text
                      @click="stopsToAdd[index].terminus = !stopsToAdd[index].terminus"
                    />
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
                </div>
              </VueDraggable>

              <div v-else class="px-2 py-10 flex flex-row items-center justify-center h-full">
                <span class="text-[var(--p-gray-500)]">{{ $t('ui.dialogs.warp_add.stops_list_empty') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex flex-grow flex-col sm:flex-row items-center gap-2">
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
    </template>
  </Dialog>
</template>

<style scoped lang="scss">
.stops {
  background: var(--p-textarea-background);
  border: 1px solid var(--p-inputtext-border-color);
  border-radius: .375em;

  .stop {
    background: var(--p-dialog-background);
    border-bottom: 1px solid var(--p-inputtext-border-color);
  }
}
</style>
