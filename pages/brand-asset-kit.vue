<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('brandAssetKit.title')"
      :description="$t('brandAssetKit.description')"
    >
      <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Button
          :href="brandAssetKitUrl.zip"
          target="_blank"
          download
        >
          {{ $t("brandAssetKit.cta.downloadZip") }}
        </Button>
        <Button
          :href="brandAssetKitUrl.figma"
          color="outlinedGray"
        >
          <img
            src="/images/brand-asset-kit/figma-logo.svg"
            alt="Figma"
            class="h-6 w-auto"
          >
          {{ $t("brandAssetKit.cta.figmaFile") }}
        </Button>
      </div>
    </SubPageHeader>

    <div class="space-y-24 sm:space-y-48 pb-24 sm:pb-48">
      <BrandAssetKitLogo />
      <BrandAssetKitColors />
      <BrandAssetKitTypography />
      <BrandAssetKitCTA />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { brandAssetKitUrl } from '@/data/links'

const route = useRoute()
import { meta } from '@/data/meta'
const { t } = useI18n()
const seoTitle = `${t('brandAssetKit.title')} | ${meta.siteName} - ${t(
  'meta.tagline',
)}`
const seoDescription = t('brandAssetKit.description')
const seoUrl = `${meta.url}${route.fullPath}`
const seoImage = `${meta.image}common.png`

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
