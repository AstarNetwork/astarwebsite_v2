<template>
  <NuxtLayout name="default">
    <SubPageHeader
      title="Astar University"
      description="Gain valuable web3 programming skills. Hands-on training to put you on the fast track to a web3 career. Rust. Solidity. And Polkadot."
      :button="{ label: $t('university.join'), to: application }"
    >
      <div class="max-w-5xl mx-auto px-4 sm:px-6 w-full mt-12 sm:mt-24">
        <video
          controls
          preload="auto"
          poster="/videos/astar_uni_teaser_v2.webp"
          class="w-full"
        >
          <source src="/videos/astar_uni_teaser_v2.mp4" type="video/mp4" />
        </video>
        <div class="text-center text-xl mt-6 sm:mt-12">
          <p class="gradient-text font-semibold text-xl sm:text-2xl">
            <span>{{ $t("university.intro.title") }}</span>
          </p>
          <p class="text-lg sm:text-xl">
            {{ $t("university.intro.description") }}
          </p>
        </div>
      </div>
    </SubPageHeader>

    <div class="relative z-10">
      <UniversityOverview class="py-24" />
      <UniversityCurriculum class="py-24" />
      <DevelopersTestimonials class="py-24" :title="$t('university.reason')" />
      <UniversityFAQs class="py-24" :application="application" />
      <UniversityCTA class="my-24" :application="application" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const application = "https://forms.gle/4fnF1fWS3GRdDxtL6";

const route = useRoute();
const { t } = useI18n();
import { meta } from "@/data/meta";
const seoTitle = `Astar University | ${meta.siteName} - ${t("meta.tagline")}`;

const seoDescription =
  "Gain valuable web3 programming skills. Hands-on training to put you on the fast track to a web3 career. Rust. Solidity. And Polkadot.";
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}university.png`;

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
