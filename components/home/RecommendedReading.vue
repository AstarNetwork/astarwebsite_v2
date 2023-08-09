<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <h2
      class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-center title"
    >
      <span>{{ $t("home.reading.title") }}</span>
    </h2>
    <p class="sm:text-xl text-center mt-4">
      {{ $t("home.reading.description") }}
    </p>
    <ul class="grid sm:grid-cols-3 gap-x-4 lg:gap-x-8 mt-12 sm:mt-28">
      <template v-for="(item, index) in reading">
        <li
          class="mb-16 sm:mb-0 rounded-3xl bg-space-gray"
          data-aos="flip-left"
          :data-aos-delay="index * 200"
        >
          <div class="-mx-5 -mt-12 -mb-4">
            <img
              :src="'/images/home/' + item.image"
              :alt="item.title"
              width="460"
              height="370"
              data-not-lazy
            />
          </div>
          <div class="px-6 lg:px-7 pb-12">
            <h3 class="text-xl lg:text-2xl font-bold leading-tight">
              {{ item.title }}
            </h3>
            <p class="my-3">{{ item.description }}</p>
            <NuxtLink
              :to="item.href"
              :target="item.href.includes('https') ? '_blank' : '_self'"
              class="text-space-cyan hover:text-space-cyan-lighter hover:underline transition flex items-center"
            >
              {{ $t("learn_more") }}
              <ArrowTopRightOnSquareIcon
                v-if="item.href.includes('https')"
                class="w-5 h-5 stroke-2 ml-1"
              />
              <span v-else>-></span>
            </NuxtLink>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const { t, locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

const reading = [
  {
    title: t("home.reading.vision.title"),
    description: t("home.reading.vision.description"),
    href: "https://docs.astar.network/docs/getting-started",
    image: "reading-astar.svg",
  },
  {
    title: t("home.reading.tokenomics.title"),
    description: t("home.reading.tokenomics.description"),
    href: "https://docs.astar.network/docs/about/token-economics/economics",
    image: "reading-token.svg",
  },
  {
    title: t("home.reading.ecosystem.title"),
    description: t("home.reading.ecosystem.description"),
    href: i18n + "/community/ecosystem/",
    image: "reading-ecosystem.svg",
  },
];
</script>
