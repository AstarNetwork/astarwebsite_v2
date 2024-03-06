<template>
  <div class="relative z-10">
    <div class="px-4 sm:px-6 text-center max-w-4xl mx-auto">
      <div
        class="bg-gradient-to-r from-[#0047FF] to-[#00D1FF] rounded-lg py-8 sm:py-12 px-8"
      >
        <h2 class="text-2xl sm:text-3xl lg:text-4xl leading-tight text-white">
          {{ $t("japan.newsletter.title") }}
        </h2>
        <p class="mt-2 mb-6 text-white">
          {{ $t("japan.newsletter.description") }}
        </p>
        <Button
          href="https://astarjapanlab.substack.com/about"
          color="whiteBlue"
        >
          {{ $t("japan.newsletter.subscribe") }}
        </Button>
      </div>
    </div>
  </div>
</template>
