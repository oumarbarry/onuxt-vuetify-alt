import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  typescript: { shim: false },

  experimental: { inlineSSRStyles: false },

  css: [
    '@unocss/reset/tailwind.css',
    'assets/scss/vuetify.scss',
    // 'vuetify/lib/styles/main.sass',
  ],

  build: { transpile: ['vuetify'] },

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxt/devtools',

    // eslint-disable-next-line @typescript-eslint/require-await
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins?.push(vuetify())
      })
    },
  ],

  image: {
    domains: ['https://images.unsplash.com'],
    alias: { unsplash: 'https://images.unsplash.com' },
    unsplash: {},
  },

  sourcemap: false,
})
