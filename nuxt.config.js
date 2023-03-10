export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '稀土掘金-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      // SEO优化 TKD
      {
        name: "keywords",
        content: "掘金,稀土,Vue.js,前端,后端,Kotlin,ReactNative,Python"
      },
      {
        name: "description",
        content: "掘金是面向全球中文开发者的技术内容分享与交流平台。我们通过技术文章、沸点、课程、直播等产品和服务，打造一个激发开发者创作灵感，激励开发者沉淀分享，陪伴开发者成长的综合类技术社区。"
      }
    ],
    link: [
      { hid: 'icon', rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' },,
    ],
    bodyAttrs: {
      class: "theme-white"
    }
  },
  axios: {
    proxy: true
  },
  proxy: {
    "/api": "https://jj.hanbing777.top/",
  },
  experimental: {
    writeEarlyHints: true,
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
    NODE_URL: process.env.NODE_URL,
  }, // 在组件中用process.env.NODE_ENV区分是生产环境还是开发环境
  router: {
    base: '/'
  },
  server: {
    // 默认localhost 只能本地访问
    // 若想要对外访问，要配置为 0.0.0.0
    host: '0.0.0.0',
    // nuxtjs 默认 3000
    // vercel 默认80
    port: 80,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/css.less',
    '@/static/css/dark.less',
    '@/static/css/theme/var.less'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/throttle&debounce',
    '@/plugins/bus',
    '@/plugins/light',
    { src: '@/plugins/rsa', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          },
        ]
      ]
    }
  }
}
