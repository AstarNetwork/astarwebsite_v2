<template>
  <!-- post.slug is the slug of the article -->
  <NuxtLink
    :href="blog ? localePath(`/blog/${post.slug}`) : post.link"
    :target="!blog && post.link.includes('https') ? '_blank' : '_self'"
    class="rounded-md bg-white/50 group transition h-full shadow-lg flex items-center justify-center overflow-hidden before:absolute before:h-0 before:w-0 before:rounded-full before:duration-300 before:ease-out hover:before:h-[600px] hover:before:w-[600px] before:bg-slate-50 relative"
  >
    <div class="flex flex-col relative z-10 h-full">
      <div class="overflow-hidden">
        <img
          :src="post.image"
          :alt="post.title"
          class="object-cover w-full aspect-blog group-hover:scale-110 transition"
        >
      </div>
      <div class="p-4 sm:p-5 pb-8 flex-1">
        <time
          v-if="blog"
          class="text-slate-500 text-sm sm:text-base"
        >{{
          post.publishedAt
        }}</time>
        <h3
          class="text-slate-950 sm:text-lg line-clamp-3 leading-7 mt-1"
          :class="blog ? 'font-normal' : 'font-semibold mb-2'"
        >
          {{ post.title }}
        </h3>
        <p
          v-if="!blog"
          class="text-slate-500"
        >
          {{ post.description }}
        </p>
      </div>
      <div class="text-right self-end p-4 sm:p-5">
        <ArrowRightIcon class="w-5 h-5 text-slate-500 group-hover:text-blue" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
const localePath = useLocalePath()

defineProps({
  post: {
    type: Object,
    default: null,
  },
  blog: {
    type: Boolean,
    default: false,
  },
})
</script>
