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
const route = useRoute();
const { locale } = useI18n();
import { meta } from "./content/meta";
const seoUrl = `${meta.url}${route.fullPath}`;
useHead(() => ({
  htmlAttrs: { lang: locale.value },
  link: [
    {
      rel: "canonical",
      href: seoUrl,
    },
  ],
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
