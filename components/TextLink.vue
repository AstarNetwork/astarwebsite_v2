<template>
  <NuxtLink
    v-if="href !== ''"
    class="inline-flex items-center gap-4 group"
    :to="href"
    :target="href.includes('https') ? '_blank' : '_self'"
  >
    <span
      class="flex items-center justify-center border border-blue rounded-full w-12 h-12 relative group-hover:translate-x-2 transition shrink-0"
    >
      <span
        class="w-0 h-0 group-hover:bg-blue group-hover:w-12 group-hover:h-12 absolute duration-300 ease-out rounded-full"
      />
      <ArrowRightIcon
        class="w-5 h-5 group-hover:text-white transition relative z-10"
      />
    </span>
    <slot>Text link</slot>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
})
</script>

<style lang="postcss" scoped></style>
