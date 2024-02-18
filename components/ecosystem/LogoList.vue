<template>
  <NuxtLink
    v-for="item in sortedProjects"
    :to="item.attributes.website"
    target="_blank"
    class="border border-gray-300 bg-white rounded-lg transition p-4 sm:p-6 hover:bg-gray-50"
    :class="item.attributes.website && 'hover:shadow-lg'"
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
        class="text-center block text-gray-950 font-medium my-1 text-sm lg:text-base"
      >
        {{ item.attributes.name }}
      </span>
      <ul class="flex justify-center flex-wrap">
        <li
          v-for="category in item.attributes.project_categories.data"
          class="text-xs bg-gray-200 text-gray-500 py-0.5 px-2 rounded-sm m-0.5 whitespace-nowrap"
        >
          {{ category.attributes.name }}
        </li>
      </ul>
      <span
        v-if="item.attributes.description"
        class="text-center block text-gray-500 text-xs lg:text-sm"
      >
        {{ item.attributes.description }}
      </span>
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  projects: {
    type: Array,
    default: [],
  },
});

const sortedProjects = props.projects.sort((a, b) => {
  if (a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
});
</script>
