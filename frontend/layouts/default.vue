<template>
  <div class="overflow-hidden">
    <Header />
    <slot name="space" />
    <div class="relative z-10">
      <img
        class="w-full"
        src="/images/common/cloud.svg"
        alt=""
        width="2000"
        height="464"
        data-not-lazy
      />
      <div class="bg-white">
        <slot name="earth" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const meta = {
  title: "Astar Network - The Future of Smart Contracts for Multichain",
  siteName: "Astar Network",
  url: "https://astar.network",
  ogImage: "https://astar.network/social-preview.png",
  twitter: "@AstarNetwork",
  description:
    "Astar is a scalable decentralised blockchain for next big Web3 innovations",
};

const title = route.meta.title
  ? `${route.meta.title} | ${meta.title}`
  : meta.title;
const url = route.meta.slug ? `${meta.url}/${route.meta.slug}` : meta.url;
const description = route.meta.description
  ? route.meta.description
  : meta.description;

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
      content: meta.siteName,
    },
    { hid: "og:type", property: "og:type", content: "website" },
    {
      hid: "og:url",
      property: "og:url",
      content: meta.url,
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
      content: meta.title,
    },
  ],
});
</script>

<style lang="postcss">
body {
  @apply text-gray-200 bg-space-gray-dark;
}
</style>
