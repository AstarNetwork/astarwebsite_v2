<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-12">
      <span>Testimonials</span>
    </h2>
    <carousel :items-to-show="1.2">
      <slide v-for="item in testimonials" class="px-2 sm:px-8">
        <div
          class="bg-gradient w-full rounded-3xl text-white px-4 py-6 sm:px-12 sm:py-12 h-full flex items-center"
        >
          <div class="relative">
            <blockquote class="pt-6 pb-4">
              <div class="mx-auto text-center sm:text-xl sm:leading-9">
                <p>{{ item.text }}</p>
              </div>
              <footer class="mt-8">
                <div class="md:flex md:items-center md:justify-center">
                  <div class="md:flex-shrink-0">
                    <img
                      class="mx-auto h-16 w-16 rounded-full"
                      :src="'/images/developers/testimonials/' + item.image"
                      :alt="item.name"
                    />
                  </div>
                  <div class="mt-3 md:mt-0 md:ml-4 md:flex md:items-center">
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

const testimonials = [
  {
    name: "Ben White",
    company: "Parity Technologies",
    text: "Astar is a layer 1 blockchain built on Substrate. Through Polkadot’s shared security and XCMP, Astar's progress on WASM support can enable very unique use-cases to the Polkadot ecosystem.",
    image: "ben-white.webp",
  },
  {
    name: "Miko Matsumura",
    company: "Managing Partner, gumi Cryptos Capital",
    text: "One of the most significant problems left unsolved by Satoshi Nakamoto has been to optimize developer incentives for contributing to projects. Astar has shown incredible innovation in this.",
    image: "miko-matsumura.webp",
  },
  {
    name: "Michael Garland",
    company: "Product Manager, Alchemy",
    text: "It’s rare that we find teams and products as obssesed with improving Web3 developer experience as we are at Alchemy, but Astar is exactly that. Features like dApp Staking and XCMP are gamechangers for developers, which is why we’re so excited to be a part of the Astar ecosystem.",
    image: "michael-garland.webp",
  },
];
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
