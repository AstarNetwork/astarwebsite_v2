<template>
  <div class="pt-8 pb-16 bg-gradient-to-r from-[#0047FF] to-[#00D1FF]">
    <img
      class="portrait:hidden max-w-[1280px] mx-auto w-full"
      src="/images/japan/hero-landscape.svg"
      :alt="$t('japan.title')"
      width="1460"
      height="808"
    >
    <img
      class="landscape:hidden max-w-[640px] mx-auto w-full"
      src="/images/japan/hero-portrait.svg"
      :alt="$t('japan.title')"
      width="1050"
      height="1050"
    >
    <div class="px-4 sm:px-6 -mt-12 lg:-mt-24">
      <h1 class="max-w-4xl mx-auto mb-6">
        <span class="sr-only">{{ $t("japan.title") }}</span>
        <img
          class="w-full mx-auto"
          src="/images/japan/title.svg"
          :alt="$t('japan.title')"
          width="912"
          height="114"
        >
      </h1>
      <p class="sm:text-lg max-w-3xl mx-auto text-white text-center">
        {{ $t("japan.description") }}
      </p>
    </div>
  </div>
</template>
