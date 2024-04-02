<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('contact.title')"
      :description="$t('contact.description')"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 pb-32">
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <li
          v-for="item in options"
          class="border-2 border-white px-12 py-[3.75rem] rounded-lg flex flex-col justify-between items-center box"
        >
          <div>
            <component
              :is="item.icon"
              class="h-16 w-16 mx-auto"
              aria-hidden="true"
            />
            <h2 class="text-2xl sm:text-4xl my-4">{{ item.title }}</h2>
            <p class="mb-7">{{ item.description }}</p>
          </div>

          <template v-if="item.slug === 'general'">
            <Button href="https://48plu9nrgbf.typeform.com/to/Z9EpmvwP">
              {{ item.buttonLabel }}
            </Button>
          </template>

          <template v-else-if="item.slug === 'technical'">
            <Button :href="socialUrl.discord">
              <component :is="Discord" class="h-5 w-5" aria-hidden="true" />
              {{ item.buttonLabel }}
            </Button>
          </template>
        </li>
      </ul>
    </div>
    <div class="absolute -z-10 right-0 top-0">
      <img src="/images/common/gradient-bg-2.svg" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { socialUrl } from "@/data/links";

useHead({
  script: [{ src: "//embed.typeform.com/next/embed.js" }],
});

const route = useRoute();
import { meta } from "@/data/meta";
const { t } = useI18n();
const seoTitle = `${t("contact.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("contact.description");
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

const General = resolveComponent("IconGeneralInquiries");
const Technical = resolveComponent("IconTechnicalSupport");
const Discord = resolveComponent("IconDiscord");

const options = [
  {
    slug: "general",
    title: t("contact.general.title"),
    description: t("contact.general.description"),
    buttonLabel: t("contact.general.button"),
    icon: General
  },
  {
    slug: "technical",
    title: t("contact.technical.title"),
    description: t("contact.technical.description"),
    buttonLabel: t("contact.technical.button"),
    icon: Technical,
  },
];
</script>

<style lang="postcss" scoped>
.btn {
  @apply font-medium transition-all inline-block hover:cursor-pointer text-white rounded-full px-8 py-4 bg-gradient-to-r from-[#0047FF] to-[#00D1FF];
}

.box {
  background: rgba(255, 255, 255, 0.50);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
}
</style>
