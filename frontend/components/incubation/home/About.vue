<template>
  <section class="lg:w-[52%] relative">
    <p class="font-bold text-2xl sm:text-3xl title">
      <span>About This Program</span>
    </p>
    <h2
      class="mt-2 mb-4 text-2xl sm:text-3xl font-medium text-black leading-tight sm:leading-snug"
    >
      {{ $t("program.about.heading") }}
    </h2>
    <p class="text-lg sm:leading-loose">
      {{ $t("program.about.description") }}
    </p>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
