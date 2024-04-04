<template>
  <NuxtLayout v-if="post" name="default">
    <SubPageHeader>
      <img
        :src="post.image"
        alt=""
        class="object-cover w-full aspect-blog max-w-[1280px] shadow-xl -my-6 lg:-my-8"
      >
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

      <div class="entry-content">
        <TableOfContents :body="post.body" />
        <div v-html="post.body" />
      </div>

      <footer class="mt-16">
        <div v-if="post.tags.length > 1" class="flex mb-12">
          <p class="mr-2 mt-3">{{ $t("blog.tags") }}:</p>
          <div class="flex flex-wrap">
            <NuxtLink
              v-for="tag in post.tags"
              :key="tag"
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
              src="/images/author-astar.png"
              alt=""
              class="object-cover w-12 sm:w-16 h-12 sm:h-16 rounded-full"
            >
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
        <BlogArticleCard
          v-for="_post in posts"
          :key="_post.slug"
          :post="_post"
          :blog="true"
        />
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getPosts } from "@/components/blog";
import TableOfContents from "@/components/blog/TableOfContents.vue";
import { meta } from "@/data/meta";
import { socialUrl } from "@/data/links";

interface Post {
  title: string;
  body: string;
  image: string;
  publishedAt: string;
  summary: string;
  tags: string[];
}

const { $i18n } = useNuxtApp();
const locale = $i18n.locale;
const i18n = locale.value === "ja" ? "/ja" : "";
const router = useRouter();
const route = useRoute();
const slug = route.params.slug;
const id = slug.slice(slug.lastIndexOf("-") + 1);
const post = ref<Post>();
const posts = ref<Post[]>([]);

const isNumeric = (n: any) => !isNaN(parseFloat(n)) && isFinite(n);
if (!isNumeric(id)) {
  router.push("/blog");
} else {
  const fetchData = async () => {
    const filter = `id: { eq: "${id}" }`;
    const fetchedPosts = await getPosts(filter);

    if (fetchedPosts && fetchedPosts.length > 0) {
      post.value = fetchedPosts[0] as Post; // Cast to Post
      console.log(`tags|${post.value.tags}|${post.value.tags.length}|`);

      if (post.value) {
        const orConditions = post.value.tags
          .map((tag) => `{ tags: { containsi: "${tag}" } }`)
          .join(", ");

        const filters = `id: { ne: "${id}" } and: { or: [${orConditions}] }`;
        const pagination = "limit: 6";
        posts.value = (await getPosts(filters, pagination)) as Post[];

        const seoTitle = `${post.value.title} | ${meta.siteName}`;
        const seoDescription = post.value.summary;
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
          ogImage: () => post.value?.image,
          ogImageUrl: () => post.value?.image,
          ogType: () => "article",
          ogUrl: () => seoUrl,
          twitterSite: () => twitterId,
          twitterCard: () => "summary_large_image",
          twitterTitle: () => seoTitle,
          twitterDescription: () => seoDescription,
          twitterImage: () => post.value?.image,
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
      }
    } else {
      router.push("/blog");
    }
  };

  fetchData();
}
</script>
