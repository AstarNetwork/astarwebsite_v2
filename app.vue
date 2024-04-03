<template>
  <noscript>
    <iframe
    :src="`https://www.googletagmanager.com/ns.html?id=GTM-53GS73F`"
    height="0"
    width="0"
    style="display: none; visibility: hidden"
    />
  </noscript>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { locale } = useI18n()
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  script: [{ src: '/js/astarAi.js' }],
}))

useSchemaOrg([
  defineOrganization({
    name: 'Astar Foundation',
    logo: '/logo.png',
  }),
  defineWebSite(),
  defineWebPage(),
])
</script>
