<template>
  <div class="container-md py-12 sm:py-20">
    <h2
      class="text-white text-4xl sm:text-6xl tracking-tight text-center mb-8 sm:mb-12"
    >
      Funding
    </h2>
    <p
      class="mx-auto max-w-3xl text-center mb-16 sm:mb-20 sm:text-lg leading-relaxed"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,
    </p>

    <div class="space-y-6 sm:space-y-12">
      <div
        v-for="(item, index) in data"
        class="border border-gray-700 flex items-center flex-col sm:flex-row rounded-xl"
      >
        <div class="flex-1" :class="index === 1 ? '' : 'sm:order-2'">
          <img
            :src="`/images/home/${item.image}`"
            :alt="item.title"
            class="w-full"
          />
        </div>
        <div
          class="flex-1 pb-12 sm:py-24 px-6"
          :class="index === 1 ? 'sm:pr-16 sm:pl-0' : 'sm:pl-16 sm:pr-0'"
        >
          <h3
            class="text-white text-3xl sm:text-5xl tracking-tight mb-6 text-center sm:text-left"
          >
            {{ item.title }}
          </h3>
          <p class="mb-6 sm:mb-12 leading-relaxed">{{ item.description }}</p>
          <div class="flex gap-6 sm:gap-12 justify-center sm:justify-start">
            <div v-for="stat in item.stats" class="text-center">
              <div class="text-blue font-semibold text-4xl sm:text-6xl mb-1">
                {{ stat.number }}{{ stat.unitModifier }}
              </div>
              <div class="text-sm sm:text-base">{{ stat.name }}</div>
              <div v-if="stat.caption" class="text-xs">{{ stat.caption }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-8 sm:mt-12">
      <Button :href="localePath('/developers/')" color="whiteGray">
        Developer support
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const data = [
  {
    title: "Global Hackathons",
    description: "A collection of funding to connect you to web3.",
    image: "funding-hackathons.svg",
    stats: [
      { name: "Prize (USD)", number: 100, unitModifier: "k+" },
      { name: "Applications", number: 5000, unitModifier: "+" },
    ],
  },
  {
    title: "dApp Staking",
    description:
      "An incentivized program to connect developers to the Astar community, where everyone is rewarded.",
    image: "funding-dapp-staking.svg",
    stats: [
      { name: "Tier 1 Rewards (USD)", number: 40, unitModifier: "k" },
      {
        name: "Total stakers",
        number: 20,
        unitModifier: "k+",
        caption: "(subject to market)",
      },
    ],
  },
];
</script>
