<template>
  <div class="container-md py-12 sm:py-20">
    <h2
      class="mb-8 text-center text-4xl tracking-tight text-white sm:mb-12 sm:text-6xl"
    >
      {{ $t("home.developer.title") }}
    </h2>
    <p
      class="mx-auto mb-16 max-w-3xl text-center leading-relaxed sm:mb-20 sm:text-lg"
    >
      {{ $t("home.developer.description") }}
    </p>

    <div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:gap-x-12">
      <div
        v-for="(item, index) in data"
        :key="item.slug"
        class="relative rounded-xl border p-6 sm:p-8 lg:p-12"
        :class="index === 0 ? 'border-stone-800' : 'border-slate-800'"
        data-aos="fade-up"
        :data-aos-delay="index * 100"
      >
        <img
          :src="`/images/home/developer-bg-${
            index === 0 ? 'pink' : 'blue'
          }.svg`"
          class="absolute left-0 top-0 w-full object-cover opacity-20"
        />
        <div class="relative z-10">
          <p
            class="mb-6 flex items-center justify-end space-x-2 text-xs uppercase text-slate-300 sm:text-sm"
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
          <h3 class="mb-4 text-2xl leading-snug text-white sm:mb-6 sm:text-3xl">
            {{ item.name }}
          </h3>
          <p class="leading-relaxed">
            {{ item.description }}
          </p>
          <ul class="my-10 space-y-2">
            <li v-for="feature in item.features" :key="feature" class="flex">
              <CheckCircleIcon
                :class="index === 0 ? 'text-pink' : 'text-blue'"
                class="mr-2 h-5 w-5 shrink-0 sm:h-6 sm:w-6"
              />
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:mt-12 sm:flex-row"
    >
      <Button :href="localePath('/developers/')" color="whiteGray">
        {{ $t("home.developer.cta.startBuilding") }}
      </Button>

      <Button :href="docsUrl.networks" color="whiteGray">
        {{ $t("home.developer.cta.ourNetworks") }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import { docsUrl } from "@/data/links";

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
