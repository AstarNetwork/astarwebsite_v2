<template>
  <div
    class="max-w-7xl px-4 mx-auto flex sm:flex-row items-center w-full h-[calc(100vh-100px)] lg:h-[80vh]"
  >
    <div class="w-full lg:flex flex-wrap items-center">
      <div class="w-full lg:w-[62%]">
        <h1
          class="text-5xl sm:text-8xl lg:text-10xl leading-[0.94] font-bold text-white text-center lg:text-left mb-8 sm:mb-12 lg:mb-0"
        >
          Web3 <br />Incubation <br />Program
        </h1>
        <div class="hidden lg:flex lg:space-x-4 lg:mt-20">
          <IncubationButton
            href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
            variant="contained"
            color="secondary"
            size="lg"
            target="_blank"
            class="w-[240px] sm:w-auto"
          >
            <span>
              {{ $t("cta.apply") }}
              <ArrowTopRightOnSquareIcon
                class="w-6 h-6 inline-block align-sub"
              />
            </span>
          </IncubationButton>
          <IncubationButton
            variant="outlined"
            color="secondary"
            size="lg"
            href="/incubation/program"
            class="w-[240px] sm:w-auto"
          >
            <span>
              {{ $t("learn_more") }}
              <ArrowRightIcon class="w-6 h-6 inline-block" />
            </span>
          </IncubationButton>
        </div>
      </div>
      <div
        class="w-full lg:w-[38%] flex justify-center lg:justify-end mt-2 mb-6 lg:my-0 pb-8"
      >
        <img
          src="/images/incubation/home/hero-logos.svg"
          alt="by Sony Network Communications and Astar"
          class="max-w-[200px] sm:max-w-[340px] lg:max-w-full w-full lg:pl-16"
          data-not-lazy
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/outline";
</script>
