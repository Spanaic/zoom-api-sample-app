import colors from 'vuetify/es5/util/colors'

require('dotenv').config()

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      // { src: 'node_modules/react/umd/react.production.min.js' },
      { src: 'https://unpkg.com/react@16/umd/react.production.min.js' },

      // { src: 'node_modules/react-dom/umd/react-dom.production.min.js' },
      { src: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js' },

      // { src: 'node_modules/redux/dist/redux.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/redux/4.0.5/redux.min.js' },

      // { src: 'node_modules/redux-thunk/dist/redux-thunk.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/redux-thunk/2.3.0/redux-thunk.min.js' },

      // { src: 'node_modules/lodash/lodash.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js' },

      // { src: 'node_modules/jquery/dist/jquery.min.js' },
      { src: ' https://code.jquery.com/jquery-3.4.1.min.js' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/zoom_client.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
