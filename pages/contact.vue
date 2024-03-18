<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('contact.title')"
      :description="$t('contact.description')"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10 pb-32">
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li
          v-for="item in options"
          :class="item.slug === 'other' && 'md:col-span-3'"
          class="border border-slate-300 px-4 py-8 rounded-lg flex flex-col justify-between items-center"
        >
          <div>
            <component
              :is="item.icon"
              class="h-16 w-16 mx-auto"
              aria-hidden="true"
            />
            <h2 class="text-2xl sm:my-2">{{ item.title }}</h2>
            <p class="mb-6">{{ item.description }}</p>
          </div>

          <template v-if="item.slug === 'marketing'">
            <button
              class="btn"
              data-tf-popup="cC7Nn0Wa"
              data-tf-opacity="100"
              data-tf-size="100"
              data-tf-iframe-props="title=Marketing Request"
              data-tf-transitive-search-params
              data-tf-medium="snippet"
            >
              {{ item.buttonLabel }}
            </button>
          </template>

          <template v-else-if="item.slug === 'technical'">
            <Button :href="socialUrl.discord">
              <component :is="Discord" class="h-5 w-5" aria-hidden="true" />
              {{ item.buttonLabel }}
            </Button>
          </template>

          <template v-else-if="item.slug === 'support'">
            <button
              class="btn"
              data-tf-popup="OUQlTvWu"
              data-tf-opacity="100"
              data-tf-size="100"
              data-tf-iframe-props="title=Support"
              data-tf-transitive-search-params
              data-tf-medium="snippet"
            >
              {{ item.buttonLabel }}
            </button>
          </template>

          <template v-else>
            <button
              class="btn"
              data-tf-popup="Z9EpmvwP"
              data-tf-opacity="100"
              data-tf-size="100"
              data-tf-iframe-props="title=General Inquiries"
              data-tf-transitive-search-params
              data-tf-medium="snippet"
            >
              {{ item.buttonLabel }}
            </button>
          </template>
        </li>
      </ul>
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

const Marketing = resolveComponent("IconMarketingRequest");
const Partnerships = resolveComponent("IconPartnerships");
const Technical = resolveComponent("IconTechnicalSupport");
const Discord = resolveComponent("IconDiscord");

const options = [
  {
    slug: "marketing",
    title: t("contact.marketing.title"),
    description: t("contact.marketing.description"),
    buttonLabel: t("contact.marketing.button"),
    icon: Marketing,
  },
  {
    slug: "support",
    title: t("contact.partnerships.title"),
    description: t("contact.partnerships.description"),
    buttonLabel: t("contact.partnerships.button"),
    icon: Partnerships,
  },
  {
    slug: "technical",
    title: t("contact.technical.title"),
    description: t("contact.technical.description"),
    buttonLabel: t("contact.technical.button"),
    icon: Technical,
  },
  {
    slug: "other",
    title: t("contact.other.title"),
    description: t("contact.other.description"),
    buttonLabel: t("contact.other.button"),
    icon: null,
  },
];
</script>

<style lang="postcss" scoped>
.btn {
  @apply font-medium transition-all inline-block hover:cursor-pointer text-white rounded-full px-8 py-4 bg-gradient-to-r from-[#0047FF] to-[#00D1FF];
}
</style>
