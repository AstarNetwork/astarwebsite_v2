<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>{{ $t("university.overview.title") }}</span>
    </h2>
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
      <li
        v-for="item in overview"
        :key="item.title"
        class="text-center"
      >
        <img
          :src="item.image"
          class="mx-auto w-48 sm:w-auto"
        >
        <h3 class="text-xl lg:text-3xl font-bold leading-tight mb-4 mt-8">
          {{ item.title }}
        </h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const overview = [
  {
    title: t('university.overview.build.title'),
    description: t('university.overview.build.description'),
    image: '/images/university/overview-build.svg',
  },
  {
    title: t('university.overview.self_paced.title'),
    description: t('university.overview.self_paced.description'),
    image: '/images/university/overview-self-paced.svg',
  },
  {
    title: t('university.overview.potential.title'),
    description: t('university.overview.potential.description'),
    image: '/images/university/overview-graduation.svg',
  },
]
</script>
