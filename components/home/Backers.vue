<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <h2
      class="text-center text-space-gray-dark text-3xl lg:text-4xl font-bold mb-20"
    >
      {{ $t("home.backers") }}
    </h2>
    <div
      class="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-20 sm:grid-cols-4 lg:grid-cols-5"
    >
      <div v-for="item in projects" class="flex items-center justify-center">
        <NuxtLink
          :to="item.attributes.website"
          target="_blank"
          class="hover:opacity-80"
        >
          <img
            :src="useStrapiMedia(item.attributes.logo.data.attributes.url)"
            :alt="item.attributes.name"
            class="h-12 w-32 lg:w-48 object-contain"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gql from "graphql-tag";

const query = gql`
  query getAllData {
    projects(
      pagination: { page: 1, pageSize: 100 }
      filters: { project_categories: { id: { eq: 9 } } }
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
        }
      }
    }
  }
`;
const { data } = await useAsyncQuery({ query, clientId: "community" });

let projects = [];
if (data.value !== null) {
  projects = data.value.projects.data.sort((a, b) => {
    if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
      return 1;
    } else {
      return -1;
    }
  });
}
</script>
