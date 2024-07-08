import fs from 'node:fs'

const locales = fs.readdirSync('locales')
  .map(file => ({
    code: file.replace(/\.(yml|yaml|json)$/, ''),
    file,
  }))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nightrunner',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  imports: { // add folders here to auto-import them in your application
    dirs: [
      'stores',
      'composables/**',
    ],
  },
  components: [{ path: '~/components', pathPrefix: false }],
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  experimental: {
    typedPages: true,
  },

  // uncomment to disable SSR. This will basically make the app a SPA, like a normal Vue app, but with all the Nuxt goodies
  // ssr: false,

  // global CSS files
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/css/reset.css',
  ],

  // plugin configurations
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/critters',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  i18n: {
    langDir: 'locales',
    defaultLocale: 'en',
    locales,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'color-scheme',
  },
})
