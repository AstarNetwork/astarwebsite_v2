<template>
  <NuxtLayout name="default">
    <template #space>
      <ContentRenderer :value="data">
        <SubPageHeader>
          <h1
            class="text-3xl sm:text-4xl lg:text-6xl font-extrabold drop-shadow leading-tight"
          >
            {{ data.title }}
          </h1>
        </SubPageHeader>

        <article class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 mb-12">
          <div class="entry-content leading-9">
            <ContentRendererMarkdown :value="data" />
          </div>
        </article>
      </ContentRenderer>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
let { path } = useRoute();
path = path.replace("/ja", "");
const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});

const route = useRoute();
const { t } = useI18n();
import { meta } from "@/data/meta";
const seoTitle = `${data.value.title} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = data.value.description;
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}common.png`;

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

<style lang="postcss"></style>
