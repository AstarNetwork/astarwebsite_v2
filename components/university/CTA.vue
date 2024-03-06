<template>
  <div class="bg-blue">
    <div class="text-center py-24 sm:py-36">
      <div class="px-4 sm:px-6">
        <h2
          class="max-w-4xl mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white"
        >
          {{ $t("university.cta.title") }}
        </h2>
        <p class="max-w-2xl mx-auto mb-12 text-slate-300">
          {{ $t("university.cta.description") }}
        </p>
        <Button :href="application" color="whiteBlue">
          {{ $t("university.join") }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  application: {
    type: String,
    default: "",
  },
});
</script>
