<template>
  <div class="relative overflow-hidden">
    <img
      class="absolute z-[-1] w-full h-full"
      src="/images/common/zkevm-bg.webp"
      alt=""
      width="1728"
      height="1429"
      data-not-lazy
    />
    <img
      class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
      src="/images/common/space-cloud.webp"
      alt=""
      width="1728"
      height="1281"
      data-not-lazy
    />
    <img
      class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
      src="/images/common/space-stars.svg"
      alt=""
      width="1728"
      height="1728"
      data-not-lazy
    />
    <div
      class="pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24 lg:pb-32 flex items-center justify-start sub-page-header"
    >
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
