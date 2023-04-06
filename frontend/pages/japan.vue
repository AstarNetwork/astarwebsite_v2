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
            alt="Astar Japan Lab"
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
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

definePageMeta({
  layout: false,
  title: "Astar Japan Lab",
  slug: "japan",
  description:
    "Astar Japan Lab was established to actively conduct research and development, gather knowledge, and exchange opinions on the development of services and business creation using the Astar Network in Japan, with the aim of further developing the Astar Network.",
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
