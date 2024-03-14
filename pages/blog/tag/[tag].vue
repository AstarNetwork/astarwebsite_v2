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

    <HomeNewsletter class="py-20 sm:py-32" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import gql from "graphql-tag";
const localePath = useLocalePath();

const route = useRoute();
const tag = encodeURI(route.params.tag.toString());
const { locale, t } = useI18n();

const query = gql`
  query PostsByTag {
    posts(
      locale: "${locale.value}"
      filters: { tags: { containsi: "${tag}" } }
      pagination: { page: 1, pageSize: 100 }
      sort: "publishedAt:DESC"
    ) {
      data {
        id
        attributes {
          publishedAt
          title
          slug
          image {
            data {
              attributes {
                url
              }
            }
        }
      }
    }
  }
}
`;

const { data }: any = await useAsyncQuery({ query, clientId: "strapi" });
const posts = data.value.posts.data.map(
  (item: {
    attributes: {
      slug: string;
      publishedAt: string | number | Date;
      image: { data: { attributes: { url: string } } };
    };
  }) => {
    const lowercaseSlug = item.attributes.slug.toLowerCase();
    const date = new Date(item.attributes.publishedAt);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const imageName = item.attributes?.image?.data?.attributes?.url;
    const imagePath = imageName
      ? "http://localhost:1337" + imageName
      : "/images/blog/placeholder.webp";
    return {
      ...item.attributes,
      image: imagePath,
      publishedAt: formattedDate,
      slug: lowercaseSlug,
    };
  }
);

import { meta } from "@/data/meta";
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
