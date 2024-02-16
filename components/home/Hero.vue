<template>
  <div class="container py-10">
    <h1 class="text-center tracking-[-0.3rem] mb-8">
      <span class="font-bold text-[9rem] block leading-none">Connecting</span>
      <span class="text-8xl block leading-none">Web3 to You</span>
    </h1>
    <p class="text-center max-w-2xl mx-auto text-lg">
      Creating opportunities for individuals to use web3 technology. We connect
      people to web3—through entertainment, blockchain development, business
      development, and community events.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";
</script>
