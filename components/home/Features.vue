<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-6 container-lg mt-8 relative">
    <div
      v-for="(item, index) in data"
      :key="item.title"
      class="border-2 border-white rounded-xl shadow-lg bg-white/50 px-6 py-12 lg:p-12"
      data-aos="fade-up"
      :data-aos-delay="index * 100"
    >
      <div class="-mt-24 mb-4">
        <img
          :src="`/images/home/${item.image}`"
          class="mx-auto w-full max-w-[460px]"
        >
      </div>
      <h2
        class="text-center text-3xl sm:text-4xl lg:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0047FF] to-[#00D1FF] leading-tight sm:leading-tight lg:leading-tight font-bold mb-4"
      >
        {{ item.title }}
      </h2>
      <p :class="`leading-relaxed mb-8 ${index === 1 ? 'text-center' : ''}`">
        {{ item.description }}
      </p>
      <div class="flex justify-center flex-col lg:flex-row gap-3">
        <Button
          v-for="button in item.links"
          :key="button.label"
          :href="button.url.includes('https') ? button.url : localePath(button.url)"
          :color="button.color"
        >
          {{ button.label }}
        </Button>
      </div>
    </div>

    <div class="absolute -z-10 top-0">
      <img
        src="/images/common/gradient-bg.svg"
        alt=""
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

import { portalUrl } from '@/data/links'

const data: Array<{
  title: string
  image: string
  description: string
  links: Array<{
    label: string
    url: string
    color: 'blue' | 'whiteBlue' | 'whiteGray' | 'outlinedGray'
  }>
}> = [
  {
    title: t('home.features.bridgeAndEcosystem.title'),
    image: 'bridge-and-ecosystem.svg',
    description: t('home.features.bridgeAndEcosystem.description'),
    links: [
      {
        label: t('home.features.bridgeAndEcosystem.cta.bridgeToAstar'),
        url: 'https://portal.astar.network/astar/bridge',
        color: 'blue',
      },
      {
        label: t('home.features.bridgeAndEcosystem.cta.exploreEcosystem'),
        url: '/ecosystem/',
        color: 'outlinedGray',
      },
    ],
  },
  {
    title: t('home.features.dappStaking.title'),
    image: 'dapp-staking.webp',
    description: t('home.features.dappStaking.description'),
    links: [
      {
        label: t('home.features.dappStaking.cta.portal'),
        url: portalUrl.dappStaking,
        color: 'blue',
      },
    ],
  },
]
</script>

<style lang="postcss" scoped></style>
