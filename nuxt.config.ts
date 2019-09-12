
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */

  head: {
    titleTemplate: 'Full-Stack Engineer and Cloud Architect - Takumi Watanabe',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Takumi Watanabe is a product engineer and cloud architect in California. Currently working as Sr. Cloud Engineer at Cylance"
      },
      { hid: 'og-title', name: 'og:title', content: "Product Engineer and Cloud Architect - Takumi Watanabe" },
      { hid: "og-description",
        name: "og:description",
        content: "Takumi Watanabe is a cloud infrastructure and product engineer form Japan. Currently working as Sr. Cloud Engineer at Cylance"
      },
      { hid: 'og-type', name: 'og:type', content: "website" },
      { hid: 'og-url', name: 'og:url', content: "https://takumiwatanabe.me" },
      { hid: "og-image", name: "og:image", content: "https://takumiwatanabe.me/projects.png" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@fortawesome/fontawesome/styles.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  router: {
    base: '/',
    routeNameSplitter: '/',
    extendRoutes (routes, resolve) {
      routes.push({name: 'thoughtArticle', path: '/thought/*', component: 'pages/thoughtArticle.vue'})
    }
  },
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/dotenv",
    ['nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set:'@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    // }
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    SITE_URL: process.env.SITE_URL
  }
}
