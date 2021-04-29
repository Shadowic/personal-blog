export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shadowic',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      {
        rel: 'favicon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'apple-icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/apple-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/scss/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],
  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    detectBrowserLanguage: false,
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },
  styleResources: {
    scss: ['./assets/scss/variables.scss', './assets/scss/breakpoints.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
}
