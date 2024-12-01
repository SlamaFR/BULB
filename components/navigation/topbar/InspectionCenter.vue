<script setup lang="ts">
import type Popover from 'primevue/popover'
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useCustomLineIndices } from '~/stores/useCustomLineIndices'
import { useProject } from '~/stores/useProject'
import { findIllegalPedestrianConnections, findInvalidCustomIndices, findUntitledStops } from '~/utils/inspections'

const op = ref<InstanceType<typeof Popover> | null>(null)
const { indices } = useCustomLineIndices()
const { line } = useProject()
const { locale } = useI18n()

const lastUpdate = ref<Date>(new Date())
const noSelectedMode = ref(false)
const noSelectedLineIndex = ref(false)
const noSelectedColor = ref(false)
const invalidIndices = ref<CustomLineIndexDescription[]>([])
const illegalPedestrianConnections = ref<Connection[]>([])
const untitledStops = ref<Stop[]>([])

function check() {
  noSelectedMode.value = line.mode === null
  noSelectedLineIndex.value = line.index === null
  noSelectedColor.value = line.color === null
  invalidIndices.value = findInvalidCustomIndices(indices)
  illegalPedestrianConnections.value = findIllegalPedestrianConnections(line.topology)
  untitledStops.value = findUntitledStops(line.topology)
  lastUpdate.value = new Date()
}

const noIssues = computed(() => {
  return !noSelectedMode.value
    && !noSelectedLineIndex.value
    && !noSelectedColor.value
    && invalidIndices.value.length === 0
    && illegalPedestrianConnections.value.length === 0
})
const buttonSeverity = computed(() => noIssues.value ? 'success' : 'danger')
const buttonIcon = computed(() => noIssues.value ? 'i-tabler:zoom-check-filled' : 'i-tabler:zoom-exclamation-filled')

function toggle(event: MouseEvent) {
  op.value?.toggle(event)
}

onMounted(() => check())
</script>

<template>
  <Button
    :icon="buttonIcon"
    :severity="buttonSeverity"
    rounded
    @click="toggle"
  />

  <Popover ref="op" class="w-30em">
    <div class="flex flex-col">
      <div class="flex flex-row gap-2 items-center">
        <p class="text-2xl text-bold">
          {{ $t('ui.topbar.inspection_center.header') }}
        </p>
        <Tag rounded severity="info" :value="$t('misc.beta')" />
      </div>

      <Divider pt:root:class="important-my-3" />

      <div v-if="noIssues" class="flex flex-col items-center justify-center p-5">
        <i class="i-tabler:sparkles text-5xl mb-3" />
        <p class="text-xl">
          {{ $t('ui.topbar.inspection_center.no_issues_title') }}
        </p>
        <p class="opacity-50">
          {{ $t('ui.topbar.inspection_center.no_issues_message') }}
        </p>
      </div>
      <div v-else class="flex flex-col gap-2">
        <Message v-if="noSelectedMode || noSelectedLineIndex || noSelectedColor" severity="error">
          <template #icon>
            <i class="text-xl i-tabler-settings" />
          </template>
          <span class="text-lg font-bold">{{ $t('ui.topbar.inspection_center.project_properties') }}</span>
          <ul class="list-disc">
            <li v-if="noSelectedMode" class="ml-6">
              {{ $t('ui.topbar.inspection_center.no_mode_selected') }}
            </li>
            <li v-if="noSelectedLineIndex" class="ml-6">
              {{ $t('ui.topbar.inspection_center.no_line_index_selected') }}
            </li>
            <li v-if="noSelectedColor" class="ml-6">
              {{ $t('ui.topbar.inspection_center.no_color_selected') }}
            </li>
          </ul>
        </Message>

        <Message v-if="illegalPedestrianConnections.length > 0" severity="error">
          <template #icon>
            <i class="text-xl i-tabler-walk" />
          </template>
          {{ $t('ui.topbar.inspection_center.illegal_pedestrian_connections', illegalPedestrianConnections.length) }}
        </Message>

        <Message v-if="untitledStops.length > 0" severity="error">
          <template #icon>
            <i class="text-xl i-tabler-label-off" />
          </template>
          {{ $t('ui.topbar.inspection_center.untitled_stops', untitledStops.length) }}
        </Message>

        <Message v-if="invalidIndices.length > 0" severity="warn">
          <template #icon>
            <i class="text-xl i-tabler-edit-circle" />
          </template>
          {{ $t('ui.topbar.inspection_center.invalid_custom_indices', invalidIndices.length) }}
        </Message>
      </div>

      <Divider pt:root:class="important-my-3" />

      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-col">
          <span class="opacity-50 text-sm">{{ $t('ui.topbar.inspection_center.last_update') }}</span>
          <span>{{ Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'medium' }).format(lastUpdate) }}</span>
        </div>
        <Button
          severity="secondary"
          icon="i-tabler-refresh"
          rounded
          text
          @click="check()"
        />
      </div>
    </div>
  </Popover>
</template>
