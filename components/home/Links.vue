<template>
  <div class="container-lg py-40">
    <div class="grid grid-cols-3 gap-8">
      <div
        v-for="item in data"
        class="space-y-6 border-2 border-white rounded-lg shadow-lg bg-white/50 p-12"
      >
        <div class="-mt-28">
          <img :src="`/images/home/${item.image}`" class="mx-auto w-full" />
        </div>
        <h3 class="text-3xl tracking-tight">{{ item.title }}</h3>
        <p>{{ item.description }}</p>
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    image: "links-dapp-staking.svg",
    link: {
      label: "Start Staking",
      url: "https://portal.astar.network/",
    },
  },
  {
    title: "Community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    image: "links-community.svg",
    link: {
      label: "Join our community",
      url: "/community/",
    },
  },
];
</script>
