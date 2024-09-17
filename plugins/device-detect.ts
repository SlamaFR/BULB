import VueDeviceDetect from '@basitcodeenv/vue3-device-detect'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDeviceDetect)
})
