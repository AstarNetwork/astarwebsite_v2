<template>
  <NuxtLayout name="default">
    <SubPageHeader>
      <p class="text-lg sm:text-2xl">{{ $t("blog.tag") }}:</p>
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
        {{ tag }}
      </h1>
    </SubPageHeader>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 sm:mb-24">
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        v-if="posts.length > 0"
      >
        <BlogArticleCard v-for="post in posts" :post="post" :blog="true" />
      </ul>
      <div v-else class="text-center">
        <p class="mb-6">{{ $t("blog.no_articles") }}</p>
        <NuxtLink
          :to="localePath('/blog')"
          class="text-space-cyan hover:text-space-cyan-lighter hover:underline"
        >
          {{ $t("blog.back") }} ->
        </NuxtLink>
      </div>
    </div>

    <!-- HomeNewsletter class="py-20 sm:py-32" / -->
  </NuxtLayout>
</template>

<script setup lang="ts">
import { meta } from "@/data/meta";
import { getPosts } from "@/components/blog";

const localePath = useLocalePath();
const route = useRoute();
const tag = route.params.tag.toString();
const { locale, t } = useI18n();
const filters = `tags: { containsi: "${tag}" }`;
const posts = await getPosts(filters);

const seoTitle = `${tag} | ${meta.siteName} - ${t("meta.tagline")}`;
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
