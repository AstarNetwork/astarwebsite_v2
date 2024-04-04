<template>
  <section class="overflow-hidden">
    <div class="container-xs py-20">
      <h2 class="text-center text-4xl sm:text-6xl tracking-tight mb-8 sm:mb-12">
        {{ $t("solutions.partners.title") }}
      </h2>
      <p
        class="text-center max-w-3xl mx-auto sm:text-lg leading-relaxed mb-8 sm:mb-20"
      >
        {{ $t("solutions.partners.description") }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 lg:gap-10 2xl:gap-20">
        <div
          v-for="(item, index) in data"
          :key="item.name"
          class="flex-1 rounded-lg bg-white/50 transition shadow-lg px-6 py-10 sm:px-8 sm:py-12 lg:p-12 space-y-6 sm:space-y-8"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <img
            :src="`/images/solutions/partners/${item.image}`"
            :alt="item.name"
            class="h-16 sm:h-20 mx-auto"
          >
          <p>{{ item.description }}</p>
          <TextLink :href="item.link.url">
            {{ item.link.label }}
          </TextLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const data = [
  {
    name: t('solutions.partners.startale.name'),
    image: 'startale-logo.svg',
    description: t('solutions.partners.startale.description'),
    link: {
      label: t('solutions.partners.startale.cta'),
      url: 'https://startale.org/',
    },
  },
  // {
  //   name: t("solutions.partners.sony.name"),
  //   image: "sony-logo.svg",
  //   description: t("solutions.partners.sony.description"),
  //   link: {
  //     label: t("solutions.partners.sony.cta"),
  //     url: "https://astar.network/incubation",
  //   },
  // },
]
</script>

<style lang="postcss" scoped></style>
