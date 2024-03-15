<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('blog.title')"
      :description="$t('blog.description')"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 sm:mb-24">
      <h2 class="text-center text-3xl sm:text-4xl font-semibold mb-8 sm:mb-12">
        {{ $t("blog.latest") }}
      </h2>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
      >
        <BlogArticleCard v-for="post in posts" :post="post" :blog="true" />
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { meta } from "@/data/meta";
import { getPosts } from "@/components/blog";

const posts = await getPosts();
const route = useRoute();
const { t } = useI18n();

const seoTitle = `${t("blog.title")} | ${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("blog.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}blog.png`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => "website",
  ogUrl: () => seoUrl,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
});

definePageMeta({
  layout: false,
});
</script>
