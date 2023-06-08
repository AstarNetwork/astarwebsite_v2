<template>
  <component is="noscript">
    <iframe
      :src="`https://www.googletagmanager.com/ns.html?id=GTM-53GS73F`"
      height="0"
      width="0"
      style="display: none; visibility: hidden"
    >
    </iframe>
  </component>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Gdpr />
</template>

<script setup lang="ts">
const { locale } = useI18n();
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  script: [{ src: "/js/astarAi.js" }],
}));

useSchemaOrg([
  defineOrganization({
    name: "Astar Foundation",
    logo: "/logo.png",
  }),
  defineWebSite(),
  defineWebPage(),
]);
</script>
