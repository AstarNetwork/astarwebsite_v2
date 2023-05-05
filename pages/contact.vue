<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <h1
                class="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight drop-shadow"
              >
                Contact Us
              </h1>
              <p class="sm:text-xl lg:text-2xl">
                Get in touch with the Astar Network team
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <li
            v-for="item in options"
            :class="item.slug === 'other' && 'md:col-span-3'"
            class="border border-gray-400 px-4 py-8 rounded-3xl flex flex-col justify-between items-center"
          >
            <div>
              <component
                :is="item.icon"
                class="h-16 w-16 mx-auto"
                aria-hidden="true"
              />
              <h2 class="font-bold text-2xl sm:my-2">{{ item.title }}</h2>
              <p class="text-gray-300 mb-6">{{ item.description }}</p>
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
              <Button href="https://discord.gg/astarnetwork" target="_blank">
                <component
                  :is="Discord"
                  class="h-5 w-5 mr-1.5"
                  aria-hidden="true"
                />
                {{ item.buttonLabel }}
                <ArrowTopRightOnSquareIcon class="w-5 h-5 ml-1 stroke-2" />
              </Button>
            </template>

            <template v-else-if="item.slug === 'partnerships'">
              <button
                class="btn"
                data-tf-popup="XcL9Ii6l"
                data-tf-opacity="100"
                data-tf-size="100"
                data-tf-iframe-props="title=Partnerships"
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
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

useHead({
  script: [{ src: "//embed.typeform.com/next/embed.js" }],
});

const route = useRoute();
import { meta } from "../content/meta";
const seoTitle = `Contact Us | ${meta.siteName} - ${meta.tagline}`;
const seoDescription = "Get in touch with the Astar Network team";
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
    title: "Marketing Request",
    description: "Interested in working together on your creative ideas?",
    buttonLabel: "Let's Connect",
    icon: Marketing,
  },
  {
    slug: "partnerships",
    title: "Partnerships",
    description: "dApp staking and integrations support.",
    buttonLabel: "Get support",
    icon: Partnerships,
  },
  {
    slug: "technical",
    title: "Technical Support",
    description:
      "If you have any technical problems or questions, please ask in Discord",
    buttonLabel: "Discord Channel",
    icon: Technical,
  },
  {
    slug: "other",
    title: "For all other Inquiries",
    description:
      "Partnership request, listing, business services, events, etc.",
    buttonLabel: "Contact Us",
    icon: null,
  },
];
</script>

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
.btn {
  @apply shadow font-medium transition-all inline-block hover:cursor-pointer text-white rounded-xl px-4 py-2;
  background: linear-gradient(
    120deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
}
.btn:hover {
  background: linear-gradient(
    120deg,
    #ff1994 -5.88%,
    #8e4fee 15.42%,
    #3091f9 40.77%,
    #3db1ff 72.21%,
    #3fe9ff 95.53%
  );
}
</style>
