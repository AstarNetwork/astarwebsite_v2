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
const localePath = useLocalePath();
const { t } = useI18n();

const data = [
  {
    title: t("home.features.bridgeAndEcosystem.title"),
    image: "bridge-and-ecosystem.svg",
    description: t("home.features.bridgeAndEcosystem.description"),
    links: [
      {
        label: t("home.features.bridgeAndEcosystem.cta.bridgeToAstar"),
        url: "https://portal.astar.network/astar/bridge",
        color: "blue",
      },
      {
        label: t("home.features.bridgeAndEcosystem.cta.exploreEcosystem"),
        url: "/community/ecosystem/",
        color: "outlinedGray",
      },
    ],
  },
  {
    title: t("home.features.yokiOrigins.title"),
    image: "yoki-origins.webp",
    description: t("home.features.yokiOrigins.description"),
    links: [
      {
        label: t("home.features.yokiOrigins.cta.yokiOriginsWebsite"),
        url: "https://yoki.astar.network/",
        color: "blue",
      },
    ],
  },
];
</script>

<style lang="postcss" scoped></style>
