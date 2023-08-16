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
        <ScrollParallax :speed="0.2">
          <img
            class="absolute z-[3] w-screen h-screen object-scale-down portrait:hidden"
            src="/images/japan/hero-landscape.svg"
            :alt="$t('japan.title')"
            width="1460"
            height="808"
            data-not-lazy
          />
        </ScrollParallax>
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
    </template>

    <template #earth>
      <div class="sky-gradient text-gray-700">
        <div class="sky-gradient-inner">
          <JapanMembers class="py-12" />

          <div class="relative z-10 text-center pt-4 sm:pt-12">
            <Button
              class="mb-12"
              size="xxl"
              target="_blank"
              :href="registerForm"
            >
              {{ $t("japan.register") }}
            </Button>
          </div>

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
