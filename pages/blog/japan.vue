<template>
  <NuxtLayout name="default">
    <SubPageHeader title="Astar Japan Blog" />

    <BlogNewsletter class="py-20 sm:py-32" type="japan" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 my-12 sm:my-24">
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
import gql from "graphql-tag";

const { locale } = useI18n();
const tag = locale.value === "ja" ? "" : "japan";

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
const posts = data.value.posts.map(
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

const route = useRoute();
const { t } = useI18n();
import { meta } from "@/data/meta";
const seoTitle = `Astar Japan Blog | ${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("blog.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}blog-japan.png`;

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
