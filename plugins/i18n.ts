import { defineNuxtPlugin } from '#app'

import { createI18n } from 'vue-i18n'
import de from '~/locales/de.json'
import en from '~/locales/en.json'
import eo from '~/locales/eo.json'
import es from '~/locales/es.json'
import fr from '~/locales/fr.json'
import it from '~/locales/it.json'
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
      it,
      ja,
      es,
      eo,
    },
  })

  vueApp.use(i18n)
})
