<template>
  <section class="text-center">
    <h2 class="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 tracking-tight">
      {{ $t("brandAssetKit.colors.title") }}
    </h2>
    <p class="container-xs mb-12 text-sm sm:text-base">
      {{ $t("brandAssetKit.colors.description") }}
    </p>

    <div class="flex items-end container-sm gap-1 sm:gap-6 mb-16">
      <div
        v-for="(color, index) in colors"
        :key="color.name"
        :class="index === 2 ? 'flex-1' : 'w-1/6'"
      >
        <div
          :class="color.bg"
          class="rounded-full aspect-square mb-4 w-full"
        />
        <p class="font-bold text-slate-950 mb-1 text-sm sm:text-base">
          {{ color.name }}
        </p>
        <p class="text-xs sm:text-sm">
          {{ color.code }}
        </p>
      </div>
    </div>

    <div class="container-xs">
      <div class="bg-gradient-to-r from-[#0047FF] to-[#00D1FF] rounded h-16 sm:h-24 mb-4" />
      <p class="font-bold text-slate-950 mb-2 text-sm sm:text-base">
        Primary Gradient
      </p>
      <p class="flex items-center justify-center gap-2 text-xs sm:text-sm">
        #0047FF
        <ArrowRightIcon class="w-3 h-3 sm:w-4 sm:h-4" />
        #00D1FF
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const colors = [
  { name: 'Black', code: '#020617', bg: 'bg-slate-950' },
  { name: 'Pink', code: '#E6007A', bg: 'bg-pink' },
  { name: 'Blue', code: '#0075FF', bg: 'bg-blue' },
  { name: 'Purple', code: '#5928B1', bg: 'bg-purple' },
  { name: 'Gray', code: '#64748B', bg: 'bg-slate-500' },
]
</script>
