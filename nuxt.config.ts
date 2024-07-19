// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['gsap'],
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 10000,
    },
  },
  app: {
    baseURL: '/',
    head: {
      script: [
        {
          hid: 'gtm',
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-53GS73F');`,
          type: 'text/javascript',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/strapi',
    '@nuxtjs/apollo',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxt/content',
    'nuxt-swiper',
    '@nuxt/eslint',
  ],
  runtimeConfig: {
    public: {
      siteUrl: 'https://astar.network',
    },
  },
  schemaOrg: {
    host: 'https://astar.network',
  },
  apollo: {
    clients: {
      community: {
        httpEndpoint: 'https://community.astar.network/graphql',
      },
    },
  },
  strapi: {
    url: 'https://community.astar.network',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  i18n: {
    baseUrl: 'https://astar.network',
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
        files: [
          'en.json',
          'en-incubation.json',
          'en-blog.json',
          'en-developers.json',
          'en-community.json',
          'en-ecosystem.json',
          'en-japan.json',
          'en-contact.json',
          'en-home.json',
          'en-ecosystem.json',
          'en-starmap.json',
          'en-vision.json',
          'en-solutions.json',
          'en-brand-asset-kit.json',
          'en-header.json',
        ],
      },
      {
        code: 'ja',
        name: '日本語',
        iso: 'ja-JP',
        files: [
          'ja.json',
          'ja-incubation.json',
          'ja-blog.json',
          'ja-developers.json',
          'ja-community.json',
          'ja-ecosystem.json',
          'ja-japan.json',
          'ja-contact.json',
          'ja-home.json',
          'ja-ecosystem.json',
          'ja-starmap.json',
          'ja-vision.json',
          'ja-solutions.json',
          'ja-brand-asset-kit.json',
          'ja-header.json',
        ],
      },
      {
        code: 'ko',
        name: '한국어',
        iso: 'ko-KR',
        files: [
          'ko.json',
          'ko-incubation.json',
          'ko-blog.json',
          'ko-developers.json',
          'ko-community.json',
          'ko-ecosystem.json',
          'ko-japan.json',
          'ko-contact.json',
          'ko-home.json',
          'ko-ecosystem.json',
          'ko-starmap.json',
          'ko-vision.json',
          'ko-solutions.json',
          'ko-brand-asset-kit.json',
          'ko-header.json',
        ],
      },
    ],
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
  },
  plugins: [{ src: '~/plugins/aos' }],
  sitemap: {
    discoverImages: false,
  },
  site: {
    url: 'https://astar.network',
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
