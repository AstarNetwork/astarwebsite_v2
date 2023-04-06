<template>
  <NuxtLink v-if="href !== ''" :class="classes" :to="href">
    <slot>Button</slot>
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
  @apply rounded-sm font-normal inline-block hover:cursor-pointer hover:no-underline text-center;
}
.btn.md {
  @apply px-4 py-2;
}
.btn.lg {
  @apply sm:text-lg px-10 py-2 sm:py-3;
}
.btn.xl {
  @apply text-lg px-10 py-3;
}
.btn.contained.primary {
  @apply bg-black rounded text-white hover:bg-gray-800;
}
.btn.outlined.primary {
  @apply rounded border border-black text-black hover:bg-black hover:text-white;
}
.btn.contained.secondary {
  @apply text-black bg-white;
}
.btn.contained.secondary:hover {
  @apply text-white;
  background: linear-gradient(
    120deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
}
.btn.outlined.secondary {
  @apply border border-white text-white hover:bg-white hover:text-black bg-black;
}
</style>
