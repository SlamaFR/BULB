<script setup lang="ts">
import type Popover from 'primevue/popover'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import de from '~/assets/svg/flags/de.svg'
import en from '~/assets/svg/flags/en.svg'
import es from '~/assets/svg/flags/es.svg'
import fr from '~/assets/svg/flags/fr.svg'
import ja from '~/assets/svg/flags/ja.svg'

const LOCALES = [
  { label: 'Français', value: 'fr', flag: fr },
  { label: 'Deutsch', value: 'de', flag: de },
  { label: 'English', value: 'en', flag: en },
  { label: 'Español', value: 'es', flag: es },
  { label: '日本語', value: 'ja', flag: ja },
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
