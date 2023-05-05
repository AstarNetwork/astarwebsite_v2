<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative mb-16">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full pt-20 sm:pt-28 lg:pt-36"
        >
          <div class="text-center">
            <img
              :src="post.image"
              alt=""
              class="object-cover w-full lg:h-[520px] shadow-xl"
              data-not-lazy
            />
          </div>
        </div>
      </div>

      <article class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-32">
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
            <p class="mr-2 mt-3">Tags:</p>
            <div class="flex flex-wrap">
              <NuxtLink
                v-for="tag in post.tagsOriginal.split(',')"
                :href="'/blog/tag/' + tag"
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

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 class="text-center text-3xl lg:text-4xl font-semibold mb-12">
          Related Posts
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
import gql from "graphql-tag";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

// The subsocial space where the dApp staking news updates come from: https://polkaverse.com/10802
const route = useRoute();
const slug = route.params.slug;

const query = gql`
  query PostsBySlug {
    posts(where: { slug_eq: "${slug}" }, orderBy: id_DESC) {
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

const astarSpace = 10802;
const querySpace = gql`
  query PostsByTag {
    posts(where: { space: { id_eq: "${astarSpace}" }, tagsOriginal_containsInsensitive: "${post.tagsOriginal}", slug_not_eq: "${slug}" }, orderBy: id_DESC) {
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

import { meta } from "../../content/meta";
const seoTitle = `${post.title} | ${meta.siteName}`;
const seoDescription = post.summary;
const seoUrl = `${meta.url}${route.fullPath}`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  author: () => post.author.profileSpace.name,
  ogSiteName: () => "Astar Network",
  ogLocale: () => "en_US",
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => post.image,
  ogImageUrl: () => post.image,
  ogType: () => "article",
  ogUrl: () => seoUrl,
  twitterSite: () => "@AstarNetwork",
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

<style lang="postcss">
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}

.entry-content {
  @apply prose prose-invert lg:prose-xl prose-a:text-space-cyan hover:prose-a:text-space-cyan-lighter prose-headings:text-white bg-space-gray-dark tracking-wider prose-headings:font-bold prose-blockquote:font-normal prose-blockquote:py-3 prose-blockquote:pl-7 prose-blockquote:pr-5 prose-blockquote:bg-white/5 prose-strong:font-medium;
}
.entry-content p code {
  font-size: 0.9em;
  @apply bg-white/20 font-normal rounded p-2;
}
.entry-content p code::before,
.entry-content p code::after {
  @apply hidden;
}
/* .entry-content strong {
  background: linear-gradient(transparent 60%, #69275c 60%);
}*/
</style>
