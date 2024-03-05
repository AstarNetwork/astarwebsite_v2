<template>
  <div class="">
    <NuxtLink
      :to="localePath('/contact')"
      class="bg-gradient-to-l from-space-pink to-space-pink-lighter inline-flex items-center rounded-lg text-white pl-5 pr-7 py-2 font-medium shadow text-base sm:text-lg hover:brightness-110"
    >
      <EnvelopeIcon class="mr-1 w-6 sm:w-7 h-6 sm:h-7" />
      {{ locale === "ja" ? "お問い合わせ" : "Contact Us" }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { EnvelopeIcon } from "@heroicons/vue/24/outline";
const { locale } = useI18n();
const localePath = useLocalePath();
</script>
