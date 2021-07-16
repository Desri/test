import webpack from 'webpack';
import './config/index.js';
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Library',
    htmlAttrs: {
      lang: 'ID'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/BootstrapVue'},
    { src: '@/plugins/axios'},
    { src: '@/plugins/global'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'api/users/login',
            method: 'post',
            propertyName: 'data.token'
          },
          user: false,
          logout: false,
        },
        tokenType: ''
      }
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    proxyHeaders: false,
    credentials: false,
  },

  proxy: {
    '/api/': { target: process.env.BASE_API_URL, pathRewrite: {'^/api/' : ''}, changeOrigin: true },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
