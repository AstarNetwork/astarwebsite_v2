<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('solutions.title')"
      :description="$t('solutions.description')"
      :button="{ label: $t('solutions.cta'), to: '/contact/' }"
    />
    <SolutionsOurMission />
    <SolutionsUsecases />
    <SolutionsPartners />
    <SolutionsJapanAndAsia />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "@/data/meta";
const { t } = useI18n();
const seoTitle = `${t("solutions.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("solutions.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}solutions.png`;

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
