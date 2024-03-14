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
import gql from "graphql-tag";

const { locale, t } = useI18n();
const tag = locale.value === "ja" ? "" : "japan";

const query = gql`
query PostsByTag {
    posts(
      locale: "${locale.value}"
      filters: { tags: { containsi: "${tag}" } }
      pagination: { limit: 3 }
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

const localePath = useLocalePath();

const toBlog = locale.value === "ja" ? "/ja/blog" : "/blog/japan";
</script>
