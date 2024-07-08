import type { UseI18nOptions } from 'vue-i18n'

export default function useCustomI18n(options?: UseI18nOptions) {
  const router = useRouter()
  const i18n = useI18n(options)
  const switchLocalePath = useSwitchLocalePath()
  const locale = useLocale()
  syncRef(i18n.locale, locale)

  watch(locale, (value, previous) => {
    if (value === previous) return
    const path = switchLocalePath(value)
    router.replace(path)
  })

  return i18n
}
