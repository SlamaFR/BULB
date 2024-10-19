import { defineNuxtPlugin } from '#app'

import { createI18n } from 'vue-i18n'
import de from '~/locales/de.json'
import en from '~/locales/en.json'
import fr from '~/locales/fr.json'
import ja from '~/locales/ja.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: ['en', 'fr'],
    messages: {
      de,
      fr,
      en,
      ja,
    },
  })

  vueApp.use(i18n)
})
