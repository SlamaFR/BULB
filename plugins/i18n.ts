import { defineNuxtPlugin } from '#app'

import { createI18n } from 'vue-i18n'
import en from '~/locales/en.json'
import fr from '~/locales/fr.json'
import ja from '~/locales/ja.json'
import es from '~/locales/es.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    fallbackLocale: ['en', 'fr'],
    messages: {
      fr,
      en,
      ja,
      es,
    },
  })

  vueApp.use(i18n)
})
