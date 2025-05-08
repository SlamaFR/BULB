<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import useVersion from '~/composables/useVersion'
import { useSnow } from '~/stores/useSnow'

const { applicationVersion } = useVersion()
const { snowEnabled, isWinter } = storeToRefs(useSnow())

const showMenu = ref(false)

function toggleSnow() {
  snowEnabled.value = !snowEnabled.value
}
</script>

<template>
  <Menubar>
    <template #start>
      <div class="flex flex-row gap-2 items-start mr-4">
        <h1 class="text-3xl">
          <strong class="text-nowrap hidden xl:block">Beautiful Urban Line Builder</strong>
          <strong class="text-nowrap xl:hidden visible">BULB</strong>
        </h1>
        <small class="text-gray text-nowrap"><span>v</span>{{ applicationVersion }}</small>
      </div>
      <div class="hidden lg:flex flex-row items-center gap-2">
        <TopbarPageButton
          :label="$t('ui.topbar.editor')"
          icon="i-tabler-map"
          to="/editor"
        />
        <TopbarPageButton
          :label="$t('ui.topbar.changelog')"
          icon="i-tabler-checklist"
          to="/changelog"
        />
        <TopbarPageButton
          :label="$t('ui.topbar.faq')"
          icon="i-tabler-help"
          to="/faq"
        />
      </div>
    </template>

    <template #end>
      <div class="hidden lg:flex flex-row gap-4 items-center">
        <div class="hidden lg:block truncate">
          {{ $t('ui.topbar.catch_phrase') }}
        </div>
        <div class="flex flex-row gap-1 items-center">
          <ThemeSwitcher />
          <LocaleSwitcher />
          <SocialsMenu />
          <Divider v-if="isWinter" pt:root:class="important-mx-2" layout="vertical" />
          <Button
            v-if="isWinter" text rounded :icon="snowEnabled ? 'i-tabler-snowflake' : 'i-tabler-snowflake-off'"
            @click="toggleSnow()"
          />
        </div>
      </div>
      <Button
        pt:root:class="lg:important-hidden"
        icon="i-tabler-menu-2"
        severity="secondary"
        text
        rounded
        @click="showMenu = true"
      />
    </template>
  </Menubar>

  <Dialog
    v-model:visible="showMenu"
    header="Menu"
    pt:root:class="w-full"
    modal
  >
    <!-- Menu to show on mobile screen size -->
    <div class="flex flex-col gap-2">
      <TopbarPageButton
        :label="$t('ui.topbar.editor')"
        icon="i-tabler-map"
        to="/editor"
        size="large"
        @click="showMenu = false"
      />
      <TopbarPageButton
        :label="$t('ui.topbar.changelog')"
        icon="i-tabler-checklist"
        to="/changelog"
        size="large"
        @click="showMenu = false"
      />
      <TopbarPageButton
        :label="$t('ui.topbar.faq')"
        icon="i-tabler-help"
        to="/faq"
        size="large"
        @click="showMenu = false"
      />
      <Divider />
      <div class="flex flex-row justify-evenly px-2">
        <ThemeSwitcher />
        <LocaleSwitcher />
        <SocialsMenu />
        <Button
          v-if="isWinter" text rounded :icon="snowEnabled ? 'i-tabler-snowflake' : 'i-tabler-snowflake-off'"
          @click="toggleSnow()"
        />
      </div>
    </div>
  </dialog>
</template>
