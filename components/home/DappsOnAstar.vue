<template>
  <div
    class="container-md py-12 sm:py-20 flex items-center flex-col sm:flex-row gap-12"
  >
    <div class="space-y-8 sm:space-y-12 flex-1">
      <h2
        class="text-white text-4xl sm:text-6xl tracking-tight text-center sm:text-left"
      >
        dApps on Astar
      </h2>
      <p class="sm:text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>
      <div class="text-center sm:text-left">
        <Button :href="localePath('/community/ecosystem/')" color="whiteGray">
          Explore ecosystem
        </Button>
      </div>
    </div>
    <div class="flex-1">
      <img src="/images/home/dapps-on-astar.svg" class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";
</script>

<style lang="postcss" scoped></style>
