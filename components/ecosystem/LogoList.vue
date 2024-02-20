<template>
  <NuxtLink
    v-for="item in paginatedProjects"
    :key="item.id"
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
  <!-- Pagination Controls -->
  <div v-if="totalPages > 1" class="flex justify-center space-x-4 my-4 w-full">
    <button class="tab" @click="prevPage" :disabled="currentPage === 1">
      Previous
    </button>
    <span class="min-w-max py-3 vertical-align"
      >Page {{ currentPage }} of {{ totalPages }}</span
    >
    <button
      class="tab"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { ProjectType } from "@/types";

interface Props {
  projects: ProjectType[];
  chain: string;
}

const props = withDefaults(defineProps<Props>(), {
  projects: () => [] as ProjectType[],
  chain: () => "",
});

// Use computed to ensure reactivity
const sortedProjects = computed(() => {
  return props.projects
    .filter((project) => {
      if (props.chain === "All" || !props.chain) {
        return true;
      } else {
        return project.attributes.project_chains.data.some(
          (chain) => chain.attributes.name === props.chain
        );
      }
    })
    .sort((a, b) => {
      if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
});

const currentPage = ref(1);
const projectsPerPage = ref(16);

// Watcher that resets currentPage to 1 whenever sortedProjects changes
watch(sortedProjects, () => {
  currentPage.value = 1;
}, { deep: true });

const totalPages = computed(() =>
  Math.ceil(sortedProjects.value.length / projectsPerPage.value)
);

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

const paginatedProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage.value;
  const end = start + projectsPerPage.value;
  return sortedProjects.value.slice(start, end);
});
</script>
