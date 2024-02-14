<template>
  <!-- post.slug is the slug of the article -->
  <NuxtLink
    :href="i18n + '/blog/' + post.slug"
    class="block rounded-md overflow-hidden bg-white/50 group transition h-full shadow-lg"
  >
    <img
      :src="post.image"
      :alt="post.title"
      class="object-cover w-full aspect-blog group-hover:brightness-110"
    />
    <div class="p-4 sm:p-5 pb-8 sm:pb-12">
      <time class="text-gray-500">{{ post.publishedDate }}</time>
      <p class="text-gray-950 text-lg line-clamp-3 leading-7 mt-1">
        {{ post.title }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

const props = defineProps({
  post: {
    type: Object,
    default: null,
  },
});
</script>
