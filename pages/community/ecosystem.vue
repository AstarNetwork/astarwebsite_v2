<template>
  <NuxtLayout name="default">
    <SubPageHeader>
      <h1
        class="text-4xl sm:text-6xl lg:text-7xl font-bold text-center leading-none mb-10"
      >
        {{ $t("ecosystem.title") }}
      </h1>
      <p>{{ $t("ecosystem.description") }}</p>
    </SubPageHeader>

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
            <EcosystemLogoList :projects="projects" />
          </TabPanel>
          <TabPanel class="tab-panel" v-for="item in categories">
            <EcosystemLogoList :projects="item.attributes.projects.data" />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import gql from "graphql-tag";

const query = gql`
  query getAllData {
    projects(
      pagination: { page: 1, pageSize: 1000 }
      sort: "name"
      filters: { id: { ne: 300 } }
    ) {
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
    projectCategories(pagination: { page: 1, pageSize: 20 }, sort: "name") {
      data {
        id
        attributes {
          name
          projects(
            pagination: { page: 1, pageSize: 1000 }
            sort: "name"
            filters: { id: { ne: 300 } }
          ) {
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
import { meta } from "@/data/meta";
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
