<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="text-center mb-20">
      <span
        class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight title"
      >
        <span class="whitespace-pre-wrap">
          {{ $t("home.ecosystem.title") }}
        </span>
      </span>
    </h2>
    <ul class="grid sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-8">
      <li v-for="(item, index) in developers">
        <div class="mb-4">
          <img
            class="mx-auto"
            :src="'/images/home/' + item.image"
            :alt="item.name"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
            width="240"
            height="210"
            data-not-lazy
          />
        </div>
        <h3
          class="text-2xl font-bold text-center sm:text-left"
          :class="item.color"
        >
          {{ item.name }}
        </h3>
        <p class="my-2">{{ item.description }}</p>
        <NuxtLink
          :to="item.href"
          target="_blank"
          :class="item.color"
          class="hover:underline transition flex items-center"
        >
          {{ $t("learn_more") }}
          <ArrowTopRightOnSquareIcon class="w-5 h-5 stroke-2 ml-1" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const { t } = useI18n();

const developers = [
  {
    name: t("home.ecosystem.developer.title"),
    image: "become-developer.svg",
    description: t("home.ecosystem.developer.description"),
    href: "https://docs.astar.network/docs/build/",
    color: "text-space-pink hover:text-space-pink-lighter",
  },
  {
    name: t("home.ecosystem.collator.title"),
    image: "become-collator.svg",
    description: t("home.ecosystem.collator.description"),
    href: "https://docs.astar.network/docs/nodes/",
    color: "text-space-sky hover:text-space-sky-lighter",
  },
  {
    name: t("home.ecosystem.staker.title"),
    image: "become-staker.svg",
    description: t("home.ecosystem.staker.description"),
    href: "https://portal.astar.network/#/astar/dapp-staking/discover",
    color: "text-space-cyan hover:text-space-cyan-lighter",
  },
  {
    name: t("home.ecosystem.users.title"),
    image: "become-users.svg",
    description: t("home.ecosystem.users.description"),
    href: "https://portal.astar.network/#/astar/assets",
    color: "text-space-teal hover:text-space-teal-lighter",
  },
];
</script>
