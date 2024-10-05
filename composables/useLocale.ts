import { useI18n } from 'vue-i18n'
import { en } from '~/assets/locales/en.json'
import { fr } from '~/assets/locales/fr.json'
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
      case 'fr':
        config.locale = fr
        break
      case 'ja':
        config.locale = ja
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
