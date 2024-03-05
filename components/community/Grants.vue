<template>
  <section class="px-4 sm:px-6 relative z-10">
    <div
      class="bg-[#B68AF6] rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 pt-1 pb-10 sm:pb-20"
    >
      <img
        src="/images/community/inkubator-tanks.svg"
        class="mx-auto max-w-3xl mb-6 sm:mb-10 -mt-12 sm:-mt-24 w-full"
      />
      <h2 class="text-black leading-tight mb-4 text-center">
        <small class="block text-xl sm:text-2xl font-bold">
          {{ $t("community.grants.title") }}
        </small>
        <span class="block text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          ink!ubator
        </span>
      </h2>
      <p class="text-black mx-auto max-w-2xl mb-8 sm:text-lg lg:text-center">
        {{ $t("community.grants.description") }}
      </p>
      <div class="text-center">
        <NuxtLink
          to="https://use.ink/ubator/"
          target="_blank"
          class="bg-black rounded-xl p-4 w-72 inline-flex justify-center items-center text-lg hover:bg-gray-900"
        >
          ink!ubator
          <ArrowTopRightOnSquareIcon class="w-5 h-5 stroke-2 ml-1" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>
