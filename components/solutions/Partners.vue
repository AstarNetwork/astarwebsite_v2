<template>
  <section class="overflow-hidden">
    <div class="container-md py-20">
      <h2 class="text-center text-6xl tracking-tight mb-12">Partners</h2>
      <p class="text-center max-w-3xl mx-auto text-lg mb-20">
        Our important partners to achieve our mission
      </p>

      <div class="flex gap-20">
        <div
          v-for="item in data"
          class="flex-1 rounded-lg bg-white/50 transition shadow-lg p-12 space-y-8"
        >
          <img
            :src="`/images/solutions/partners/${item.image}`"
            :alt="item.name"
            class="h-20 mx-auto"
          />
          <p>{{ item.description }}</p>
          <TextLink :href="item.link.url">{{ item.link.label }}</TextLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const data = [
  {
    name: "Startale Labs",
    image: "startale-logo.svg",
    description:
      "Startale Labs is dedicated to accelerating the mass adoption of Web3, developing Japan's largest public blockchain, Astar Network, and providing Web3 infrastructure through the Startale Web3 Cloud.",
    link: {
      label: "Startale labs website",
      url: "https://startale.org/",
    },
  },
  {
    name: "Sony Network Communications",
    image: "sony-logo.svg",
    description:
      "Sony Network Communications and Astar Network created a joint incubation program that leveraged the world’s top innovators to drive growth for 19 web3 startups, receiving over 200 applications.",
    link: {
      label: "Web3 Incubation Program",
      url: "https://astar.network/incubation",
    },
  },
];
</script>

<style lang="postcss" scoped></style>
