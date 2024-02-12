<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-extrabold drop-shadow text-center leading-none pt-12"
        >
          {{ $t("ecosystem.title") }}
        </h1>
      </SubPageHeader>

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
        <!-- Pagination Controls -->
        <div class="flex justify-center items-center space-x-2 text-black">
          <button @click="prevPage" :disabled="currentPage <= 1">Prev</button>
          <span>Page {{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage" :disabled="currentPage >= totalPages">
            Next
          </button>
        </div>
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
      <hr class="mb-20" />
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import gql from "graphql-tag";

interface ProjectAttributes {
  id: number;
  attributes: {
    name: string;
    website?: string;
    description?: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    project_categories: {
      data: CategoryAttributes[];
    };
  };
}

interface CategoryAttributes {
  id: number;
  attributes: {
    name: string;
    projects: {
      data: ProjectAttributes[];
    };
  };
}

interface QueryResponse {
  projects: {
    meta: {
      pagination: {
        total: number;
      };
    };
    data: ProjectAttributes[];
  };
  projectCategories: {
    data: CategoryAttributes[];
  };
}

const pageSize = 16;
let projects = ref<ProjectAttributes[]>([]);
let categories = ref<CategoryAttributes[]>([]);
let totalProjects = ref(0);
let currentPage = ref(1);
let totalPages = computed(() => Math.ceil(totalProjects.value / pageSize));

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

async function fetchData() {
  let query = gql`
  query getAllData {
    projects(
      pagination: { page: ${currentPage.value}, pageSize: ${pageSize} }
      sort: "name"
      filters: { id: { ne: 300 } }
    ) {
      meta {
        pagination {
          total
        }
      }
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

  let { data } = await useAsyncQuery<QueryResponse>({
    query,
    clientId: "community",
  });

  if (data.value !== null) {
    projects.value = [...data.value.projects.data];
    categories.value = [...data.value.projectCategories.data];
    totalProjects.value = data.value.projects.meta.pagination.total;
  }
}

watch(
  currentPage,
  () => {
    fetchData();
  },
  { immediate: true }
);

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
