<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 gap-16 sm:gap-6 container-lg mt-8"
  >
    <div
      v-for="(item, index) in data"
      class="border-2 border-white rounded-xl shadow-lg bg-white/50 px-6 py-12 lg:p-12"
      data-aos="fade-up"
      :data-aos-delay="index * 100"
    >
      <div class="-mt-24 mb-4">
        <img
          :src="`/images/home/${item.image}`"
          class="mx-auto w-full max-w-[460px]"
        />
      </div>
      <h2
        class="text-center text-3xl sm:text-4xl lg:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0047FF] to-[#00D1FF] leading-tight sm:leading-tight lg:leading-tight font-bold mb-4"
      >
        {{ item.title }}
      </h2>
      <p class="leading-relaxed mb-8">
        {{ item.description }}
      </p>
      <div class="flex justify-center flex-col lg:flex-row gap-3">
        <Button
          v-for="button in item.links"
          :href="
            button.url.includes('https') ? button.url : localePath(button.url)
          "
          :color="button.color"
        >
          {{ button.label }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const i18n = locale.value === "ja" ? "/ja" : "";

const data = [
  {
    title: "Bridge & Ecosystem",
    image: "bridge-and-ecosystem.svg",
    description:
      "Astar zkEVM is an Ethereum Layer-2 scaling solution that leverages Polygon's CDK and AggLayer technology. Astar zkEVM inherits Ethereum's security while maintaining EVM equivalence.",
    links: [
      {
        label: "Bridge to Astar",
        url: "https://portal.astar.network/astar/bridge",
        color: "blue",
      },
      {
        label: "Explore ecosystem",
        url: "/community/ecosystem/",
        color: "outlinedGray",
      },
    ],
  },
  {
    title: "Yoki Origins",
    image: "yoki-origins.webp",
    description:
      "Yoki Origins is a journey to discover original Yoki characters inspired by supernatural creatures from Japan. Collect and upgrade your Yoki in this exciting and friendly web3 experience for everyone.",
    links: [
      {
        label: "Yoki Origins website",
        url: "https://yoki.astar.network/",
        color: "blue",
      },
    ],
  },
];
</script>

<style lang="postcss" scoped></style>
