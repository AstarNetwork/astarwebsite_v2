<template>
  <!-- Search Box -->
  <div class="mb-4 sm:mb-6">
    <label for="search" class="sr-only">
      {{ $t("ecosystem.searchTheEcosystem") }}
    </label>
    <div class="relative text-slate-950">
      <div
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
      >
        <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
      </div>
      <input
        v-model="searchTerm"
        type="text"
        :placeholder="`${$t('ecosystem.searchTheEcosystem')}...`"
        class="block border border-slate-300 bg-white rounded-full p-3 lg:p-4 pl-10 lg:pl-10 w-full focus:ring-1 focus:ring-blue/50 placeholder:text-slate-400 text-slate-950"
      />
    </div>
  </div>

  <div class="tab-panel">
    <NuxtLink
      v-for="item in paginatedProjects"
      :key="item.id"
      :to="item.attributes.website"
      target="_blank"
      class="border border-slate-200 bg-white rounded-md transition p-4 block"
      :class="item.attributes.website && 'hover:shadow-xl'"
    >
      <span class="block py-4 mb-2 lg:mb-4">
        <img
          :src="useStrapiMedia(item.attributes.logo.data.attributes.url)"
          :alt="item.attributes.name"
          class="w-32 lg:w-48 h-12 lg:h-16 object-contain mx-auto logo-image"
        />
      </span>
      <div class="space-y-2 pb-4">
        <span
          class="text-center block text-slate-950 font-medium my-1 text-sm lg:text-base"
        >
          {{ item.attributes.name }}
        </span>
        <ul class="flex justify-center flex-wrap gap-1">
          <li
            v-for="category in item.attributes.project_categories.data"
            class="text-xs bg-slate-200 text-slate-500 py-1 px-2 rounded-sm whitespace-nowrap"
          >
            {{ category.attributes.name }}
          </li>
        </ul>
        <span
          v-if="item.attributes.description"
          class="text-center block text-slate-500 text-xs lg:text-sm"
        >
          {{ item.attributes.description }}
        </span>
      </div>
    </NuxtLink>
  </div>

  <!-- Pagination Controls -->
  <div
    v-if="totalPages > 1"
    class="flex justify-center items-center gap-4 my-4 w-full mt-6 lg:mt-12"
  >
    <button
      @click="prevPage"
      :disabled="currentPage === 1"
      class="flex items-center justify-center border border-blue rounded-full w-12 h-12 relative group text-blue disabled:border-gray-300 disabled:text-gray-300 disabled:pointer-events-none"
    >
      <span class="sr-only">Previous</span>
      <span
        class="w-0 h-0 group-hover:bg-blue group-hover:w-12 group-hover:h-12 absolute duration-300 ease-out rounded-full"
      />
      <ArrowLeftIcon
        class="w-5 h-5 group-hover:text-white transition relative z-10"
      />
    </button>
    <span class=""> {{ currentPage }} / {{ totalPages }} </span>
    <button
      @click="nextPage"
      :disabled="currentPage === totalPages"
      class="flex items-center justify-center border border-blue rounded-full w-12 h-12 relative group text-blue disabled:border-gray-300 disabled:text-gray-300 disabled:pointer-events-none"
    >
      <span class="sr-only">Next</span>
      <span
        class="w-0 h-0 group-hover:bg-blue group-hover:w-12 group-hover:h-12 absolute duration-300 ease-out rounded-full"
      />
      <ArrowRightIcon
        class="w-5 h-5 group-hover:text-white transition relative z-10"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/vue/24/outline";
import { ProjectType } from "@/types";

interface Props {
  projects: ProjectType[];
  category: string;
}

const props = withDefaults(defineProps<Props>(), {
  projects: () => [] as ProjectType[],
  category: () => "",
});

// Updated computed property to filter by chain and search term
const sortedProjects = computed(() => {
  return props.projects
    .filter((project) => {
      // Filter by category if specified
      const categoryMatch =
        props.category === "All" || !props.category
          ? true
          : project.attributes.project_categories.data.some(
              (category) => category.attributes.name === props.category
            );

      // Filter by search term if specified
      const searchMatch = project.attributes.name
        .toLowerCase()
        .includes(searchTerm.value.toLowerCase());

      return categoryMatch && searchMatch;
    })
    .sort((a, b) =>
      a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase() ? 1 : -1
    );
});

// Reactive property for search term
const searchTerm = ref("");
const currentPage = ref(1);
const projectsPerPage = ref(16);

// Watcher that resets currentPage to 1 whenever sortedProjects changes
watch(
  sortedProjects,
  () => {
    currentPage.value = 1;
  },
  { deep: true }
);

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
