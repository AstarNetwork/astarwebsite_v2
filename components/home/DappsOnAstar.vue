<template>
  <div
    class="container-md py-12 sm:py-20 flex items-center flex-col sm:flex-row gap-12"
  >
    <div class="space-y-8 sm:space-y-12 flex-1">
      <h2
        class="text-white text-4xl sm:text-6xl tracking-tight text-center sm:text-left"
      >
        {{ $t("home.dAppsOnAstar.title") }}
      </h2>
      <p class="sm:text-lg leading-relaxed">
        {{ $t("home.dAppsOnAstar.description") }}
      </p>
      <div class="text-center sm:text-left">
        <Button
          :href="localePath('/community/ecosystem/')"
          color="whiteGray"
        >
          {{ $t("home.dAppsOnAstar.cta") }}
        </Button>
      </div>
    </div>
    <div
      class="flex-1"
      data-aos="fade-up"
    >
      <img
        src="/images/home/dapps-on-astar.svg"
        class="w-full"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="postcss" scoped></style>
