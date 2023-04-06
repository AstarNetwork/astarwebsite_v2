<template>
  <section class="bg-black">
    <div
      class="sm:flex bg-[url('/images/incubation/sub-page-hero.svg')] bg-center bg-repeat"
    >
      <div
        class="w-full bg-[url('/assets/images/incubation/cta.svg')] bg-right bg-no-repeat hidden sm:block"
      />
      <div class="text-center py-24 sm:py-36 sm:px-10 shrink-0">
        <p class="text-white text-2xl sm:text-3xl">{{ $t("cta.lead") }}</p>
        <IncubationButton
          href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
          variant="contained"
          color="secondary"
          size="xl"
          target="_blank"
          class="w-full max-w-[300px] my-6"
        >
          <span>
            {{ $t("cta.apply") }}
            <ArrowTopRightOnSquareIcon class="w-6 h-6 inline-block align-sub" />
          </span>
        </IncubationButton>
        <p>
          <span class="text-gray-300 mr-2">{{ $t("cta.contact") }}</span>
          <NuxtLink
            to="mailto:info@startale.org"
            class="text-space-sky-lighter hover:text-space-sky-light hover:underline"
          >
            info@startale.org
          </NuxtLink>
        </p>
      </div>
      <div class="w-full hidden sm:block" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
</script>
