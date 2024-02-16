<template>
  <!-- post.slug is the slug of the article -->
  <NuxtLink
    :href="i18n + '/blog/' + post.slug"
    class="rounded-md bg-white/50 group transition h-full shadow-lg flex items-center justify-center overflow-hidden before:absolute before:h-0 before:w-0 before:rounded-full before:duration-300 before:ease-out hover:before:h-[600px] hover:before:w-[600px] before:bg-gray-50 relative"
  >
    <div class="flex flex-col relative z-10 h-full">
      <div class="overflow-hidden">
        <img
          :src="post.image"
          :alt="post.title"
          class="object-cover w-full aspect-blog group-hover:scale-110 transition"
        />
      </div>
      <div class="p-4 sm:p-5 pb-8 flex-1">
        <time class="text-gray-500">{{ post.publishedDate }}</time>
        <p class="text-gray-950 text-lg line-clamp-3 leading-7 mt-1">
          {{ post.title }}
        </p>
      </div>
      <div class="text-right self-end p-4 sm:p-5">
        <ArrowRightIcon class="w-5 h-5 text-gray-500 group-hover:text-blue" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

const props = defineProps({
  post: {
    type: Object,
    default: null,
  },
});
</script>
