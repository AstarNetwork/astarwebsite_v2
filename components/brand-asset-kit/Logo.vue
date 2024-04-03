<template>
  <section class="text-center sm:pt-24">
    <h2 class="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight">
      {{ $t("brandAssetKit.logo.title") }}
    </h2>
    <p class="container-xs mb-12 text-sm sm:text-base">
      {{ $t("brandAssetKit.logo.description") }}
    </p>

    <div class="space-y-24">
      <div>
        <h3 class="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8">
          {{ $t("brandAssetKit.logo.primary") }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 container-md">
          <div
            v-for="item in primaryLogo"
            :key="item.alt"
          >
            <img
              :src="item.image"
              :alt="item.alt"
              class="w-full h-auto"
            >
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-8">
          {{ $t("brandAssetKit.logo.zkEvm") }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 container-md">
          <div
            v-for="item in zkEvmLogo"
            :key="item.alt"
          >
            <img
              :src="item.image"
              :alt="item.alt"
              class="w-full h-auto"
            >
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-8">
          {{ $t("brandAssetKit.logo.symbol") }}
        </h3>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mx-auto max-w-screen-sm px-4 sm:px-6 lg:px-8"
        >
          <div
            v-for="item in symbolLogo"
            :key="item.alt"
          >
            <img
              :src="item.image"
              :alt="item.alt"
              class="w-full h-auto"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="absolute -z-10 left-0 top-44">
      <img src="/images/common/gradient-bg.svg">
    </div>
  </section>
</template>

<script setup lang="ts">
const primaryLogo = [
  {
    image: '/images/brand-asset-kit/logo-primary-color-black.webp',
    alt: 'Astar logo color black',
  },
  {
    image: '/images/brand-asset-kit/logo-primary-color-white.webp',
    alt: 'Astar logo color white',
  },
  {
    image: '/images/brand-asset-kit/logo-primary-white.webp',
    alt: 'Astar logo white',
  },
]

const zkEvmLogo = [
  {
    image: '/images/brand-asset-kit/logo-zkevm-color-black.webp',
    alt: 'Astar logo color black',
  },
  {
    image: '/images/brand-asset-kit/logo-zkevm-color-white.webp',
    alt: 'Astar logo color white',
  },
  {
    image: '/images/brand-asset-kit/logo-zkevm-white.webp',
    alt: 'Astar logo white',
  },
  {
    image: '/images/brand-asset-kit/logo-zkevm-polygon-color-black.webp',
    alt: 'Astar logo color black',
  },
  {
    image: '/images/brand-asset-kit/logo-zkevm-polygon-color-white.webp',
    alt: 'Astar logo color white',
  },
  {
    image: '/images/brand-asset-kit/logo-zkevm-polygon-white.webp',
    alt: 'Astar logo white',
  },
]

const symbolLogo = [
  {
    image: '/images/brand-asset-kit/logo-symbol-color.webp',
    alt: 'Astar symbol color',
  },
  {
    image: '/images/brand-asset-kit/logo-symbol-white.webp',
    alt: 'Astar symbol white',
  },
]
</script>
