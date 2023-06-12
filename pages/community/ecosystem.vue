<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-cloud.webp"
          alt=""
          width="1728"
          height="1281"
          data-not-lazy
        />
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
          data-not-lazy
        />
        <div
          class="portrait:min-h-[50vh] landscape:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <h1
              class="text-4xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow text-center leading-none pt-12"
            >
              {{ $t("ecosystem.title") }}
            </h1>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <h2 class="title text-center mb-6">
          <span class="whitespace-pre-wrap">{{ $t("ecosystem.who") }}</span>
        </h2>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <p class="sm:text-xl mb-6 text-center">
          {{ $t("ecosystem.description") }}
        </p>
        <p class="text-sm">
          {{ $t("ecosystem.note") }}
        </p>
      </div>
    </template>
    <template #earth>
      <div class="relative z-10 mb-40">
        <TabGroup>
          <TabList
            class="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-12 max-w-4xl mx-auto px-4 sm:px-6 text-sm sm:text-base"
          >
            <Tab as="template" v-slot="{ selected }">
              <button
                :class="{
                  'tab current': selected,
                  tab: !selected,
                }"
              >
                All
                <span class="text-xs">({{ projects.length }})</span>
              </button>
            </Tab>
            <Tab
              as="template"
              v-slot="{ selected }"
              v-for="category in categories"
            >
              <button
                :class="{
                  'tab current': selected,
                  tab: !selected,
                }"
              >
                {{ category.attributes.name }}
                <span class="text-xs">
                  ({{ category.attributes.projects.data.length }})
                </span>
              </button>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel class="tab-panel">
              <CommunityLogoList :projects="projects" />
            </TabPanel>
            <TabPanel class="tab-panel" v-for="item in categories">
              <CommunityLogoList :projects="item.attributes.projects.data" />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
      <hr class="mb-20" />
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import gql from "graphql-tag";

const query = gql`
  query getAllData {
    projects(pagination: { page: 1, pageSize: 1000 }, sort: "name") {
      data {
        attributes {
          name
          website
          description
          logo {
            data {
              attributes {
                url
              }
            }
          }
          project_categories(sort: "name") {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
    projectCategories(pagination: { page: 1, pageSize: 20 }, sort: "name") {
      data {
        id
        attributes {
          name
          projects(pagination: { page: 1, pageSize: 1000 }, sort: "name") {
            data {
              id
              attributes {
                name
                website
                description
                logo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                project_categories(sort: "name") {
                  data {
                    id
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const { data } = await useAsyncQuery({ query, clientId: "community" });

let projects = [];
let categories = [];
if (data.value !== null) {
  projects = data.value.projects.data;
  categories = data.value.projectCategories.data;
}

const route = useRoute();
const { t } = useI18n();
import { meta } from "@/content/meta";
const seoTitle = `${t("ecosystem.title")} | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription = t("ecosystem.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}ecosystem.png`;

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

<style lang="postcss" scoped>
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}
</style>
