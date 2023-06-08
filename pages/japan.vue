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
          class="absolute z-[3] w-screen h-screen object-scale-down portrait:hidden"
          src="/images/japan/hero-landscape.svg"
          :alt="$t('japan.title')"
          width="1460"
          height="808"
          data-not-lazy
        />
        <img
          class="fixed z-[2] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
          data-not-lazy
        />
        <JapanHero />
      </div>
      <JapanRegister />
      <JapanAbout class="py-24 sm:py-44" />
      <JapanNews class="pt-12 pb-36 lg:py-44" />
    </template>

    <template #earth>
      <div class="sky-gradient text-gray-700">
        <div class="sky-gradient-inner">
          <JapanMembers class="py-12" />
          <JapanRegister />
          <JapanUseCases class="pt-12 pb-24 lg:pt-44" />
          <JapanNewsletter class="py-8 sm:py-16 lg:py-28" />
          <img
            class="w-full"
            src="/images/japan/footer-landscape.svg"
            alt=""
            width="1728"
            height="220"
          />
        </div>
        <div class="footer">
          <div class="pt-12 sm:pt-28 bg-black">
            <Footer color="light" />
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "@/content/meta";
const { t } = useI18n();
const seoTitle = `${t("japan.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("japan.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}japan.png`;

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
