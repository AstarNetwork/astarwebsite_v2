<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-cloud.webp"
          alt=""
          width="1728"
          height="1281"
          data-not-lazy
        />
        <img
          class="absolute z-[2] right-0 bottom-4 portrait:max-h-[50vh] landscape:max-h-[80vh] w-auto"
          src="/images/community/hero.svg"
          alt="Community"
          width="1106"
          height="804"
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
        <CommunityHero />
      </div>
      <CommunityOnlineCommunity class="pb-28 sm:pb-64 pt-12" />
      <CommunityBuilders class="pb-28 sm:pb-64" />
      <CommunityGrants class="pb-28 sm:pb-40" />
      <CommunityAmbassador class="pb-28 sm:pb-40" />
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

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
</style>
