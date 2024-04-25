<template>
  <NuxtLayout name="default">
    <SubPageHeader title="Astar Japan Blog" />

    <BlogNewsletter
      class="py-20 sm:py-32"
      type="japan"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 my-12 sm:my-24">
      <h2 class="text-center text-3xl sm:text-4xl font-semibold mb-8 sm:mb-12">
        {{ $t("blog.latest") }}
      </h2>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
      >
        <BlogArticleCard
          v-for="post in posts"
          :key="post.slug"
          :post="post"
          :blog="true"
        />
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { meta } from '@/data/meta'
import { getPosts } from '@/components/blog'

const route = useRoute()
const { locale, t } = useI18n()
const tag = locale.value === 'ja' ? '' : 'japan'
const filters = `tags: { containsi: "${tag}" }`
const posts = await getPosts(filters)

const seoTitle = `Astar Japan Blog | ${meta.siteName} - ${t('meta.tagline')}`
const seoDescription = t('blog.description')
const seoUrl = `${meta.url}${route.fullPath}`
const seoImage = `${meta.image}blog-japan.png`

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
