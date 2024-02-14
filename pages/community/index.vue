<template>
  <NuxtLayout name="default">
    <SubPageHeader>
      <h1
        class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-12"
      >
        {{ $t("community.title") }}
      </h1>
      <p class="sm:text-lg lg:text-xl max-w-3xl mx-auto">
        {{ $t("community.description") }}
      </p>
    </SubPageHeader>
    <CommunityOnlineCommunity class="pb-28 sm:pb-64 pt-12" />
    <CommunityBuilders class="pb-28 sm:pb-64" />
    <CommunityGrants class="pb-28 sm:pb-40" />
    <CommunityAmbassador class="pb-28 sm:pb-40" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
import { meta } from "@/data/meta";
const seoTitle = `${t("community.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("community.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}community.png`;

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
