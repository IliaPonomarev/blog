module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=B612+Mono|Cabin:400,700&display=swap'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#409eff' },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.scss',
    'medium-editor/dist/css/medium-editor.css'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/editor', ssr: false },
    '@/plugins/globals',
    '@/plugins/axios'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  proxy: {
    '/api': {
      target: process.env.BASE_URL || 'http://localhost:3000',
      pathRewrite: {
        '^/api': '/'
      }
    }
  },

  env: {
    appName: 'Wegeograph'
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^element-ui/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
