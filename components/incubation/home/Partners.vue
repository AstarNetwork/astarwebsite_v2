<template>
  <section
    class="max-w-7xl mx-auto px-4 sm:flex items-center sm:space-x-2 lg:space-x-10"
  >
    <div class="mb-12 sm:mb-0">
      <p class="font-bold text-2xl sm:text-3xl title">
        <span>{{ $t("meta.partners.title") }}</span>
      </p>
      <h2
        class="mt-2 mb-8 text-2xl sm:text-3xl font-medium text-black leading-tight sm:leading-snug"
      >
        {{ $t("meta.partners.description") }}
      </h2>
      <IncubationButton
        variant="outlined"
        color="primary"
        :href="localePath('/incubation/partners')"
      >
        <span>
          {{ $t("partners.learn_more") }}
          <ArrowRightIcon class="w-6 h-6 inline-block ml-1" />
        </span>
      </IncubationButton>
    </div>
    <div class="bg-gray-50 py-4 lg:py-12 px-4 lg:px-16 lg:shrink-0">
      <img
        src="~/assets/images/incubation/home/partners.svg"
        alt="Partners"
        class="min-w-[300px]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const localePath = useLocalePath();
</script>
