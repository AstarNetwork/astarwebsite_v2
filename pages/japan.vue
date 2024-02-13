<template>
  <NuxtLayout name="default">
    <div class="sub-page-header relative overflow-hidden">
      <img
        class="absolute z-[3] w-screen object-scale-down portrait:hidden"
        src="/images/japan/hero-landscape.svg"
        :alt="$t('japan.title')"
        width="1460"
        height="808"
        data-not-lazy
      />
      <JapanHero />
    </div>

    <div
      class="relative z-10 text-center sm:py-12 sm:flex justify-center space-y-4 sm:space-y-0 sm:space-x-6"
    >
      <Button
        class="w-[300px] sm:w-[350px]"
        size="xl"
        target="_blank"
        :href="registerForm"
      >
        {{ $t("japan.register") }}
        <ArrowTopRightOnSquareIcon class="w-6 h-6 ml-1 stroke-2" />
      </Button>
      <Button
        class="w-[300px] sm:w-[350px]"
        size="xl"
        href="#useCases"
        variant="outlined"
      >
        {{ $t("japan.see_use_cases") }} ->
      </Button>
    </div>

    <JapanAbout class="py-16 sm:py-32" />
    <JapanUseCases class="py-16 sm:py-32" />
    <JapanBlog class="py-16 sm:py-32" />

    <div class="text-gray-700">
      <div class="">
        <JapanMembers class="py-12" />

        <div class="relative z-10 text-center pt-4 sm:pt-12">
          <Button class="mb-12" size="xxl" target="_blank" :href="registerForm">
            {{ $t("japan.register") }}
          </Button>
        </div>

        <JapanNewsletter class="py-8 sm:py-16 lg:py-28" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const registerForm =
  "https://docs.google.com/forms/d/e/1FAIpQLSfjqTQyzWIlpl4T921MO8z7nn9v438lRLdlZSpF1nC7HHm3-g/viewform?usp=sf_link";

const route = useRoute();
import { meta } from "@/data/meta";
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

<style lang="postcss" scoped></style>
