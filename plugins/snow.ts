import { defineNuxtPlugin } from '#app'
import { defineCustomElements } from '@le-pepe/snow-effect/loader'

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.hook('vue:setup', () => {
    defineCustomElements(window)
  })
})
