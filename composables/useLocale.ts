import { useI18n } from 'vue-i18n'

export default function useLocale(fallback = 'en') {
  const preferredLanguages = usePreferredLanguages()
  const { locale: selectedLocale, availableLocales } = useI18n()

  const locale = preferredLanguages.value.find(language => availableLocales.includes(language)) // try to find exact match
    ?? preferredLanguages.value.find(language => availableLocales.includes(language.slice(0, 2)))?.slice(0, 2) // try to find match with only language code
    ?? fallback // fallback

  const localeSetting = useLocalStorage('locale', locale)
  syncRef(localeSetting, selectedLocale)
}
