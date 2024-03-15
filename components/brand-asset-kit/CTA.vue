<template>
  <section class="container-sm">
    <div
      class="text-center bg-gradient-to-r from-[#0047FF] to-[#00D1FF] rounded-lg px-6 sm:px-12 py-16 space-y-6"
    >
      <h2 class="text-4xl lg:text-5xl text-white">{{ $t("brandAssetKit.cta.title") }}</h2>
      <p class="sm:container-xs text-white">{{ $t("brandAssetKit.cta.description") }}</p>
      <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Button :href="brandAssetKitUrl.zip" color="whiteBlue">
          {{ $t("brandAssetKit.cta.downloadZip") }}
        </Button>
        <Button :href="brandAssetKitUrl.figma" color="whiteBlue">
          <img src="/images/brand-asset-kit/figma-logo.svg" alt="Figma" class="h-6 w-auto" />
          {{ $t("brandAssetKit.cta.figmaFile") }}
        </Button>
      </div>
    </div>
    <p class="mt-8 sm:mt-12 text-sm sm:text-base sm:leading-relaxed">{{ $t("brandAssetKit.note") }}</p>
  </section>
</template>

<script setup lang="ts">
import { brandAssetKitUrl } from "@/data/links";
</script>
