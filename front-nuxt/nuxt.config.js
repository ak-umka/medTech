export default {
  head: {
    title: 'medTech-ht',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  ssr: true,
  target: "server",
  server: {
    host: "0.0.0.0",
    port: 3001,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["@/assets/scss/app.scss"],

  plugins: [
    { src: "~/plugins/vuelidate" },
  ],

  auth: {
    redirect: {
      logout: "/logout",
      login: "/signin",
      home: "/",
      callback: false,
    },
    strategies: {
      local: {
        token: {
          property: "access_token",
          global: true,
          maxAge: 86400,
        },
        autoFetchUser: false,
        endpoints: {
          login: {
            url: "api/login",
            method: "post",
            propertyName: "access_token",
          },
          user: false,
        },
        autoLogout: true,
      },
    },
  },

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
  },

  proxy: {
    '/api': {
      target: 'http://localhost:3001/',
      pathRewrite: {
        '^/api': '/api',
      },
    },
  },

  build: {},
}
