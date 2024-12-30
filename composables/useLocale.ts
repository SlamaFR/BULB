import { usePrimeVue } from '#build/imports'
import { syncRef, useLocalStorage, usePreferredLanguages } from '@vueuse/core'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { de } from '~/assets/locales/de.json'
import { en } from '~/assets/locales/en.json'
import { eo } from '~/assets/locales/eo.json'
import { es } from '~/assets/locales/es.json'
import { fr } from '~/assets/locales/fr.json'
import { it } from '~/assets/locales/it.json'
import { ja } from '~/assets/locales/ja.json'

export default function useLocale(fallback = 'en') {
  const preferredLanguages = usePreferredLanguages()
  const { config } = usePrimeVue()
  const { locale: selectedLocale, availableLocales } = useI18n()

  const locale = preferredLanguages.value.find(language => availableLocales.includes(language))
    ?? preferredLanguages.value.find(language => availableLocales.includes(language.slice(0, 2)))?.slice(0, 2)
    ?? fallback

  watch(selectedLocale, (val) => {
    switch (val) {
      case 'de':
        config.locale = de
        break
      case 'fr':
        config.locale = fr
        break
      case 'ja':
        config.locale = ja
        break
      case 'es':
        config.locale = es
        break
      case 'eo':
        config.locale = eo
        break
      case 'it':
        config.locale = it
        break
      case 'en':
      default:
        config.locale = en
        break
    }
  }, { immediate: true })

  const localeSetting = useLocalStorage('locale', locale)
  syncRef(localeSetting, selectedLocale)
}
