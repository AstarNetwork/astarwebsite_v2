<template>
  <NuxtLink
    v-for="item in sortedProjects"
    :to="item.attributes.website"
    target="_blank"
  >
    <span
      class="block transition py-4 px-2"
      :class="item.attributes.website && 'hover:shadow-lg'"
    >
      <img
        :src="useStrapiMedia(item.attributes.logo.data.attributes.url)"
        :alt="item.attributes.name"
        class="w-56 h-20 object-contain mx-auto logo-image"
      />
    </span>
    <span class="text-center block text-gray-600 my-1">
      {{ item.attributes.name }}
    </span>
    <ul class="flex justify-center">
      <li
        v-for="category in item.attributes.project_categories.data"
        class="text-xs bg-gray-200 text-gray-500 py-0.5 px-2 rounded m-0.5 whitespace-nowrap"
      >
        {{ category.attributes.name }}
      </li>
    </ul>
    <span
      v-if="item.attributes.description"
      class="text-center block text-gray-400 text-sm mt-1"
    >
      {{ item.attributes.description }}
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
