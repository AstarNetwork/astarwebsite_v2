// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      script: [
        {
          hid: "gtm",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-53GS73F');`,
          type: "text/javascript",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxtjs/strapi",
    "@nuxtjs/apollo",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "@nuxt/content",
    [
      "nuxt3-lazy-load",
      {
        defaultImage: "/images/placeholder.png",
      },
    ],
  ],
  runtimeConfig: {
    public: {
      siteUrl: "https://astar.network",
    },
  },
  schemaOrg: {
    host: "https://astar.network",
  },
  apollo: {
    clients: {
      community: {
        httpEndpoint: "https://community.astar.network/graphql",
      },
      subsocial: {
        httpEndpoint: "https://squid.subsquid.io/subsocial/graphql",
      },
    },
  },
  strapi: {
    url: "https://community.astar.network",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  i18n: {
    baseUrl: "https://astar.network",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        files: [
          "en.json",
          "en-incubation.json",
          "en-blog.json",
          "en-developers.json",
          "en-community.json",
          "en-ecosystem.json",
          "en-japan.json",
          "en-contact.json",
          "en-home.json",
          "en-ecosystem.json",
          "en-starmap.json",
          "en-vision.json",
          "en-university.json",
        ],
      },
      {
        code: "ja",
        name: "日本語",
        iso: "ja-JP",
        files: [
          "ja.json",
          "ja-incubation.json",
          "ja-blog.json",
          "ja-developers.json",
          "ja-community.json",
          "ja-ecosystem.json",
          "ja-japan.json",
          "ja-contact.json",
          "ja-home.json",
          "ja-ecosystem.json",
          "ja-starmap.json",
          "ja-vision.json",
          "ja-university.json",
        ],
      },
    ],
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
  plugins: [{ src: "~/plugins/aos" }],
  sitemap: {
    siteUrl: "https://astar.network",
    discoverImages: false,
  },
});
