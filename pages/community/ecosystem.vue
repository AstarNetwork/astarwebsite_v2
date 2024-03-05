<template>
  <NuxtLayout name="default">
    <SubPageHeader
      :title="$t('ecosystem.title')"
      :description="$t('ecosystem.description')"
    />

    <div
      class="container-lg mb-40 flex flex-col sm:flex-row gap-4 lg:gap-8 shrink-0"
    >
      <div class="sm:w-36 lg:w-56">
        <RadioGroup
          v-model="category.name"
          class="flex flex-row sm:flex-col flex-wrap gap-0.5"
        >
          <RadioGroupLabel
            class="text-slate-950 font-semibold inline sm:block pr-2 py-2 lg:py-3 text-xs sm:text-sm lg:text-base"
          >
            {{ $t("ecosystem.categories") }}
          </RadioGroupLabel>
          <RadioGroupOption
            v-slot="{ checked }"
            :value="category.name"
            v-for="category in categories"
          >
            <span :class="checked ? 'tab current' : 'tab'">
              {{ category.name }}
              <span class="text-xs">({{ category.projects.length }})</span>
            </span>
          </RadioGroupOption>
        </RadioGroup>
      </div>
      <div class="flex-1">
        <EcosystemLogoList
          v-if="isLoading"
          :projects="projects"
          :category="category.name"
        />
        <EcosystemLoading v-else />
      </div>
    </div>

    <div class="absolute -z-10 left-0 top-0">
      <img src="/images/common/gradient-bg.svg" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import gql from "graphql-tag";
import { ProjectType, QueryResponse } from "@/types";

const query = gql`
  query getAllData {
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
    projectCategories(pagination: { page: 1, pageSize: 20 }, sort: "name") {
      data {
        id
        attributes {
          name
          projects(pagination: { page: 1, pageSize: 1000 }, sort: "name") {
            data {
              id
            }
          }
        }
      }
    }
  }
`;
const { data } = await useLazyAsyncQuery<QueryResponse>({
  query,
  clientId: "community",
});

interface CategoryType {
  name: string;
  projects: ProjectType[];
}

let projects = ref<ProjectType[]>([]);
let categories = ref<CategoryType[]>([{ name: "All", projects: [] }]);
let category = ref<CategoryType>(categories.value[0]);
let isLoading = ref<Boolean>(false);

isLoading = computed(() => (data.value !== null ? true : false));

projects = computed(() =>
  data.value !== null ? data.value.projects.data : []
);

categories = computed(() => {
  if (data.value !== null) {
    return [{ name: "All", projects: projects.value }].concat(
      data.value.projectCategories.data.map((category) => {
        return {
          name: category.attributes.name,
          projects: category.attributes.projects.data,
        };
      })
    );
  } else {
    return [{ name: "All", projects: projects.value }];
  }
});

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
