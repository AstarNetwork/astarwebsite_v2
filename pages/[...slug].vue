<template>
  <NuxtLayout name="default">
    <ContentRenderer :value="data">
      <SubPageHeader :title="data.title" />

      <article class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-32">
        <ContentRendererMarkdown
          class="entry-content"
          :value="data"
        />
      </article>
    </ContentRenderer>
  </NuxtLayout>
</template>

<script setup lang="ts">
let { path } = useRoute()
path = path.replace('/ja', '')
if (path.slice(-1) === '/') {
  path = path.slice(0, path.length - 1)
}
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})

const route = useRoute()
const { t } = useI18n()
import { meta } from '@/data/meta'
const seoTitle = `${data.value.title} | ${meta.siteName} - ${t(
  'meta.tagline',
)}`
const seoDescription = data.value.description
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

<style lang="postcss"></style>
