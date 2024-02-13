<template>
  <div class="bg-blue">
    <div class="text-center py-24 sm:py-36">
      <div class="px-4 sm:px-6">
        <h2
          class="max-w-4xl mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white"
        >
          {{ $t("university.cta.title") }}
        </h2>
        <p class="max-w-2xl mx-auto mb-12 text-gray-300">
          {{ $t("university.cta.description") }}
        </p>
        <Button
          :href="application"
          target="_blank"
          variant="outlined"
          size="xl"
        >
          {{ $t("university.join") }}
          <ArrowTopRightOnSquareIcon class="w-6 h-6 ml-1 stroke-2" />
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  application: {
    type: String,
    default: "",
  },
});
</script>
