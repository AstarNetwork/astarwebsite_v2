<template>
  <div class="bg-gradient-to-b from-white to-[#D0E9F0] relative z-10">
    <div class="px-4 sm:px-6 text-center max-w-4xl mx-auto">
      <div class="border-gray-900 border rounded-3xl py-8 sm:py-12 px-8">
        <h2
          class="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight"
        >
          {{ $t("japan.newsletter.title") }}
        </h2>
        <p class="mt-2 mb-6">
          {{ $t("japan.newsletter.description") }}
        </p>
        <Button
          href="https://astarjapanlab.substack.com/about"
          target="_blank"
          size="xl"
        >
          {{ $t("japan.newsletter.subscribe") }}
        </Button>
      </div>
    </div>
  </div>
</template>
