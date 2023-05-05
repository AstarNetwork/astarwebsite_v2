<template>
  <div class="overflow-hidden">
    <Header />
    <slot name="space" />
    <div class="relative z-10">
      <img
        class="w-full"
        src="/images/common/cloud.svg"
        alt=""
        width="2000"
        height="464"
        data-not-lazy
      />
      <div class="bg-white">
        <slot name="earth" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
body {
  @apply text-gray-200 bg-space-gray-dark;
}
</style>
