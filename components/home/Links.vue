<template>
  <div class="container-lg py-20 sm:py-40">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8">
      <div
        v-for="item in data"
        class="space-y-4 sm:space-y-6 border-2 border-white rounded-lg shadow-lg bg-white/50 p-6 lg:p-12"
      >
        <div class="-mt-8 sm:-mt-28">
          <img
            :src="`/images/home/${item.image}`"
            class="mx-auto w-full max-w-[240px] sm:max-w-[336px]"
          />
        </div>
        <h3 class="text-2xl lg:text-3xl tracking-tight">{{ item.title }}</h3>
        <p class="leading-relaxed text-sm lg:text-base">
          {{ item.description }}
        </p>
        <TextLink
          :href="
            item.link.url.includes('https')
              ? item.link.url
              : localePath(item.link.url)
          "
          >{{ item.link.label }}</TextLink
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const data = [
  {
    title: "ASTR and its utility",
    description:
      "ASTR is the native token driving Astar Network, having ultimate utility by serving various functions such as staking rewards, gas, and grants.",
    image: "links-astr-utility.svg",
    link: {
      label: "Check Tokenomics 2.0",
      url: "/blog/how-the-astr-token-brings-utility-and-value-to-the-astar-39387/",
    },
  },
  {
    title: "dApp Staking",
    description:
      "dApp Staking is Astar’s unique mechanism to financially incentivise developers and is a crucial accelerator in realizing the Web3 vision, as it lays the foundation for the development of exceptional dApps for users and fuels the drive towards making Web3 accessible to all.",
    image: "links-dapp-staking.svg",
    link: {
      label: "Start Staking",
      url: "https://portal.astar.network/",
    },
  },
  {
    title: "Community",
    description:
      "Find your tribe and connect with with other Astar enthusiasts.",
    image: "links-community.svg",
    link: {
      label: "Join our community",
      url: "/community/",
    },
  },
];
</script>
