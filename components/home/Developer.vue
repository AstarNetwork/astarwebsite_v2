<template>
  <div class="container-md py-12 sm:py-20">
    <h2
      class="text-white text-4xl sm:text-6xl tracking-tight text-center mb-8 sm:mb-12"
    >
      {{ $t("home.developer.title") }}
    </h2>
    <p
      class="mx-auto max-w-3xl text-center mb-16 sm:mb-20 sm:text-lg leading-relaxed"
    >
      {{ $t("home.developer.description") }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 lg:gap-x-12">
      <div
        v-for="(item, index) in data"
        class="border border-slate-800 rounded-xl p-6 sm:p-8 lg:p-12 relative"
      >
        <img
          :src="`/images/home/developer-bg-${
            index === 0 ? 'pink' : 'blue'
          }.svg`"
          class="w-full object-cover absolute left-0 top-0 opacity-20"
        />
        <div class="relative z-10">
          <p
            class="flex justify-end items-center space-x-2 uppercase text-slate-300 text-xs sm:text-sm mb-6"
          >
            <span>
              {{ $t("home.developer.poweredBy") }}
              <span class="sr-only">{{ item.poweredBy.text }}</span>
            </span>
            <img
              class="h-5 sm:h-6"
              :src="item.poweredBy.image"
              :alt="item.poweredBy.text"
            />
          </p>
          <h3 class="text-2xl sm:text-3xl mb-4 sm:mb-6 leading-snug text-white">
            {{ item.name }}
          </h3>
          <p class="leading-relaxed">{{ item.description }}</p>
          <ul class="space-y-2 my-10">
            <li v-for="feature in item.features" class="flex">
              <CheckCircleIcon
                :class="index === 0 ? 'text-pink' : 'text-blue'"
                class="w-5 sm:w-6 h-5 sm:h-6 mr-2 shrink-0"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center mt-8 sm:mt-12">
      <Button :href="localePath('/developers/')" color="whiteGray">
        {{ $t("home.developer.cta") }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
import { CheckCircleIcon } from "@heroicons/vue/24/solid";

const { t } = useI18n();

const data = [
  {
    slug: "substrate",
    name: "Astar Substrate",
    description: t("home.developer.substrate.description"),
    poweredBy: {
      image: "/images/home/polkadot-logo.svg",
      text: "Polkadot",
    },
    features: [
      t("home.developer.substrate.features.multiVmSupport"),
      t("home.developer.substrate.features.rustAndInk"),
      t("home.developer.substrate.features.interoperabilityAndComposability"),
      t("home.developer.substrate.features.secured"),
      t("home.developer.substrate.features.dappStakingRewards"),
      t("home.developer.substrate.features.lowFees"),
    ],
  },
  {
    slug: "zkevm",
    name: "Astar zkEVM",
    description: t("home.developer.zkevm.description"),
    poweredBy: {
      image: "/images/home/polygon-logo.svg",
      text: "Polygon",
    },
    features: [
      t("home.developer.zkevm.features.ethereumSecurity"),
      t("home.developer.zkevm.features.highScalability"),
      t("home.developer.zkevm.features.lowFees"),
      t("home.developer.zkevm.features.access"),
      t("home.developer.zkevm.features.developerExperience"),
    ],
  },
];
</script>
