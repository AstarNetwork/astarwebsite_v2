<template>
  <div
    class="text-gray-600 max-w-7xl mx-auto lg:text-lg space-y-16 sm:space-y-32 px-4 sm:px-6"
  >
    <div v-for="(item, index) in features" class="sm:flex">
      <div
        data-aos="fade-up"
        class="shrink-0 mb-6 sm:mb-0"
        :class="index % 2 === 0 && 'sm:order-2'"
      >
        <img
          :src="'/images/home/' + item.image"
          :alt="item.title"
          class="mx-auto"
          width="614"
          height="382"
          data-not-lazy
        />
      </div>
      <div :class="index % 2 === 0 && 'sm:order-1'">
        <h2>
          <span>{{ item.title }}</span>
        </h2>
        <p>{{ item.description }}</p>
        <NuxtLink :to="item.href" target="_blank" class="flex items-center">
          {{ $t("learn_more") }}
          <ArrowTopRightOnSquareIcon class="w-5 h-5 stroke-2 ml-1" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const { t } = useI18n();

const features = [
  {
    title: t("home.features.multichain.title"),
    description: t("home.features.multichain.description"),
    href: "https://www.youtube.com/watch?v=bJgMm4SUSJQ&t=134s",
    image: "features-multichain.svg",
  },
  {
    title: t("home.features.build2earn.title"),
    description: t("home.features.build2earn.description"),
    href: "https://docs.astar.network/docs/dapp-staking/",
    image: "features-basic-income.svg",
  },
  {
    title: t("home.features.web2_web3.title"),
    description: t("home.features.web2_web3.description"),
    href: "https://docs.astar.network/docs/build/",
    image: "features-web2-web3.svg",
  },
];
</script>

<style lang="postcss" scoped>
h2 {
  @apply leading-[1.1] text-3xl lg:text-4xl font-bold;
}
h2 span {
  background: linear-gradient(
    120deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  @apply my-4 sm:my-6;
}
a {
  @apply text-space-blue hover:underline hover:text-space-blue-lighter transition;
}
img {
  @apply max-w-[350px] lg:max-w-full;
}
</style>
