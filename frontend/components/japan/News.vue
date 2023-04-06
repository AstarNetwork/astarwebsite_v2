<template>
  <div
    class="mx-auto px-4 sm:px-6 relative z-10 lg:flex items-center justify-center"
  >
    <div class="sm:mr-12 mb-6" data-aos="zoom-out-right">
      <img
        class="mx-auto max-w-[280px] sm:max-w-[400px] lg:max-w-none"
        src="/images/japan/news-image.svg"
        alt="News"
        width="670"
        height="564"
      />
    </div>
    <div class="max-w-3xl">
      <h2 class="title mb-6 sm:mb-10 text-center lg:text-left">
        <span>News</span>
      </h2>
      <ul class="space-y-6">
        <li v-for="item in news" class="sm:flex">
          <time
            class="w-36 shrink-0 block text-gray-400 text-sm sm:text-base"
            >{{ item.publishedDate }}</time
          >
          <NuxtLink
            v-if="item.href !== ''"
            :to="item.href"
            target="_blank"
            class="hover:underline transition hover:text-space-cyan-light"
          >
            {{ item.text }}
          </NuxtLink>
          <span v-else>
            {{ item.text }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const news = [
  {
    publishedDate: "Oct 21 2022",
    text: "Astar Japan Lab 1st offline event will be held!",
    href: "",
  },
  {
    publishedDate: "Sep 26 2022",
    text: "AstarNetwork ran a full-page ad in the Nihon Keizai Shimbun and distributed NFTs in the paper.",
    href: "",
  },
  {
    publishedDate: "Sep 22 2022",
    text: "$ASTR will be listed in Japan",
    href: "",
  },
  {
    publishedDate: "Sep 2 2022",
    text: "[9/2 18:00] Astar Network x Web3 Startup",
    href: "",
  },
  {
    publishedDate: "Aug 29 2022",
    text: "AstarWeek",
    href: "",
  },
  {
    publishedDate: "Aug 16 2022",
    text: "Astar Japan Lab Activity Report and AstarWeek",
    href: "",
  },
  {
    publishedDate: "Jul 13 2022",
    text: "Astar Japan Lab Activity Report and the First Study Session",
    href: "",
  },
  {
    publishedDate: "Jun 23 2022",
    text: "Astar Japan Lab is established.",
    href: "",
  },
];
</script>
