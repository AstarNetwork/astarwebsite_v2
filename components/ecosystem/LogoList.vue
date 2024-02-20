<template>
  <NuxtLink
    v-for="item in sortedProjects"
    :to="item.attributes.website"
    target="_blank"
    class="border border-slate-200 bg-white rounded-md transition p-4 sm:p-6"
    :class="item.attributes.website && 'hover:shadow-xl'"
  >
    <span class="block py-4 mb-2 lg:mb-4">
      <img
        :src="useStrapiMedia(item.attributes.logo.data.attributes.url)"
        :alt="item.attributes.name"
        class="w-32 lg:w-48 h-12 lg:h-16 object-contain mx-auto logo-image"
      />
    </span>
    <span class="space-y-2">
      <span
        class="text-center block text-slate-950 font-medium my-1 text-sm lg:text-base"
      >
        {{ item.attributes.name }}
      </span>
      <ul class="flex justify-center flex-wrap">
        <li
          v-for="category in item.attributes.project_categories.data"
          class="text-xs bg-slate-200 text-slate-500 py-0.5 px-2 rounded-sm m-0.5 whitespace-nowrap"
        >
          {{ category.attributes.name }}
        </li>
      </ul>
      <ul class="flex justify-center flex-wrap">
        <li
          v-for="chain in item.attributes.project_chains.data"
          class="text-xs bg-red-200 text-red-500 py-0.5 px-2 rounded-sm m-0.5 whitespace-nowrap"
        >
          {{ chain.attributes.name }}
        </li>
      </ul>
      <span
        v-if="item.attributes.description"
        class="text-center block text-slate-500 text-xs lg:text-sm"
      >
        {{ item.attributes.description }}
      </span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ProjectType } from "@/types";

interface Props {
  projects: ProjectType[];
}

const props = withDefaults(defineProps<Props>(), {
  projects: () => [] as ProjectType[],
});

const sortedProjects = props.projects.sort((a, b) => {
  if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
});
</script>
