<template>
  <section class="px-4 sm:px-6 relative z-10">
    <div
      class="bg-gradient-to-r from-[#0047FF] to-[#00D1FF] rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 pt-1 pb-10 sm:pb-20 lg:py-20 lg:flex justify-center items-center lg:space-x-6"
    >
      <div class="lg:w-2/5">
        <img
          src="/images/community/ambassador.svg"
          class="-mt-12 w-64 sm:w-80 lg:w-full mx-auto"
        >
      </div>
      <div class="lg:w-3/5">
        <h2
          class="text-white leading-tight mb-4 text-2xl sm:text-4xl lg:text-4xl font-bold text-center lg:text-left"
        >
          {{ $t("community.ambassador.title") }}
        </h2>
        <p class="text-white mx-auto mb-8 sm:text-lg">
          {{ $t("community.ambassador.description") }}
        </p>
        <div class="text-center lg:text-left">
          <Button
            :href="ambassadorProgramUrl"
            color="whiteBlue"
          >
            {{ $t("community.ambassador.button") }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ambassadorProgramUrl } from '@/data/links'
</script>
