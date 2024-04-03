<template>
  <NuxtLink
    v-if="href !== ''"
    :class="button({ size: size, color: color })"
    :to="href"
    :target="href.includes('https') ? '_blank' : '_self'"
  >
    <span :class="innerButton({ size: size })">
      <slot>Button</slot>
      <span :class="circle({ size: size, color: color })">
        <span :class="innerCircle({ size: size, color: color })">
          <ArrowRightIcon :class="arrow({ size: size, color: color })" />
        </span>
      </span>
    </span>
  </NuxtLink>

  <button
    v-else
    :class="button({ size: size, color: color })"
    type="button"
  >
    <span :class="innerButton({ size: size })">
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
import { tv } from 'tailwind-variants'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

defineProps({
  href: {
    type: String,
    default: '',
  },
  color: {
    type: String as () => 'blue' | 'whiteBlue' | 'whiteGray' | 'outlinedGray',
    default: 'blue',
  },
  size: {
    type: String as () => 'sm' | 'md' | 'lg',
    default: 'md',
  },
})

const button = tv({
  base: 'transition-all inline-flex items-center justify-center relative rounded-full group overflow-hidden before:absolute before:h-0 before:w-0 before:rounded-full before:duration-300 before:ease-out hover:before:h-64 hover:before:w-64',
  variants: {
    color: {
      blue: 'text-white hover:text-white bg-gradient-to-r from-[#0047FF] to-[#00D1FF] before:bg-blue before:mix-blend-screen before:opacity-30',
      whiteBlue: 'bg-white text-blue hover:text-blue border border-blue before:bg-blue before:opacity-10',
      whiteGray: 'bg-white text-slate-950 hover:text-slate-950 before:bg-slate-200',
      outlinedGray: 'border border-slate-500 text-slate-700 hover:text-slate-700 before:bg-slate-50',
    },
    size: {
      sm: 'pl-5 pr-3 py-3 text-sm',
      md: 'pl-7 pr-4 py-4',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'blue',
  },
})

const innerButton = tv({
  base: 'relative z-10 inline-flex items-center justify-center',
  variants: {
    size: {
      sm: 'gap-2',
      md: 'gap-3',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const circle = tv({
  base: 'rounded-full flex items-center justify-center',
  variants: {
    color: {
      blue: 'bg-white/40',
      whiteBlue: 'bg-blue/30',
      whiteGray: 'bg-slate-700/25',
      outlinedGray: 'bg-slate-500/25',
    },
    size: {
      sm: 'w-5 h-5',
      md: 'w-6 h-6',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'blue',
  },
})

const innerCircle = tv({
  base: 'rounded-full w-2 h-2 flex items-center justify-center transition-all',
  variants: {
    color: {
      blue: 'bg-white',
      whiteBlue: 'bg-blue',
      whiteGray: 'bg-slate-700',
      outlinedGray: 'bg-slate-500',
    },
    size: {
      sm: 'group-hover:w-5 group-hover:h-5',
      md: 'group-hover:w-6 group-hover:h-6',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'blue',
  },
})

const arrow = tv({
  base: 'w-0 h-0 transition-all',
  variants: {
    color: {
      blue: 'text-blue',
      whiteBlue: 'text-white',
      whiteGray: 'text-white',
      outlinedGray: 'text-white',
    },
    size: {
      sm: 'group-hover:w-3 group-hover:h-3',
      md: 'group-hover:w-4 group-hover:h-4',
      lg: '',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'blue',
  },
})
</script>

<style lang="postcss" scoped></style>
