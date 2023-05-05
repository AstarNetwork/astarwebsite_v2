<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('meta.program.title')"
        :description="$t('meta.program.description')"
      />
    </template>
    <template #main>
      <main>
        <IncubationProgramOffer class="py-16 sm:py-40" />
        <IncubationProgramTimeline />
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "../../content/meta";
const { t } = useI18n();
const seoTitle = `${t("meta.program.title")} | ${t("meta.title")}`;
const seoDescription = t("meta.program.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}incubation.png`;

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
