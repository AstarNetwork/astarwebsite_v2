<template>
  <NuxtLayout name="default">
    <SubPageHeader>
      <img
        :src="post.image"
        alt=""
        class="object-cover w-full aspect-blog max-w-[1280px] shadow-xl -my-6 lg:-my-8"
      />
    </SubPageHeader>

    <article class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
      <header class="text-center mb-12">
        <time>{{ post.publishedAt }}</time>
        <h1
          class="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
        >
          {{ post.title }}
        </h1>
      </header>
      <div class="entry-content" v-html="post.body" />
      <footer class="mt-16">
        <div class="flex mb-12">
          <p class="mr-2 mt-3">{{ $t("blog.tags") }}:</p>
          <div class="flex flex-wrap">
            <NuxtLink
              v-for="tag in post.tags"
              :href="i18n + '/blog/tag/' + tag"
              class="block text-slate-500 border border-slate-500 py-2 px-4 rounded-full hover:bg-white/10 mr-1 mb-2"
            >
              {{ tag }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex border border-slate-500 rounded-3xl px-3 py-6 sm:p-8">
          <div class="shrink-0 mr-3 sm:mr-4">
            <img
              src="https://ipfs.subsocial.network/ipfs/bafybeigblzs4mgxityqmkvxqyknl4jiibg3bo6winogvf6kfobc2qolnjq"
              alt=""
              class="object-cover w-12 sm:w-16 h-12 sm:h-16 rounded-full"
            />
          </div>
          <div class="flex-1">
            <h3 class="font-bold text-lg lg:text-xl mb-2">
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
      class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 my-36"
    >
      <h2 class="text-center text-3xl lg:text-4xl font-semibold mb-12">
        {{ $t("blog.related") }}
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
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const route = useRoute();
const slug = route.params.slug;
const id = route.params.slug.slice(-5);
const { locale, t } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

const query = gql`
  query PostsById {
    posts(
      locale: "${locale.value}"
      filters: { id: { eq: "${id}" } }
    ) {
      data {
        attributes {
          title
          publishedAt
          body
          summary
          tags
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
const post = data.value.posts.data.map(
  (item: {
    attributes: {
      publishedAt: string | number | Date;
      body: string;
      image: { data: { attributes: { url: string } } };
    };
  }) => {
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
      body: item.attributes.body ? md.render(item.attributes.body) : "",
    };
  }
)[0];

const orConditions = post.tags
  .map((tag: string) => `{ tags: { containsi: "${tag}" } }`)
  .join(", ");

const querySpace = gql`
  query PostsByTag {
    posts(
      locale: "${locale.value}"
      filters: { id: { ne: "${id}" } and: { or: [${orConditions}] } }
      pagination: { limit: 6 }
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

const dataRelated: any = await useAsyncQuery({
  query: querySpace,
  clientId: "strapi",
});
const posts = dataRelated.data.value.posts.data.map(
  (item: {
    id: string;
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
      id: item.id,
      ...item.attributes,
      image: imagePath,
      publishedAt: formattedDate,
      slug: lowercaseSlug,
    };
  }
);

posts.sort(
  (a: { id: string }, b: { id: string }) => parseInt(b.id) - parseInt(a.id)
); // For descending order

import { meta } from "@/data/meta";
const seoTitle = `${post.title} | ${meta.siteName}`;
const seoDescription = post.summary;
const seoUrl = `${meta.url}${route.fullPath}`;

import { socialUrl } from "@/data/links";

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
