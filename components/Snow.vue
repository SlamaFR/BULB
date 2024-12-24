<script setup lang="ts">
import { tryOnMounted } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useSnow } from '~/stores/useSnow'

const snow = useSnow()
const showDialog = ref(false)

const { isWinter, checkYearlyMessage } = snow
const { snowEnabled } = storeToRefs(snow)

tryOnMounted(() => {
  if (isWinter) {
    if (checkYearlyMessage()) {
      showDialog.value = true
      snowEnabled.value = true
    }
  }
})

function toggleAndClose() {
  showDialog.value = false
  snowEnabled.value = false
}
</script>

<template>
  <Dialog
    v-model:visible="showDialog"
    pt:root:class="md:w-40em"
    :header="$t('ui.dialogs.end_of_year_celebrations.header')"
    modal
    :draggable="false"
  >
    <p>{{ $t('ui.dialogs.end_of_year_celebrations.summary') }}</p>

    <template #footer>
      <Button
        :label="$t('ui.dialogs.end_of_year_celebrations.disable_and_close')" severity="secondary" text
        @click="toggleAndClose()"
      />
      <Button :label="$t('ui.dialogs.end_of_year_celebrations.close')" @click="showDialog = false" />
    </template>
  </Dialog>

  <Teleport to="body">
    <Transition name="fade">
      <snow-effect
        v-show="snowEnabled"
        color="white"
        flakes="100"
        speed="1"
      />
    </Transition>
  </Teleport>
</template>

<style lang="scss">
#snow {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  height: 100lvh;
  width: 100lvw;
  pointer-events: none;
  touch-action: none;
}

.snowflake {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #eee;
  border-radius: 50%;
  filter: drop-shadow(0 0 10px #ddd);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
