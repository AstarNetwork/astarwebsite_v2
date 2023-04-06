<template>
  <section>
    <p class="text-center font-bold text-2xl sm:text-3xl title">
      <span>What We Offer</span>
    </p>
    <h2
      class="text-center mt-2 mb-8 sm:mb-12 mx-auto max-w-2xl text-2xl sm:text-3xl font-medium text-black leading-tight sm:leading-snug"
    >
      {{ $t("meta.partners.description") }}
    </h2>
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
      <li
        v-for="item in offer"
        class="p-6 lg:p-10 rounded border border-gray-500"
      >
        <img
          :src="useAsset('incubation/home/' + item.image)"
          :alt="item.text"
        />
        <p class="text-black text-xl mt-5 mb-2 leading-snug">
          {{ item.text }}
        </p>
        <NuxtLink
          :to="`/incubation/program#${item.link}`"
          class="text-space-blue transition hover:underline hover:text-space-blue-lighter"
        >
          {{ $t("learn_more") }}
          <ArrowRightIcon class="w-5 h-5 inline-block ml-1" />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const { t } = useI18n();

const offer = [
  {
    text: t("program.offer.connection.lead"),
    image: "icon-connection.svg",
    link: "connection",
  },
  {
    text: t("program.offer.support.lead"),
    image: "icon-support.svg",
    link: "support",
  },
  {
    text: t("program.offer.grow.lead"),
    image: "icon-grow.svg",
    link: "grow",
  },
];
</script>
