<template>
  <li>
    <!-- post.slug is the slug of the article -->
    <NuxtLink
      :href="'/blog/' + post.slug"
      class="block rounded overflow-hidden bg-space-gray group hover:bg-space-gray-lighter transition h-full"
    >
      <img
        :src="post.image"
        alt=""
        class="object-cover w-full h-[240px] group-hover:brightness-110"
      />
      <div class="p-4 sm:p-5 pb-8 sm:pb-12">
        <time class="text-gray-400 text-tiny">{{ post.publishedDate }}</time>
        <p class="text-white text-lg line-clamp-3 leading-7 mt-1">
          {{ post.title }}
        </p>
      </div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  post: {
    type: Object,
    default: null,
  },
});
</script>
