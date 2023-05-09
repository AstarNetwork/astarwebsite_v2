<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <p class="text-lg sm:text-2xl -mb-2">Tag:</p>
              <h1
                class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow"
              >
                {{ tag }}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <ul
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          <BlogArticleCard v-for="post in posts" :post="post" />
        </ul>
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import gql from "graphql-tag";

// The subsocial space where the dApp staking news updates come from: https://polkaverse.com/10802
const route = useRoute();
const tag = route.params.tag;

const astarSpace = 10802;
const query = gql`
query PostsByTag {
    posts(where: { space: { id_eq: "${astarSpace}" }, tagsOriginal_containsInsensitive: "${tag}", hidden_eq: false }, orderBy: id_DESC) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      slug
    }
  }
`;

const { data } = await useAsyncQuery({ query, clientId: "subsocial" });
const posts = data.value.posts.map(
  (item: { publishedDate: string | number | Date }) => {
    const date = new Date(item.publishedDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return {
      ...item,
      image: item.image
        ? "https://ipfs.subsocial.network/ipfs/" + item.image
        : "/images/blog/placeholder.webp",
      publishedDate: formattedDate,
    };
  }
);

import { meta } from "@/content/meta";
const seoTitle = `Tag | ${meta.siteName} - ${meta.tagline}`;
const seoDescription =
  "The latest posts about all things Astar Network, major news, ecosystem announcements, engineering updates, and more.";
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

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
</style>