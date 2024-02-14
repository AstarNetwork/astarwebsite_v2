<template>
  <div class="container py-20">
    <h2 class="text-center text-6xl tracking-tight mb-8">Our Solutions</h2>
    <p class="text-center max-w-3xl mx-auto text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,
    </p>
    <div>Startale</div>
    <div>Astar Japan Labs</div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";
</script>
