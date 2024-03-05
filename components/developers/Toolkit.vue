<template>
  <div class="relative">
    <div data-aos="zoom-out-left" class="absolute right-4 z-[4]">
      <img
        class="h-48 lg:h-auto float-animation"
        src="/images/developers/toolkit-bg.svg"
        alt="Astar Developer Toolkit"
        width="556"
        height="294"
      />
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-40">
      <h2 class="title text-center mb-8 sm:mb-12 whitespace-pre-wrap">
        <span>{{ $t("developers.toolkit.title") }}</span>
      </h2>
      <p class="text-center mb-12 sm:mb-28">
        {{ $t("developers.toolkit.description") }}<br />
        <NuxtLink
          to="/community/ecosystem"
          class="text-space-cyan transition hover:text-space-cyan-light hover:underline"
        >
          {{ $t("developers.toolkit.ecosystem") }}
          <ArrowRightIcon class="inline-block w-5 h-5 stroke-2" />
        </NuxtLink>
      </p>
      <div class="px-4 sm:px-6">
        <div
          class="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-20 sm:grid-cols-4 lg:grid-cols-5"
        >
          <div
            v-for="item in projects"
            class="flex items-center justify-center"
          >
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

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
</script>
