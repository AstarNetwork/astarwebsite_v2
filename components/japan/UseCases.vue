<template>
  <div class="bg-gradient-to-b from-white to-[#D0E9F0] relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="title text-center mb-12 sm:mb-16">
        <span>{{ $t("japan.use_cases.title") }}</span>
      </h2>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-20"
      >
        <li v-for="item in cases">
          <NuxtLink :to="item.href" target="_blank" class="block group">
            <div class="mb-4">
              <img
                class="object-cover w-full aspect-blog rounded"
                :class="item.href !== '' && 'group-hover:brightness-125'"
                :src="'/images/japan/use-cases/' + item.image"
                :alt="item.title"
              />
            </div>
            <p class="font-medium mb-2">
              {{ item.title }}
            </p>

            <p
              v-if="item.href"
              class="text-blue-600 group-hover:underline transition"
            >
              Learn more
              <ArrowTopRightOnSquareIcon
                class="w-4 h-4 inline-block stroke-2"
              />
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
const { t } = useI18n();

const cases = [
  {
    title: t("japan.use_cases.sony"),
    image: "sony.webp",
    href: "https://astar.network/incubation",
  },
  {
    title: t("japan.use_cases.toyota"),
    image: "toyota.webp",
    href: "https://medium.com/astar-network/toyota-x-astar-web3-hackathon-report-dca3a60e4413",
  },
  {
    title: t("japan.use_cases.calbee"),
    image: "calbee.webp",
    href: "https://medium.com/astar-network/leading-japanese-snack-food-maker-calbee-inc-1df16b42b2b6",
  },
  {
    title: t("japan.use_cases.eren"),
    image: "eren.webp",
    href: "https://tofunft.com/ja/launchpad/eren_the_southpaw",
  },
  {
    title: t("japan.use_cases.nikkei"),
    image: "nikkei.webp",
    href: "https://medium.com/astar-network/top-japanese-companies-join-astar-to-celebrate-web3-36766593d661",
  },
  {
    title: t("japan.use_cases.candy"),
    image: "candy.webp",
    href: "https://tofunft.com/collection/candygirl/items",
  },
];
</script>
