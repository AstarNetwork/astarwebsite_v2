<template>
  <div
    class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-4 py-2.5 sm:px-3.5 sm:before:flex-1"
    v-if="isVisible"
  >
    <div
      class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80fb] via-[#b481fc] to-[#5cdeff] opacity-30"
        style="
          clip-path: polygon(
            74.8% 41.9%,
            97.2% 73.2%,
            100% 34.9%,
            92.5% 0.4%,
            87.5% 0%,
            75% 28.6%,
            58.5% 54.6%,
            50.1% 56.8%,
            46.9% 44%,
            48.3% 17.4%,
            24.7% 53.9%,
            0% 27.9%,
            11.9% 74.2%,
            24.9% 54.1%,
            68.6% 100%,
            74.8% 41.9%
          );
        "
      />
    </div>
    <div
      class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      aria-hidden="true"
    >
      <div
        class="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80fb] via-[#b481fc] to-[#5cdeff] opacity-30"
        style="
          clip-path: polygon(
            74.8% 41.9%,
            97.2% 73.2%,
            100% 34.9%,
            92.5% 0.4%,
            87.5% 0%,
            75% 28.6%,
            58.5% 54.6%,
            50.1% 56.8%,
            46.9% 44%,
            48.3% 17.4%,
            24.7% 53.9%,
            0% 27.9%,
            11.9% 74.2%,
            24.9% 54.1%,
            68.6% 100%,
            74.8% 41.9%
          );
        "
      />
    </div>
    <p class="text-sm leading-6 text-space-gray-dark">
      <a
        :href="locale === 'ja' ? notification.ja.url : notification.en.url"
        :target="notification.en.url.includes('https') ? '_blank' : '_self'"
        class="font-semibold flex items-center"
      >
        {{ locale === "ja" ? notification.ja.text : notification.en.text }}
        <ArrowTopRightOnSquareIcon
          v-if="notification.en.url.includes('https')"
          class="w-4 h-4 stroke-2 ml-1"
        />
        <span v-else>-></span>
      </a>
    </p>
    <div class="flex flex-1 justify-end">
      <button
        type="button"
        class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        @click="isVisible = false"
      >
        <span class="sr-only">Dismiss</span>
        <XMarkIcon class="h-5 w-5 text-space-gray-dark" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import { notification } from "@/data/notification";
const { locale } = useI18n();
const isVisible = ref(true);
</script>
