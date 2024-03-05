<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-12">
      <span>{{ title }}</span>
    </h2>
    <carousel :items-to-show="1.2">
      <slide v-for="item in testimonials" class="px-2 sm:px-8">
        <div
          class="bg-gradient w-full rounded-3xl text-white p-2 sm:px-12 sm:py-12 h-full flex items-center"
        >
          <div class="relative">
            <blockquote class="pt-6 pb-4">
              <div
                class="mx-auto text-center text-tiny sm:text-xl sm:leading-9"
              >
                <p>{{ item.text }}</p>
              </div>
              <footer class="mt-2 sm:mt-8">
                <div class="flex items-center justify-center">
                  <div class="flex-shrink-0">
                    <img
                      class="mx-auto h-12 sm:h-16 w-12 sm:w-16 rounded-full"
                      :src="'/images/developers/testimonials/' + item.image"
                      :alt="item.name"
                    />
                  </div>
                  <div class="ml-2 md:ml-4 md:flex md:items-center">
                    <div class="text-left leading-tight">
                      <div class="sm:text-xl font-medium">{{ item.name }}</div>
                      <div class="text-sm sm:text-base">{{ item.company }}</div>
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const { t } = useI18n();

const testimonials = [
  {
    name: "Ben White",
    company: "Parity Technologies",
    text: t("developers.testimonials.ben"),
    image: "ben-white.webp",
  },
  {
    name: "Miko Matsumura",
    company: "Managing Partner, gumi Cryptos Capital",
    text: t("developers.testimonials.miko"),
    image: "miko-matsumura.webp",
  },
  {
    name: "Michael Garland",
    company: "Product Manager, Alchemy",
    text: t("developers.testimonials.michael"),
    image: "michael-garland.webp",
  },
];

const props = defineProps({
  title: {
    type: String,
    default: "Testimonials",
  },
});
</script>

<style lang="postcss">
.carousel__viewport {
  overflow: visible;
  @apply mb-6;
}
.carousel__prev,
.carousel__next {
  @apply bg-white shadow rounded-full;
}
.carousel__pagination-button::after {
  @apply bg-space-pink-light;
}
.carousel__pagination-button:hover::after,
.carousel__pagination-button--active::after {
  @apply bg-space-pink;
}
.bg-gradient {
  background: linear-gradient(
    120deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
}
</style>
