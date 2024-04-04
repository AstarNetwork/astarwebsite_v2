<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('developers.title')"
      :description="$t('developers.description')"
    />
    <DevelopersBuild class="pb-20 sm:pb-64" />
    <DevelopersSupport class="pb-20 sm:pb-64" />
    <DevelopersLearn class="pb-20 sm:pb-64" />
    <DevelopersAdvantages class="pb-12" />
    <DevelopersMultichain class="pb-28 sm:pb-44" />
    <DevelopersToolkit class="pb-32 sm:pb-64" />
    <DevelopersTestimonials
      class="pb-28"
      :title="$t('developers.testimonials.title')"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
import { meta } from '@/data/meta'
const seoTitle = `${t('developers.title')} | ${meta.siteName} - ${t(
  'meta.tagline',
)}`
const seoDescription = t('developers.description')
const seoUrl = `${meta.url}${route.fullPath}`
const seoImage = `${meta.image}developers.png`

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

<style lang="postcss" scoped></style>
