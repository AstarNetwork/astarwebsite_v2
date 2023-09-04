<template>
  <div>
    <h2 class="title-zkevm text-center mb-8 sm:mb-20 whitespace-pre-wrap">
      <span>{{ $t("techstack.toolkit.title") }}</span>
    </h2>

    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-20">
      <li class="text-center" v-for="item in toolkit">
        <img
          :src="item.logo"
          :alt="item.name"
          class="w-full max-w-[280px] sm:max-w-none mx-auto"
        />
        <span
          v-if="item.comingSoon"
          class="inline-block mt-2 bg-white/20 rounded text-sm px-3 py-1"
        >
          Coming Soon!
        </span>
      </li>
    </ul>

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
            :src="
              useStrapiMedia(
                item.attributes.logo_white.data !== null
                  ? item.attributes.logo_white.data.attributes.url
                  : item.attributes.logo.data.attributes.url
              )
            "
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
      filters: { project_categories: { id: { eq: 16 } } }
    ) {
      data {
        attributes {
          name
          website
          description
          logo_white {
            data {
              attributes {
                url
              }
            }
          }
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

const toolkit = [
  {
    logo: "/images/techstack/zkevm-logo.svg",
    name: "Astar zkEVM",
    comingSoon: true,
  },
  {
    logo: "/images/techstack/astar-link-logo.svg",
    name: "Astar Link",
    comingSoon: true,
  },
  {
    logo: "/images/techstack/astar-logo.svg",
    name: "Astar 1.0",
    comingSoon: false,
  },
];
</script>
