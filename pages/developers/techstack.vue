<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="sub-page-header relative overflow-hidden">
        <img
          class="absolute z-[-1] w-full h-full"
          src="/images/common/zkevm-bg.webp"
          alt=""
          width="1728"
          height="1429"
          data-not-lazy
        />
        <img
          class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-cloud.webp"
          alt=""
          width="1728"
          height="1281"
          data-not-lazy
        />
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
          data-not-lazy
        />
        <TechstackHero />
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <TechstackBattleCards />
        <TechstackFAQs class="py-44" />
        <TechstackToolkit class="pb-44" />
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
import { meta } from "@/data/meta";
const seoTitle = `${t("techstack.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("techstack.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}techstack.png`;

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
