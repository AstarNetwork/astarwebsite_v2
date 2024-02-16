<template>
  <div class="container-md py-20 flex items-center gap-12">
    <div class="space-y-12 w-1/2">
      <h2 class="text-white text-6xl tracking-tight">dApps on Astar</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>
      <Button :href="localePath('/community/ecosystem/')" color="whiteGray">
        Start Building
      </Button>
    </div>
    <div class="w-1/2">
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
