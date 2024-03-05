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
          class="absolute z-[2] right-0 portrait:max-h-[40vh] landscape:max-h-[65vh] landscape:xl:max-h-[80vh] w-auto"
          src="/images/developers/hero.svg"
          alt="Developers"
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
        <DevelopersHero />
      </div>
      <DevelopersBuild class="pb-20 sm:pb-64" />
      <DevelopersSupport class="pb-20 sm:pb-64" />
      <DevelopersLearn class="pb-20 sm:pb-64" />
      <DevelopersAdvantages class="pb-12" />
      <DevelopersMultichain class="pb-28 sm:pb-44" />
      <DevelopersToolkit class="pb-32 sm:pb-64" />
      <DevelopersTestimonials
        class="pb-28"
        :title="$t('developers.testimonials.title')"
      />
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
const seoTitle = `${t("developers.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("developers.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}developers.png`;

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
