<template>
  <h2 class="title text-center mb-6 sm:mb-16">
    <span>{{ $t("japan.members.title") }}</span>
  </h2>

  <div class="container-lg flex flex-col sm:flex-row gap-4 lg:gap-8 shrink-0">
    <div class="sm:w-36 lg:w-56">
      <RadioGroup
        v-if="false"
        v-model="chain"
        class="flex flex-row sm:flex-col flex-wrap gap-0.5 mb-2 sm:mb-6"
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
          <span :class="checked ? 'tab current' : 'tab'">{{ chain }}</span>
        </RadioGroupOption>
      </RadioGroup>

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
        :chain="chain"
      />
      <EcosystemLoading v-else />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";
import gql from "graphql-tag";
import { ProjectType, QueryResponse } from "@/types";

const query = gql`
  query getAllData {
    projects(
      pagination: { page: 1, pageSize: 1000 }
      sort: "name"
      filters: { project_categories: { id: { eq: 15 } } }
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
            filters: { project_categories: { id: { eq: 15 } } }
          ) {
            data {
              id
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
const { data } = await useLazyAsyncQuery<QueryResponse>({
  query,
  clientId: "community",
});

interface CategoryType {
  name: string;
  id: number;
  projects: ProjectType[];
}

let projects = ref<ProjectType[]>([]);
let categories = ref<CategoryType[]>([{ name: "All", id: 0, projects: [] }]);
let category = ref<CategoryType>(categories.value[0]);
let chains = ref<string[]>(["All"]);
let chain = ref<string>(chains.value[0]);
let isLoading = ref<Boolean>(false);

isLoading = computed(() => (data.value !== null ? true : false));

projects = computed(() =>
  data.value !== null ? data.value.projects.data : []
);

categories = computed(() => {
  if (data.value !== null) {
    return [{ name: "All", id: 0, projects: projects.value }]
      .concat(
        data.value.projectCategories.data.map((category) => {
          return {
            name: category.attributes.name,
            id: Number(category.id),
            projects: category.attributes.projects.data,
          };
        })
      )
      .filter((category) => category.projects.length > 0 && category.id !== 15);
  } else {
    return [{ name: "All", id: 0, projects: projects.value }];
  }
});

chains = computed(() =>
  data.value !== null
    ? ["All"].concat(
        data.value.projectChains.data.map((chain) => chain.attributes.name)
      )
    : ["All"]
);
</script>
