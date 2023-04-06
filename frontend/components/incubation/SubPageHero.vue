<template>
  <div class="bg-black">
    <div
      class="bg-[url('/images/incubation/sub-page-hero.svg')] bg-center bg-repeat h-[60vh] sm:h-[75vh] flex flex-col"
    >
      <IncubationHeader />
      <section class="flex items-center h-full pb-16">
        <div class="max-w-5xl mx-auto text-center px-4">
          <h1 class="font-bold text-4xl sm:text-6xl lg:text-7xl text-white">
            {{ title }}
          </h1>
          <p
            class="sm:text-xl lg:text-2xl font-light text-gray-300 tracking-wide"
          >
            {{ description }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
