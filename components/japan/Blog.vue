<template>
  <div
    v-if="posts.length > 0"
    class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10"
  >
    <h2 class="title text-center mb-12 sm:mb-16">
      <span>{{ t("japan.blog.title") }}</span>
    </h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
      <BlogArticleCard v-for="post in posts" :post="post" :blog="true" />
    </ul>
    <div class="text-center mt-12 sm:mt-20">
      <Button :href="toBlog">{{ t("japan.blog.title") }}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getPosts } from "@/components/blog";

const { locale, t } = useI18n();
const tag = locale.value === "ja" ? "" : "japan";
const filters = `tags: { containsi: "${tag}" }`;
const pagination = "limit: 3";
const posts = await getPosts(filters, pagination);
const localePath = useLocalePath();
const toBlog = locale.value === "ja" ? "/ja/blog" : "/blog/japan";
</script>
