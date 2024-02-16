<template>
  <div class="flex gap-6 container-lg">
    <div
      v-for="(item, index) in data"
      class="flex-1 border-2 border-white rounded-xl shadow-lg bg-white/50 p-12 space-y-8"
      data-aos="fade-up"
      :data-aos-delay="index * 100"
    >
      <div>img</div>
      <h2 class="text-center text-5xl">{{ item.title }}</h2>
      <p>
        {{ item.description }}
      </p>
      <div class="flex justify-center">
        <Button
          :href="
            button.url.includes('https') ? button.url : localePath(button.url)
          "
          :color="button.color"
          v-for="button in item.links"
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
    image: "",
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
    image: "",
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
