<template>
  <div class="border-t border-gray-300">
    <div
      class="pt-8 sm:pt-12 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 flex items-center justify-start sub-page-header"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 w-full text-center space-y-10">
        <h1
          v-if="title"
          class="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          {{ title }}
        </h1>
        <p
          v-if="description"
          class="sm:text-lg sm:leading-relaxed max-w-screen-sm mx-auto"
        >
          {{ description }}
        </p>
        <Button v-if="button.to" :href="button.to">
          {{ button.label }}
        </Button>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  button: {
    type: Object,
    default: {
      label: "",
      to: "",
    },
  },
});
</script>

<style lang="postcss" scoped></style>
