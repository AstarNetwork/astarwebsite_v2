<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('meta.partners.title')"
        :description="$t('meta.partners.description')"
      />
    </template>
    <template #main>
      <main class="max-w-5xl mx-auto px-4 py-12 sm:py-24">
        <template v-for="partner in partners">
          <h2>
            <template v-if="locale === 'ja'">{{ partner.label.ja }}</template>
            <template v-else>{{ partner.label.en }}</template>
          </h2>
          <ul
            class="grid gap-x-2 gap-y-2 lg:gap-y-16 mt-8 mb-24"
            :class="
              partner.category === 'mentors'
                ? 'sm:grid-cols-3 lg:grid-cols-4 grid-cols-2'
                : 'grid-cols-1 sm:grid-cols-2'
            "
          >
            <li
              v-for="item in partner.logos"
              class="flex items-center justify-center"
            >
              <NuxtLink
                :to="item.href"
                target="_blank"
                class="rounded p-4"
                :class="item.href !== '' && 'hover:shadow-lg'"
              >
                <img
                  class="h-16 object-contain"
                  :class="
                    partner.category === 'host'
                      ? 'w-96 lg:h-20 w-80'
                      : 'lg:w-48 lg:h-20 w-44'
                  "
                  :src="'/images/incubation/partners/' + item.image"
                  :alt="item.name"
                />
              </NuxtLink>
            </li>
          </ul>
        </template>
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { partners } from "../../content/partners";

definePageMeta({
  layout: false,
  title: "meta.partners.title",
  slug: "partners",
  description: "meta.partners.description",
});

const { locale } = useI18n();
</script>

<style lang="postcss" scoped>
h2 {
  @apply text-center overflow-hidden uppercase font-semibold text-2xl text-black;
}
h2::before,
h2::after {
  @apply bg-gray-500 content-[''] w-1/2 h-[1px] inline-block align-middle;
}
h2::before {
  @apply ml-[-50%] mr-4;
}
h2::after {
  @apply mr-[-50%] ml-4;
}
</style>
