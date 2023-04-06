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
            class="absolute z-[2] right-0 portrait:max-h-[40vh] landscape:max-h-[65vh] landscape:xl:max-h-[80vh] w-auto"
            src="/images/developers/hero.svg"
            alt="Developers"
            width="1106"
            height="804"
            data-not-lazy
          />
        </ScrollParallax>
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
      <DevelopersStart class="pb-20 sm:pb-64" />
      <DevelopersAdvantages class="pb-12" />
      <DevelopersMultichain class="pb-28 sm:pb-44" />
      <DevelopersToolkit class="pb-32 sm:pb-64" />
      <DevelopersTestimonials class="pb-28" />
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";

definePageMeta({
  layout: false,
  title: "Developers",
  slug: "developers",
  description:
    "Build Ethereum and native dApps on Astar and be the part of multichain innovation.",
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
