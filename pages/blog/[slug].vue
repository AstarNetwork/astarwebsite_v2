<template>
  <NuxtLayout name="default">
    <SubPageHeader>
      <img
        :src="post.image"
        alt=""
        class="-my-6 aspect-blog w-full max-w-[1280px] object-cover shadow-xl lg:-my-8"
      />
    </SubPageHeader>

    <article class="relative z-10 mx-auto mb-12 max-w-4xl px-4 sm:px-6">
      <header class="mb-12 text-center">
        <time>{{ post.publishedAt }}</time>
        <h1
          class="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl"
        >
          {{ post.title }}
        </h1>
      </header>

      <div class="entry-content">
        <TableOfContents :body="post.body" />
        <div v-html="post.body" />
      </div>

      <footer class="mt-16">
        <div class="mb-12 flex">
          <p class="mr-2 mt-3">{{ $t("blog.tags") }}:</p>
          <div class="flex flex-wrap">
            <NuxtLink
              v-for="tag in post.tags"
              :href="i18n + '/blog/tag/' + tag"
              class="mb-2 mr-1 block rounded-full border border-slate-500 px-4 py-2 text-slate-500 hover:bg-white/10"
            >
              {{ tag }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex rounded-3xl border border-slate-500 px-3 py-6 sm:p-8">
          <div class="mr-3 shrink-0 sm:mr-4">
            <img
              src="/images/author-astar.png"
              alt=""
              class="h-12 w-12 rounded-full object-cover sm:h-16 sm:w-16"
            />
          </div>
          <div class="flex-1">
            <h3 class="mb-2 text-lg font-bold lg:text-xl">
              Astar Network Team
            </h3>
            <p>
              Astar serves as the gateway for projects across enterprise,
              entertainment, and gaming to enter Japan and beyond. Driving
              global adoption of web3 to millions with an ecosystem powered by
              Polkadot and Polygon as the industry-leading blockchain for the
              Japan market.
            </p>
          </div>
        </div>
      </footer>
    </article>

    <!-- HomeNewsletter class="mb-36" / -->

    <div
      v-if="posts.length > 0"
      class="relative z-10 mx-auto my-36 max-w-7xl px-4 sm:px-6"
    >
      <h2 class="mb-12 text-center text-3xl font-semibold lg:text-4xl">
        {{ $t("blog.related") }}
      </h2>
      <ul
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
      >
        <BlogArticleCard v-for="post in posts" :post="post" :blog="true" />
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { meta } from "@/data/meta";
import { socialUrl } from "@/data/links";
import { getPosts } from "@/components/blog";
import TableOfContents from "@/components/blog/TableOfContents.vue";

const route = useRoute();
const slug = route.params.slug;
const id = route.params.slug.slice(-5);
const { locale, t } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

const filter = `id: { eq: "${id}" }`;
const post = (await getPosts(filter))[0];

const orConditions = post.tags
  .map((tag: string) => `{ tags: { containsi: "${tag}" } }`)
  .join(", ");

const filters = `id: { ne: "${id}" } and: { or: [${orConditions}] }`;
const pagination = "limit: 6";
const posts = await getPosts(filters, pagination);

const seoTitle = `${post.title} | ${meta.siteName}`;
const seoDescription = post.summary;
const seoUrl = `${meta.url}${route.fullPath}`;

let twitterId = socialUrl.twitter.global.id;
if (locale.value === "ja") {
  twitterId = socialUrl.twitter.japan.id;
} else if (locale.value === "ko") {
  twitterId = socialUrl.twitter.korea.id;
}

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  author: () => "Astar Network Team",
  ogSiteName: () => "Astar Network",
  ogLocale: () => locale.value,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => post.image,
  ogImageUrl: () => post.image,
  ogType: () => "article",
  ogUrl: () => seoUrl,
  twitterSite: () => twitterId,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => post.image,
});

useSchemaOrg([
  defineArticle({
    author: {
      name: "Astar Network Team",
    },
  }),
]);

definePageMeta({
  layout: false,
});
</script>
