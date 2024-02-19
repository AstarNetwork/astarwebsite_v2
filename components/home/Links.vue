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
    title: t("home.links.astrAndItsUtility.title"),
    description: t("home.links.astrAndItsUtility.description"),
    image: "links-astr-utility.svg",
    link: {
      label: t("home.links.astrAndItsUtility.cta"),
      url: "/blog/how-the-astr-token-brings-utility-and-value-to-the-astar-39387/",
    },
  },
  {
    title: t("home.links.dAppStaking.title"),
    description: t("home.links.dAppStaking.description"),
    image: "links-dapp-staking.svg",
    link: {
      label: t("home.links.dAppStaking.cta"),
      url: "https://portal.astar.network/",
    },
  },
  {
    title: t("home.links.community.title"),
    description: t("home.links.community.description"),
    image: "links-community.svg",
    link: {
      label: t("home.links.community.cta"),
      url: "/community/",
    },
  },
];
</script>
