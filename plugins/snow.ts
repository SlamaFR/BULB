import { defineNuxtPlugin } from '#app'
import { defineCustomElement } from '@le-pepe/snow-effect/snow-effect'

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.hook('vue:setup', () => {
    defineCustomElement()
  })
})
