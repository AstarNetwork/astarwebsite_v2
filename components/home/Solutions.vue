<template>
  <div class="container py-20">
    <h2 class="text-center text-6xl tracking-tight mb-8">Our Solutions</h2>
    <p class="text-center max-w-3xl mx-auto text-lg mb-16">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,
    </p>

    <div class="space-y-40">
      <div v-for="partner in data" class="flex gap-12">
        <div class="w-1/3 space-y-8">
          <div>
            <img
              :src="'/images/home/' + partner.image"
              :alt="partner.name"
              class=""
            />
          </div>
          <p class="flex-1">{{ partner.description }}</p>
          <div>
            <NuxtLink :to="partner.link.url">{{ partner.link.label }}</NuxtLink>
          </div>
        </div>
        <div
          class="w-2/3 divide-y divide-gray-300 border-t border-b border-gray-300"
        >
          <NuxtLink
            v-for="item in partner.useCases"
            class="flex items-center gap-4"
            :to="item.link"
          >
            <div class="shrink-0">
              <img
                :src="'/images/home/solutions/' + item.image"
                :alt="item.name"
                class="aspect-4/3 w-full max-w-[240px]"
                width="240"
                height="180"
              />
            </div>
            <p class="text-gray-950">{{ item.description }}</p>
            <ChevronRightIcon class="w-5 h-5 shrink-0" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

const data = {
  startale: {
    name: "Startale Labs",
    image: "startale-logo.svg",
    description:
      "Startale Labs is dedicated to accelerating the mass adoption of Web3, developing Japan's largest public blockchain, Astar Network, and providing Web3 infrastructure through the Startale Web3 Cloud.",
    link: {
      label: "Startale labs website",
      url: "https://startale.org/",
    },
    useCases: [
      {
        name: "Sony Network Communications",
        image: "sony.webp",
        description:
          "Sony Network Communications and Startale Labs are thrilled to announce that they have entered into a joint venture agreement dedicated to developing a blockchain that can become the backbone of global web3 infrastructure.",
        link: "https://startale.org/blog/39274",
      },
      {
        name: "BOBG",
        image: "bobg.webp",
        description:
          "BOBG is a company that provides comprehensive services to Japanese blockchain businesses, ranging from token issuance, operation, and management to cryptocurrency listing.",
        link: "",
      },
      {
        name: "UOB Venture Management and Samsung Next",
        image: "uob-samsung.webp",
        description:
          "Startale Labs secured a total of $3.5m in funding from UOB Venture Management, a wholly-owned subsidiary of one of Singapore's top three banks, United Overseas Bank, and Samsung Next, the CVC arm of Samsung.",
        link: "",
      },
    ],
  },
  japanLab: {
    name: "Astar Japan Lab",
    image: "astar-japan-lab-logo.svg",
    description:
      "Astar Japan Lab fuels the growth of Japanese services and businesses by conducting research and development, gathering knowledge, and collaborating with exciting and established companies.",
    link: {
      label: "Astar Japan Lab",
      url: "/japan/",
    },
    useCases: [
      {
        name: "Shibuya City",
        image: "shibuya.webp",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        link: "",
      },
      {
        name: "FUJITSU",
        image: "fujitsu.webp",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
        link: "",
      },
      {
        name: "Deloitte Tohmatsu",
        image: "deloitte.webp",
        description:
          "Deloitte Tohmatsu Group transforms the sports industry with Astar zkEVM",
        link: "",
      },
    ],
  },
};
</script>
