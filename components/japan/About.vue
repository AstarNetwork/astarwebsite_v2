<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 lg:gap-x-16 gap-y-12 sm:gap-y-20"
    >
      <li
        v-for="item in advantages"
        :key="item.text"
        class="text-center"
      >
        <img
          :src="'/images/japan/' + item.image"
          :alt="item.text"
          width="100"
          height="100"
          class="mx-auto w-16 sm:w-24 mb-6 sm:mb-12"
        >
        <p class="text-sm sm:text-lg lg:text-xl">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const advantages = [
  {
    text: t('japan.features.business_opportunities'),
    image: 'icon-japan.svg',
  },
  {
    text: t('japan.features.use_cases'),
    image: 'icon-nft.svg',
  },
  {
    text: t('japan.features.solution'),
    image: 'icon-solution.svg',
  },
  {
    text: t('japan.features.vc'),
    image: 'icon-vc.svg',
  },
  {
    text: t('japan.features.group_study'),
    image: 'icon-session.svg',
  },
  {
    text: t('japan.features.connect'),
    image: 'icon-community.svg',
  },
]
</script>
