<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('starmap.title')"
      :description="$t('starmap.description')"
    />

    <StarmapContents class="pb-28 sm:pb-44" />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
import { meta } from '@/data/meta'
const { t } = useI18n()
const seoTitle = `2023 Starmap | ${meta.siteName} - ${t('meta.tagline')}`
const seoDescription = t('starmap.description')
const seoUrl = `${meta.url}${route.fullPath}`
const seoImage = `${meta.image}starmap.png`

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => 'website',
  ogUrl: () => seoUrl,
  twitterCard: () => 'summary_large_image',
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
})

definePageMeta({
  layout: false,
})
</script>
