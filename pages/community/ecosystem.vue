<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('ecosystem.title')"
      :description="$t('ecosystem.description')"
    />

    <div
      class="container-lg mb-40 flex flex-col sm:flex-row gap-4 lg:gap-8 shrink-0"
    >
      <TabGroup>
        <div class="sm:w-36 lg:w-56">
          <div class="mb-2 sm:mb-6">
            <RadioGroup
              v-model="chain"
              class="flex flex-row sm:flex-col flex-wrap gap-0.5"
            >
              <RadioGroupLabel
                class="text-slate-950 font-semibold inline sm:block pr-2 py-2 lg:py-3 text-xs sm:text-sm lg:text-base"
              >
                {{ $t("ecosystem.chain") }}
              </RadioGroupLabel>
              <RadioGroupOption
                v-slot="{ checked }"
                :value="chain"
                v-for="chain in chains"
              >
                <span :class="checked ? 'tab current' : 'tab'">{{
                  chain
                }}</span>
              </RadioGroupOption>
            </RadioGroup>
          </div>
          <TabList class="flex flex-row sm:flex-col flex-wrap gap-0.5 sm:gap-1">
            <p
              class="text-slate-950 font-semibold inline sm:block pr-2 py-2 lg:py-3 text-xs sm:text-sm lg:text-base"
            >
              {{ $t("ecosystem.categories") }}
            </p>
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
        </div>
        <TabPanels class="flex-1">
          <TabPanel>
            <EcosystemLogoList :projects="projects" :chain="chain" />
          </TabPanel>
          <TabPanel v-for="item in categories">
            <EcosystemLogoList
              :projects="item.attributes.projects.data"
              :chain="chain"
            />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>

    <div class="absolute -z-10 left-0 top-0">
      <img src="/images/common/gradient-bg.svg" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";
import gql from "graphql-tag";
import { ProjectType, RelationType, QueryResponse } from "@/types";

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
          project_chains(sort: "name") {
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
                project_chains(sort: "name") {
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
    projectChains(pagination: { page: 1, pageSize: 20 }, sort: "name") {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
const { data } = await useAsyncQuery<QueryResponse>({
  query,
  clientId: "community",
});

let projects = ref<ProjectType[]>([]);
let categories = ref<RelationType[]>([]);
let chains = ref<string[]>(["All"]);
let chain = ref<string>(chains.value[0]);

if (data.value !== null) {
  projects.value = data.value.projects.data;
  categories.value = data.value.projectCategories.data;
  chains.value = ["All"].concat(
    data.value.projectChains.data.map((chain) => chain.attributes.name)
  );
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
