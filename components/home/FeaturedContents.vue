<template>
  <div
    class="lg:flex max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full lg:space-x-4 space-y-4 lg:space-y-0"
  >
    <div
      class="space-gradient rounded-2xl lg:w-1/2 text-center hover:brightness-110"
    >
      <img
        class="mx-auto -mt-24 sm:-mt-28 -mb-10 sm:-mb-16 w-full"
        src="/images/home/featured-contents-vision.svg"
        alt=""
        data-not-lazy
      />
      <div class="p-6 sm:p-12 !pt-0">
        <h2 class="mb-2">
          <span class="sr-only">Astar 2.0</span>
          <img
            class="mx-auto drop-shadow"
            src="/images/home/featured-contents-vision-title.svg"
            alt="Astar 2.0"
            data-not-lazy
          />
        </h2>
        <p class="text-xl sm:text-3xl font-bold">Building the Unstoppable</p>
        <p class="sm:text-lg">
          A scalable network powering <br />a global web3 vision for all.
        </p>
        <Button
          variant="outlined"
          size="lg"
          :href="localePath('/astar2')"
          class="w-[280px] sm:w-auto mt-6 sm:mt-8"
        >
          {{ $t("learn_more") }} ->
        </Button>
      </div>
    </div>
    <div class="flex flex-col lg:w-1/2 space-y-4">
      <div
        class="h-1/2 bg-space-gray rounded-2xl sm:bg-[url('/images/home/featured-contents-starmap.svg')] bg-no-repeat bg-right bg-contain sm:p-12 flex flex-col justify-center hover:brightness-110"
      >
        <img
          class="mx-auto w-full max-w-[240px] -mb-8 sm:hidden"
          src="/images/home/featured-contents-starmap.svg"
          alt="2023 Starmap"
          data-not-lazy
        />
        <div
          class="sm:w-2/3 p-8 lg:p-0 text-tiny sm:text-base text-center sm:text-left"
        >
          <h2 class="text-3xl font-bold">2023 Starmap</h2>
          <p class="mb-2">
            Embarking on a new journey to reach our full potential
          </p>
          <NuxtLink
            :to="localePath('/starmap')"
            class="text-space-cyan hover:underline hover:text-space-cyan-lighter"
          >
            {{ $t("learn_more") }} ->
          </NuxtLink>
        </div>
      </div>
      <div
        class="h-1/2 bg-space-gray rounded-2xl sm:bg-[url('/images/home/featured-contents-japan.svg')] bg-no-repeat bg-left bg-contain sm:p-12 flex flex-col justify-center items-end hover:brightness-110"
      >
        <img
          class="mx-auto w-full max-w-[240px] -mb-8 sm:hidden"
          src="/images/home/featured-contents-japan.svg"
          alt="Astar Japan Lab"
          data-not-lazy
        />
        <div
          class="sm:w-2/3 p-8 lg:p-0 text-tiny sm:text-base text-center sm:text-right"
        >
          <h2 class="text-3xl font-bold">Astar Japan Lab</h2>
          <p class="mb-2">
            Astar Japan Lab fuels the growth of Japanese services and businesses
          </p>
          <NuxtLink
            :to="localePath('/japan')"
            class="text-space-cyan hover:underline hover:text-space-cyan-lighter"
          >
            {{ $t("learn_more") }} ->
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
