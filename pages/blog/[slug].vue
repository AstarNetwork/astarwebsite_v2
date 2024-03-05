<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <img
          :src="post.image"
          alt=""
          class="object-cover w-full aspect-blog max-w-[1280px] shadow-xl -my-6 lg:-my-8"
          data-not-lazy
        />
      </SubPageHeader>

      <article class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
        <header class="text-center mb-12">
          <time class="text-gray-400">{{ post.publishedDate }}</time>
          <h1
            class="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white"
          >
            {{ post.title }}
          </h1>
        </header>
        <div class="entry-content leading-9" v-html="post.body" />
        <footer class="mt-16">
          <div class="flex mb-12 text-tiny lg:text-base">
            <p class="mr-2 mt-3">{{ $t("blog.tags") }}:</p>
            <div class="flex flex-wrap">
              <NuxtLink
                v-for="tag in post.tagsOriginal.split(',')"
                :href="i18n + '/blog/tag/' + tag"
                class="block text-white border border-gray-500 py-2 px-4 rounded-full hover:bg-white/10 mr-1 mb-2"
              >
                {{ tag }}
              </NuxtLink>
            </div>
          </div>
          <div class="flex border border-gray-500 rounded-3xl px-3 py-6 sm:p-8">
            <div class="shrink-0 mr-3 sm:mr-4">
              <img
                :src="post.authorImg"
                alt=""
                class="object-cover w-12 sm:w-16 h-12 sm:h-16 rounded-full"
              />
            </div>
            <div class="flex-1">
              <h3 class="font-bold text-lg lg:text-xl mb-2">
                {{ post.author.profileSpace.name }}
              </h3>
              <p class="text-tiny lg:text-base">
                {{ post.author.profileSpace.about }}
              </p>
            </div>
          </div>
        </footer>
      </article>

      <HomeNewsletter class="mb-36" />

      <div
        v-if="posts.length > 0"
        class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mt-36"
      >
        <h2 class="text-center text-3xl lg:text-4xl font-semibold mb-12">
          {{ $t("blog.related") }}
        </h2>
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
// defineI18nRoute(false);

import gql from "graphql-tag";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

const route = useRoute();
const slug = route.params.slug;
const id = route.params.slug.slice(-5);

// The subsocial space for news: https://polkaverse.com/10802 , and Japanese: https://polkaverse.com/11315
const { locale, t } = useI18n();
const astarSpace = locale.value === "ja" ? 11315 : 10802;
const i18n = locale.value === "ja" ? "/ja" : "";

const query = gql`
  query PostsBySlug {
    posts(where: { space: { id_eq: "10802" }, id_eq: "${id}", hidden_eq: false, OR: { space: { id_eq: "11315" }, id_eq: "${id}", hidden_eq: false } }, orderBy: id_DESC) {

      publishedDate: createdOnDay
      title
      href: canonical
      image
      body
      summary
      tagsOriginal
      author: ownedByAccount { profileSpace { name, image, about } }
    }
  }
`;

const { data } = await useAsyncQuery({ query, clientId: "subsocial" });
const post = data.value.posts.map(
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
      authorImg: item.author.profileSpace.image
        ? "https://ipfs.subsocial.network/ipfs/" +
          item.author.profileSpace.image
        : "/images/blog/placeholder.webp",
      publishedDate: formattedDate,
      body: item.body ? md.render(item.body) : "",
    };
  }
)[0];

const orConditions = post.tagsOriginal
  .split(",")
  .map((tag: string) => `{ tagsOriginal_containsInsensitive: "${tag}" }`)
  .join(", ");

const querySpace = gql`
  query PostsByTag {
    posts(where: { space: { id_eq: "${astarSpace}" }, AND: { OR: [${orConditions}] }, id_not_eq: "${id}", hidden_eq: false }, orderBy: id_DESC, limit: 6) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      slug
    }
  }
`;

const dataRelated = await useAsyncQuery({
  query: querySpace,
  clientId: "subsocial",
});
const posts = dataRelated.data.value.posts.map(
  (item: { publishedDate: string | number | Date }) => {
    const lowercaseSlug = item.slug.toLowerCase();
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
      slug: lowercaseSlug,
    };
  }
);

import { meta } from "@/data/meta";
const seoTitle = `${post.title} | ${meta.siteName}`;
const seoDescription = post.summary;
const seoUrl = `${meta.url}${route.fullPath}`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  author: () => post.author.profileSpace.name,
  ogSiteName: () => "Astar Network",
  ogLocale: () => locale.value,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => post.image,
  ogImageUrl: () => post.image,
  ogType: () => "article",
  ogUrl: () => seoUrl,
  twitterSite: () => `@${t("meta.twitter")}`,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => post.image,
});

useSchemaOrg([
  defineArticle({
    author: {
      name: post.author.profileSpace.name,
    },
  }),
]);

definePageMeta({
  layout: false,
});
</script>
