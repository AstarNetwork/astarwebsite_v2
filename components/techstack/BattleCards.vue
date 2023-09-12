<template>
  <h2 class="title-zkevm text-center mb-12">
    <span>{{ $t("techstack.solution.title") }}</span>
  </h2>
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
      <h3 class="font-extrabold text-2xl sm:text-3xl mb-4 sm:mb-6 leading-snug">
        <span
          v-if="index === 1"
          class="text-[#DA55FF] block font-normal text-tiny"
        >
          Coming Soon!
        </span>
        {{ item.title }}
      </h3>
      <p class="text-tiny sm:text-base">{{ item.description }}</p>
      <ul class="space-y-2 my-10 text-tiny sm:text-base">
        <li v-for="feature in item.features" class="flex">
          <CheckCircleIcon
            :class="index === 0 ? 'text-space-blue-lighter' : 'text-[#8940EF]'"
            class="w-5 sm:w-6 h-5 sm:h-6 mr-2 shrink-0"
          />
          {{ feature }}
        </li>
      </ul>
      <div class="text-center">
        <Button
          variant="outlined"
          color="secondary"
          :href="item.url"
          class="w-60"
        >
          {{ item.lean_more }}
          <ArrowTopRightOnSquareIcon
            v-if="item.url.includes('https')"
            class="w-5 h-5 stroke-2 ml-1"
          />
          <span v-else class="pl-1">-></span>
        </Button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const { t } = useI18n();

const battleCards = [
  {
    slug: "substrate",
    title: "Astar Substrate",
    description: t("techstack.solution.substrate.description"),
    poweredBy: {
      image: "/images/techstack/polkadot-logo.svg",
      text: "Polkadot",
    },
    features: [
      t("techstack.solution.substrate.features.multi_vm_support"),
      t("techstack.solution.substrate.features.rust_and_ink"),
      t(
        "techstack.solution.substrate.features.interoperability_and_composability"
      ),
      t("techstack.solution.substrate.features.secured"),
      t("techstack.solution.substrate.features.dapp_staking_rewards"),
      t("techstack.solution.substrate.features.low_fees"),
    ],
    lean_more: t("techstack.lean_more.docs"),
    url: "https://docs.astar.network/docs/build/",
  },
  {
    slug: "zkevm",
    title: "Astar zkEVM",
    description: t("techstack.solution.zkevm.description"),
    poweredBy: {
      image: "/images/techstack/polygon-logo.svg",
      text: "Polygon",
    },
    features: [
      t("techstack.solution.zkevm.features.ethereum_security"),
      t("techstack.solution.zkevm.features.high_scalability"),
      t("techstack.solution.zkevm.features.low_fees"),
      t("techstack.solution.zkevm.features.access"),
      t("techstack.solution.zkevm.features.developer_experience"),
    ],
    lean_more: t("techstack.lean_more.blog"),
    url: "",
  },
];
</script>
