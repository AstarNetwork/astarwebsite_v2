<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <h1
          class="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight drop-shadow"
        >
          {{ $t("starmap.title") }}
        </h1>
        <p class="text-lg sm:text-xl lg:text-2xl">
          {{ $t("starmap.description") }}
        </p>
      </SubPageHeader>

      <StarmapContents class="pb-28 sm:pb-44" />
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "@/data/meta";
const { t } = useI18n();
const seoTitle = `2023 Starmap | ${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("starmap.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}starmap.png`;

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
