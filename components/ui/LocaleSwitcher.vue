<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type Popover from 'primevue/popover'
import fr from '~/assets/svg/flags/fr.svg'
import en from '~/assets/svg/flags/en.svg'

const LOCALES = [
  { label: 'Français', value: 'fr', flag: fr },
  { label: 'English', value: 'en', flag: en },
]

const { locale: currentLocale } = useI18n()
const op = ref<InstanceType<typeof Popover> | null>(null)

function toggle(event: MouseEvent) {
  op.value?.toggle(event)
}

function selectMember(locale: string) {
  currentLocale.value = locale
  op.value?.hide()
}
</script>

<template>
  <Button text rounded icon="i-tabler-language" @click="toggle" />

  <Popover ref="op" class="min-w-10em">
    <div class="flex flex-col">
      <Button
        v-for="locale in LOCALES"
        :key="locale.value"
        pt:root:class="important-justify-start"
        :label="locale.label"
        :severity="locale.value === currentLocale ? 'primary' : 'secondary'"
        text
        @click="selectMember(locale.value)"
      >
        <template #icon>
          <img :src="locale.flag" alt="Flag" class="w-6 h-6 mr-2 ">
        </template>
      </Button>
    </div>
  </Popover>
</template>
