<template>
  <div
    class="landscape:min-h-[500px] landscape:lg:min-h-[800px] portrait:min-h-[80vh] flex items-center justify-start"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
      <div class="lg:w-2/3 py-12">
        <h1
          class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow pt-24 sm:pt-32 lg:pt-0 leading-tight"
        >
          {{ $t("techstack.title") }}
        </h1>
        <p class="sm:text-lg mt-4">
          {{ $t("techstack.description") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/outline";
</script>
