<template>
  <div class="bg-white text-gray-600 font-roboto">
    <slot name="hero" />
    <slot name="main" />
    <IncubationFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();

const meta = {
  url: "https://astar.network/incubation",
  ogImage: "https://astar.network/social-preview-incubation.png",
  twitter: "@AstarNetwork",
};

const site_name = t("meta.title");
const title = route.meta.title
  ? `${t(route.meta.title)} | ${t("meta.title")}`
  : t("meta.title");
const url = route.meta.slug ? `${meta.url}/${route.meta.slug}` : meta.url;
const description = route.meta.description
  ? t(route.meta.description)
  : t("meta.description");

useHead({
  title: title,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: url,
    },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    { name: "description", content: description },

    // Twitter
    {
      hid: "twitter:card",
      name: "twitter:card",
      content: "summary_large_image",
    },
    { hid: "twitter:site", name: "twitter:site", content: meta.twitter },
    {
      hid: "twitter:url",
      name: "twitter:url",
      content: url,
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: title,
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: meta.ogImage,
    },

    // Open Graph
    {
      hid: "og:site_name",
      property: "og:site_name",
      content: site_name,
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: url,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: description,
    },
    {
      hid: "og:image",
      property: "og:image",
      content: meta.ogImage,
    },
    {
      hid: "og:image:secure_url",
      property: "og:image:secure_url",
      content: meta.ogImage,
    },
    {
      hid: "og:image:alt",
      property: "og:image:alt",
      content: site_name,
    },
  ],
});
</script>
