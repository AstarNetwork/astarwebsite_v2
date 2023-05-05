<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <div class="bg-black">
        <div
          class="bg-[url('/images/incubation/home/hero-bg.svg')] bg-center bg-repeat"
        >
          <div class="relative z-10 h-screen">
            <IncubationHeader />
            <IncubationHomeHero />
          </div>
        </div>
      </div>
      <div class="w-full -mt-12 lg:absolute sm:top-[75vh]">
        <div
          class="bg-[url('/images/incubation/home/hero-rocket.svg')] bg-left bg-no-repeat ml-8 sm:ml-24 lg:ml-[50vw] min-h-[410px] sm:min-h-[616px] lg:min-h-[820px] bg-[length:600px_410px] sm:bg-[length:900px_616px] lg:bg-[length:1200px_820px]"
        />
      </div>
    </template>
    <template #main>
      <main>
        <div class="max-w-7xl mx-auto px-4">
          <IncubationHomeAbout class="lg:py-32" />
          <IncubationHomeOffer class="pt-24 pb-24 sm:pb-44" />
        </div>
        <IncubationHomeTimeline />
        <IncubationHomePartners class="pt-24 sm:pt-40 pb-24" />
        <IncubationHomeMentors class="sm:py-36" />
        <IncubationHomeFaq class="pt-24 pb-24 sm:pb-60" />
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "../../content/meta";
const { t } = useI18n();
const seoTitle = t("meta.title");
const seoDescription = t("meta.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}incubation.png`;

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
