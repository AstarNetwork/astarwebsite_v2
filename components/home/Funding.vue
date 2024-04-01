<template>
  <div class="container-md py-12 sm:py-20">
    <h2
      class="text-white text-4xl sm:text-6xl tracking-tight text-center mb-8 sm:mb-12"
    >
      {{ $t("home.funding.title") }}
    </h2>
    <p
      class="mx-auto max-w-3xl text-center mb-16 sm:mb-20 sm:text-lg leading-relaxed"
    >
      {{ $t("home.funding.description") }}
    </p>

    <div class="space-y-6 sm:space-y-12">
      <div
        v-for="(item, index) in data"
        class="border border-slate-700 flex items-center flex-col sm:flex-row rounded-xl"
      >
        <div
          class="flex-1"
          :class="index === 1 ? '' : 'sm:order-2'"
          data-aos="fade-up"
        >
          <img
            :src="`/images/home/${item.image}`"
            :alt="item.title"
            class="w-full"
          />
        </div>
        <div
          class="flex-1 pb-12 sm:py-16 lg:py-24 px-6"
          :class="
            index === 1
              ? 'sm:pr-8 lg:pr-16 sm:pl-0'
              : 'sm:pl-8 lg:pl-16 sm:pr-0'
          "
        >
          <h3
            class="text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 text-center sm:text-left"
          >
            {{ item.title }}
          </h3>
          <p class="mb-6 lg:mb-12 leading-relaxed">{{ item.description }}</p>
          <div class="flex gap-6 sm:gap-12 justify-center sm:justify-start">
            <HomeStat v-for="stat in item.stats" :stat="stat" />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12">
      <Button :href="localePath('/developers/')" color="whiteGray">
        {{ $t("home.funding.cta") }}
      </Button>

      <Button
        color="whiteGray"
        data-tf-popup="Z9EpmvwP"
        data-tf-opacity="100"
        data-tf-size="100"
        data-tf-iframe-props="title=Support"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
      >
        {{ $t("contact.partnerships.title") }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

useHead({
  script: [{ src: "//embed.typeform.com/next/embed.js" }],
});

const data = [
  {
    title: t("home.funding.globalHackathons.title"),
    description: t("home.funding.globalHackathons.description"),
    image: "funding-hackathons.svg",
    stats: [
      {
        name: t("home.funding.globalHackathons.stats.prize"),
        number: 100,
        unitModifier: "k+",
      },
      {
        name: t("home.funding.globalHackathons.stats.applications"),
        number: 8000,
        unitModifier: "+",
      },
    ],
  },
  {
    title: t("home.funding.dAppStaking.title"),
    description: t("home.funding.dAppStaking.description"),
    image: "funding-dapp-staking.svg",
    stats: [
      {
        name: t("home.funding.dAppStaking.stats.tier1Rewards"),
        number: 40,
        unitModifier: "k",
        caption: t("home.funding.dAppStaking.stats.subjectToMarket"),
      },
      {
        name: t("home.funding.dAppStaking.stats.totalStakers"),
        number: 20,
        unitModifier: "k+",
      },
    ],
  },
];
</script>
