<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <h1
          class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow leading-none mb-6 pt-6 sm:pt-12"
        >
          Astar University
        </h1>
        <p class="text-xl lg:text-3xl mb-2">
          Gain valuable
          <span class="font-bold">web3 programming skills.</span>
        </p>
        <p class="mb-16">
          Hands-on training to put you on the fast track to a web3 career.
          <br />Rust. Solidity. And Polkadot.
        </p>
        <Button
          :href="application"
          target="_blank"
          variant="outlined"
          size="xl"
        >
          {{ $t("university.join") }}
          <ArrowTopRightOnSquareIcon class="w-6 h-6 ml-1 stroke-2" />
        </Button>

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
        <DevelopersTestimonials
          class="py-24"
          :title="$t('university.reason')"
        />
        <UniversityFAQs class="py-24" :application="application" />
        <UniversityCTA class="my-24" :application="application" />
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

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
