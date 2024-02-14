<template>
  <NuxtLink v-if="href !== ''" :class="classes" :to="href">
    <span><slot>Button</slot></span>
  </NuxtLink>
  <button v-else :class="classes" type="button">
    <span><slot>Button</slot></span>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "primary",
  },
  variant: {
    type: String,
    default: "contained",
  },
  size: {
    type: String,
    default: "md",
  },
});

const classes = computed(() => ({
  btn: true,
  primary: props.color === "primary",
  secondary: props.color === "secondary",
  [`${props.size || "md"}`]: true,
  contained: props.variant === "contained",
  outlined: props.variant === "outlined",
}));
</script>

<style lang="postcss" scoped>
.btn {
  @apply font-medium transition-all inline-block hover:cursor-pointer rounded-full;
}
.btn span {
  @apply flex items-center justify-center;
}
.btn.sm {
  @apply text-sm px-3 py-1;
}
.btn.md {
  @apply px-4 py-2;
}
.btn.lg {
  @apply text-lg px-10 py-3;
}
.btn.xl {
  @apply text-lg sm:text-xl px-6 py-4 sm:px-8 sm:py-5;
}
.btn.xxl {
  @apply text-xl px-14 py-5 sm:text-2xl sm:px-20 sm:py-6;
}
.btn.contained.primary {
  @apply text-white bg-gradient-to-r from-[#0047FF] to-[#00D1FF];
}

.btn.outlined.primary {
  @apply border border-blue;
}

.btn.contained.secondary {
  @apply border-2 border-white  text-space-gray-dark bg-white bg-opacity-80 hover:bg-opacity-100;
}
.btn.outlined.secondary {
  @apply border border-white  bg-white/20 hover:bg-white/60 hover:text-space-gray-dark;
}
</style>
