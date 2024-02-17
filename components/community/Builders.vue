<template>
  <section class="px-4 sm:px-6 relative z-10">
    <h2 class="max-w-4xl mx-auto title text-center mb-8 sm:mb-12">
      <span>{{ $t("community.builders.title") }}</span>
    </h2>
    <div class="max-w-2xl mx-auto pt-6 lg:pt-24">
      <div
        v-for="item in builders"
        class="border border-white/30 rounded-3xl p-6"
      >
        <img
          :src="'/images/community/' + item.image"
          :alt="item.title"
          class="mx-auto -mt-12 lg:-mt-24"
          width="600"
          height="300"
        />
        <div class="sm:p-12 pt-4">
          <h3
            class="text-white font-bold text-center text-3xl sm:text-4xl mb-4 leading-tight"
          >
            {{ item.title }}
          </h3>
          <p class="mb-8">
            {{ item.description }}
          </p>
          <div class="text-center">
            <Button :href="item.button.href">
              {{ item.button.label }}
            </Button>
          </div>
          <div v-if="item.text_link" class="text-center mt-3">
            <TextLink :href="item.text_link.href">
              {{ item.text_link.label }}
            </TextLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const builders = [
  {
    title: t("community.builders.ecosystem.title"),
    image: "builders-ecosystem.svg",
    description: t("community.builders.ecosystem.description"),
    button: {
      label: t("community.builders.ecosystem.title"),
      href: "/community/ecosystem",
    },
    text_link: {
      label: t("community.builders.ecosystem.go_to_docs"),
      href: "https://docs.astar.network/",
    },
  },
];
</script>
