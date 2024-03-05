<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-6 sm:mb-16">
      <span>{{ $t("developers.why.title") }}</span>
    </h2>
    <ul class="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16">
      <li v-for="(item, index) in advantages">
        <img
          :src="'/images/developers/' + item.image"
          :alt="item.name"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          width="150"
          height="130"
        />
        <h3 class="font-bold text-lg sm:text-xl mt-4 mb-2 leading-tight">
          {{ item.name }}
        </h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const advantages = [
  {
    name: t("developers.why.evm.title"),
    description: t("developers.why.evm.description"),
    image: "advantages-ethereum.svg",
  },
  {
    name: t("developers.why.wasm.title"),
    description: t("developers.why.wasm.description"),
    image: "advantages-wasm.svg",
  },
  {
    name: t("developers.why.scalable.title"),
    description: t("developers.why.scalable.description"),
    image: "advantages-scalable.svg",
  },
  {
    name: t("developers.why.secure.title"),
    description: t("developers.why.secure.description"),
    image: "advantages-secure.svg",
  },
  {
    name: t("developers.why.xcm.title"),
    description: t("developers.why.xcm.description"),
    image: "advantages-xcm.svg",
  },
  {
    name: t("developers.why.build2earn.title"),
    description: t("developers.why.build2earn.description"),
    image: "advantages-income.svg",
  },
];
</script>
