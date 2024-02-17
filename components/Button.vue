<template>
  <NuxtLink
    v-if="href !== ''"
    :class="button({ size: size, color: color })"
    :to="href"
    :target="href.includes('https') ? '_blank' : '_self'"
  >
    <span class="relative z-10 inline-flex items-center justify-center gap-3">
      <slot>Button</slot>
      <span :class="circle({ size: size, color: color })">
        <span :class="innerCircle({ size: size, color: color })">
          <ArrowRightIcon :class="arrow({ size: size, color: color })" />
        </span>
      </span>
    </span>
  </NuxtLink>

  <button v-else :class="button({ size: size, color: color })" type="button">
    <span class="relative z-10 inline-flex items-center justify-center gap-3">
      <slot>Button</slot>
      <span :class="circle({ size: size, color: color })">
        <span :class="innerCircle({ size: size, color: color })">
          <ArrowRightIcon :class="arrow({ size: size, color: color })" />
        </span>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { tv } from "tailwind-variants";
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  color: {
    type: String as () => "blue" | "whiteBlue" | "whiteGray" | "outlinedGray",
    default: "blue",
  },
  size: {
    type: String as () => "sm" | "md" | "lg",
    default: "md",
  },
});

const button = tv({
  base: "transition-all inline-flex items-center justify-center relative rounded-full group overflow-hidden before:absolute before:h-0 before:w-0 before:rounded-full before:duration-300 before:ease-out hover:before:h-64 hover:before:w-64",
  variants: {
    color: {
      blue: "text-white bg-gradient-to-r from-[#0047FF] to-[#00D1FF] before:bg-blue before:mix-blend-screen before:opacity-30",
      whiteBlue:
        "bg-white text-blue border border-blue before:bg-blue before:opacity-10",
      whiteGray: "bg-white text-gray-950 before:bg-gray-200",
      outlinedGray: "border border-gray-500 text-gray-700 before:bg-gray-50",
    },
    size: {
      sm: "text-sm",
      md: "pl-8 pr-4 py-4",
      lg: "px-4 py-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
    color: "blue",
  },
});

const circle = tv({
  base: "rounded-full w-6 h-6 flex items-center justify-center",
  variants: {
    color: {
      blue: "bg-white/40",
      whiteBlue: "bg-blue/30",
      whiteGray: "bg-gray-700/25",
      outlinedGray: "bg-gray-500/25",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "blue",
  },
});

const innerCircle = tv({
  base: "rounded-full w-2 group-hover:w-6 h-2 group-hover:h-6 flex items-center justify-center transition-all",
  variants: {
    color: {
      blue: "bg-white",
      whiteBlue: "bg-blue",
      whiteGray: "bg-gray-700",
      outlinedGray: "bg-gray-500",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "blue",
  },
});

const arrow = tv({
  base: "w-0 h-0 transition-all group-hover:w-4 group-hover:h-4",
  variants: {
    color: {
      blue: "text-blue",
      whiteBlue: "text-white",
      whiteGray: "text-white",
      outlinedGray: "text-white",
    },
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "blue",
  },
});
</script>

<style lang="postcss" scoped></style>
