<template>
  <div class="max-w-7xl p-4 mx-auto">
    <h2 class="text-white text-6xl font-bold tracking-tight text-center">
      <span>{{ $t("home.developer.title") }}</span>
    </h2>
    <p class="mx-auto max-w-3xl text-center my-12">
      {{ $t("home.developer.description") }}
    </p>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-4 lg:gap-x-12">
      <li
        v-for="(item, index) in battleCards"
        class="border border-[#263668] bg-space-gray rounded-3xl p-6 sm:p-8 lg:p-12"
      >
        <p
          class="flex justify-end items-center space-x-2 uppercase text-gray-300 text-xs sm:text-sm mb-6"
        >
          <span>
            Powered by
            <span class="sr-only">{{ item.poweredBy.text }}</span>
          </span>
          <img
            class="h-5 sm:h-6"
            :src="item.poweredBy.image"
            :alt="item.poweredBy.text"
            data-not-lazy
          />
        </p>
        <h3
          class="font-bold text-2xl sm:text-3xl mb-4 sm:mb-6 leading-snug text-white"
        >
          {{ item.title }}
        </h3>
        <p class="text-tiny sm:text-base">{{ item.description }}</p>
        <ul class="space-y-2 my-10 text-tiny sm:text-base">
          <li v-for="feature in item.features" class="flex">
            <CheckCircleIcon
              :class="index === 0 ? 'text-pink' : 'text-blue'"
              class="w-5 sm:w-6 h-5 sm:h-6 mr-2 shrink-0"
            />
            {{ feature }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const { t } = useI18n();

const battleCards = [
  {
    slug: "substrate",
    title: "Astar Substrate",
    description: t("home.developer.substrate.description"),
    poweredBy: {
      image: "/images/techstack/polkadot-logo.svg",
      text: "Polkadot",
    },
    features: [
      t("home.developer.substrate.features.multi_vm_support"),
      t("home.developer.substrate.features.rust_and_ink"),
      t("home.developer.substrate.features.interoperability_and_composability"),
      t("home.developer.substrate.features.secured"),
      t("home.developer.substrate.features.dapp_staking_rewards"),
      t("home.developer.substrate.features.low_fees"),
    ],
  },
  {
    slug: "zkevm",
    title: "Astar zkEVM",
    description: t("home.developer.zkevm.description"),
    poweredBy: {
      image: "/images/techstack/polygon-logo.svg",
      text: "Polygon",
    },
    features: [
      t("home.developer.zkevm.features.ethereum_security"),
      t("home.developer.zkevm.features.high_scalability"),
      t("home.developer.zkevm.features.low_fees"),
      t("home.developer.zkevm.features.access"),
      t("home.developer.zkevm.features.developer_experience"),
    ],
  },
];
</script>
