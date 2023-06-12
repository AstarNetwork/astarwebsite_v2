<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 text-center">
    <h2 class="title text-center mb-4 sm:mb-8">
      <span>{{ $t("japan.members.title") }}</span>
    </h2>
    <p class="mb-12 max-w-3xl mx-auto text-sm sm:text-base">
      {{ $t("japan.members.description") }}
    </p>

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
        <Tab as="template" v-slot="{ selected }" v-for="category in categories">
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
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import gql from "graphql-tag";

const query = gql`
  query getAllData {
    projects(
      pagination: { page: 1, pageSize: 1000 }
      filters: { project_categories: { id: { eq: 15 } } }
    ) {
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
    projectCategories(
      pagination: { page: 1, pageSize: 20 }
      filters: {
        id: { ne: 15 }
        projects: { project_categories: { id: { eq: 15 } } }
      }
    ) {
      data {
        id
        attributes {
          name
          projects(
            pagination: { page: 1, pageSize: 1000 }
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
</script>
