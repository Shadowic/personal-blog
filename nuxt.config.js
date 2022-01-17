export default {
  server: {
    port: process.env.SHADOWIC_PORT || 3000,
  },
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
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'blog, ceramics, travel, photos',
      },
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

  proxy: process.env.BROWSER_BASE_URL && {
    '/uploads': process.env.BROWSER_BASE_URL,
  },

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
  modules: ['nuxt-i18n', '@nuxtjs/sentry', '@nuxtjs/proxy', '@nuxtjs/strapi'],

  strapi: {
    url: process.env.BROWSER_BASE_URL || '/',
  },

  privateRuntimeConfig: {
    strapi: {
      url: process.env.API_URL,
    },
  },

  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    strategy: 'prefix_except_default',
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
    baseUrl: process.env.SHADOWIC_BASE_URL || 'http://localhost:3000',
  },
  sentry: {
    dsn: 'https://9f1275d1ad694717a2f87e6ae890be3c@o630743.ingest.sentry.io/5755309', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },
}
