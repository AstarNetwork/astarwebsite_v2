<template>
  <div class="px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-12 sm:mb-32">
      <span>{{ $t("developers.support.title") }}</span>
    </h2>
    <div
      class="max-w-7xl mx-auto lg:flex lg:space-x-12 space-y-16 lg:space-y-0"
    >
      <div
        class="border border-white/30 rounded-3xl px-6 pt-1 pb-8 sm:pb-16 lg:w-1/2"
      >
        <img
          src="/images/developers/build2earn.svg"
          class="mx-auto max-w-[440px] mb-6 sm:mb-6 -mt-6 sm:-mt-16 w-full"
        />
        <h3
          class="leading-tight mb-4 text-center text-3xl sm:text-4xl lg:text-4xl font-extrabold"
        >
          Build2Earn
        </h3>
        <p class="mx-auto max-w-2xl mb-8 sm:text-lg lg:text-center">
          {{ $t("developers.support.build2earn") }}
        </p>
        <div class="text-center">
          <Button
            href="https://docs.astar.network/docs/dapp-staking/"
            size="lg"
            target="_blank"
            class="w-72"
          >
            Build2Earn
            <ArrowTopRightOnSquareIcon class="w-5 h-5 stroke-2 ml-1" />
          </Button>
        </div>
      </div>
      <div class="bg-[#B68AF6] rounded-3xl px-6 pt-1 pb-8 sm:pb-16 lg:w-1/2">
        <img
          src="/images/community/inkubator-tanks.svg"
          class="mx-auto max-w-[440px] mb-6 sm:mb-10 -mt-6 sm:-mt-16 w-full"
        />
        <h3
          class="text-black leading-tight mb-4 text-center text-3xl sm:text-5xl lg:text-5xl font-extrabold"
        >
          ink!ubator
        </h3>
        <p class="text-black mx-auto max-w-2xl mb-8 sm:text-lg lg:text-center">
          {{ $t("developers.support.inkubator") }}
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>
