<template>
  <NuxtLayout name="default">
    <HomeHero />
    <HomeFeatured />
    <HomeLatestNews />
    <HomeSolutions />
    <div class="bg-black text-gray-300 py-20">
      <HomeDeveloper />
      <HomeDappsOnAstar />
      <HomeFunding />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { meta } from "@/data/meta";
const { t } = useI18n();
const seoTitle = `${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("meta.description");
const seoUrl = meta.url;
const seoImage = `${meta.image}common.png`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => "website",
  ogUrl: () => seoUrl,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
});

definePageMeta({
  layout: false,
});
</script>

<style lang="postcss" scoped></style>
