<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('community.title')"
      :subtitle="$t('community.subtitle')"
      :description="$t('community.description')"
    />
    <CommunityOnlineCommunity class="pb-28 pt-12 sm:pb-64 sm:pt-36" />
    <CommunityBuilders class="pb-28 sm:pb-40" />
    <CommunityCommunities class="pb-28 sm:pb-40" />
    <div class="absolute -z-10 right-0 top-0">
      <img src="/images/common/gradient-bg-2.svg" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()
import { meta } from '@/data/meta'
const seoTitle = `${t('community.title')} | ${meta.siteName} - ${t(
  'meta.tagline',
)}`
const seoDescription = t('community.description')
const seoUrl = `${meta.url}${route.fullPath}`
const seoImage = `${meta.image}community.png`

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
