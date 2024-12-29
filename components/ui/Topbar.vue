<script setup lang="ts">
import { navigateTo } from '#app'
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
          <strong class="hidden sm:block">Beautiful Urban Line Builder</strong>
          <strong class="sm:hidden visible">BULB</strong>
        </h1>
        <small class="text-gray"><span>v</span>{{ applicationVersion }}</small>
      </div>
      <div class="hidden lg:flex flex-row items-center">
        <Button text rounded label="Editeur" icon="i-tabler-pencil" @click="navigateTo('/editor')" />
        <Button text rounded label="FAQ" icon="i-tabler-help" @click="navigateTo('/faq')" />
        <Button text rounded label="Changelog" icon="i-tabler-checklist" @click="navigateTo('/changelog')" />
      </div>
    </template>

    <template #end>
      <div class="hidden lg:flex flex-row gap-4 items-center">
        <span class="hidden lg:block">{{ $t('ui.topbar.catch_phrase') }}</span>
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
      <Button
        pt:root:class="important-justify-start"
        text
        rounded
        label="Editeur"
        icon="i-tabler-pencil"
        @click="() => {
          showMenu = false
          navigateTo('/editor')
        }"
      />
      <Button
        pt:root:class="important-justify-start"
        text
        rounded
        label="FAQ"
        icon="i-tabler-help"
        @click="() => {
          showMenu = false
          navigateTo('/faq')
        }"
      />
      <Button
        pt:root:class="important-justify-start"
        text
        rounded
        label="Changelog"
        icon="i-tabler-checklist"
        @click="() => {
          showMenu = false
          navigateTo('/changelog')
        }"
      />
      <Divider />
      <div class="flex flex-row justify-between px-2">
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
