<template>
  <div
    class="pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-32 flex items-center justify-start"
  >
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full sm:flex sm:items-center"
    >
      <div class="sm:w-3/5 mb-8 sm:mb-0">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow leading-tight"
        >
          {{ $t("techstack.title") }}
        </h1>
        <p class="sm:text-lg mt-4">
          {{ $t("techstack.description") }}
        </p>
      </div>
      <div class="sm:w-2/5">
        <img
          class="w-full max-w-[300px] sm:max-w-none mx-auto"
          src="/images/techstack/hero.svg"
          :alt="$t('techstack.title')"
          width="476"
          height="334"
          data-not-lazy
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/outline";
</script>
