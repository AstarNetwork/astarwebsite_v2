<template>
  <div class="relative z-10">
    <div data-aos="zoom-out-right" class="absolute z-[4]">
      <img
        class="max-h-80 sm:max-h-full lg:h-auto"
        src="/images/developers/multichain-bg.svg"
        alt="Multichain Future"
        width="814"
        height="498"
      />
    </div>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:flex items-center relative z-10 pt-80"
    >
      <div class="mb-12 lg:mb-0">
        <h2 class="title mb-4 text-center lg:text-left">
          <span>{{ $t("developers.multichain.title") }}</span>
        </h2>
        <p class="text-center lg:text-left">
          {{ $t("developers.multichain.description") }}
        </p>
      </div>
      <ul class="grid gap-12 lg:ml-28">
        <li v-for="item in future" class="flex">
          <div class="mr-8 shrink-0">
            <img
              :src="'/images/developers/' + item.image"
              :alt="item.name"
              width="60"
              height="60"
            />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-1">{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const future = [
  {
    name: t("developers.multichain.defi.title"),
    description: t("developers.multichain.defi.description"),
    image: "multichain-defi.svg",
  },
  {
    name: t("developers.multichain.nft.title"),
    description: t("developers.multichain.nft.description"),
    image: "multichain-nft.svg",
  },
  {
    name: t("developers.multichain.infra.title"),
    description: t("developers.multichain.infra.description"),
    image: "multichain-providers.svg",
  },
  {
    name: t("developers.multichain.dao.title"),
    description: t("developers.multichain.dao.description"),
    image: "multichain-dao.svg",
  },
];
</script>
