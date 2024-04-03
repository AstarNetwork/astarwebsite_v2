<template>
  <Popover>
    <PopoverButton
      class="inline-flex items-center justify-center rounded-md p-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
    >
      <span class="sr-only">Open menu</span>
      <Bars3Icon
        class="h-6 w-6"
        aria-hidden="true"
      />
    </PopoverButton>

    <teleport to="body">
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 z-50 origin-top-right transform transition"
        >
          <div class="bg-black shadow-lg min-h-screen flex items-center">
            <PopoverButton class="absolute right-0 top-0 p-3">
              <span class="sr-only">Close menu</span>
              <XMarkIcon
                class="h-8 w-8 text-gray-300"
                aria-hidden="true"
              />
            </PopoverButton>

            <div class="px-12 w-full text-center">
              <nav class="flex flex-col">
                <NuxtLink
                  :to="localePath('/incubation/program')"
                  class="nav-item"
                  :class="route.meta.slug === 'program' && 'current'"
                >
                  <PopoverButton>
                    {{ $t("incubation.meta.program.title") }}
                  </PopoverButton>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/incubation/partners')"
                  class="nav-item"
                  :class="route.meta.slug === 'partners' && 'current'"
                >
                  <PopoverButton>
                    {{ $t("incubation.meta.partners.title") }}
                  </PopoverButton>
                </NuxtLink>
                <NuxtLink
                  :to="localePath('/incubation/mentors')"
                  class="nav-item"
                  :class="route.meta.slug === 'mentors' && 'current'"
                >
                  <PopoverButton>
                    {{ $t("incubation.meta.mentors.title") }}
                  </PopoverButton>
                </NuxtLink>
                <IncubationButton
                  href="https://zohb4s71q4n.typeform.com/to/f6qfzciE"
                  variant="contained"
                  color="secondary"
                  size="xl"
                  target="_blank"
                  class="w-full my-6"
                >
                  {{ $t("incubation.cta.apply") }}
                  <ArrowRightIcon class="w-6 h-6 inline-block ml-1" />
                </IncubationButton>
              </nav>

              <div class="text-xl py-4">
                <LangSwitcher />
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </teleport>
  </Popover>
</template>

<script setup lang="ts">
import {
  XMarkIcon,
  Bars3Icon,
  ArrowRightIcon,
} from '@heroicons/vue/24/outline'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const route = useRoute()
const localePath = useLocalePath()
</script>

<style lang="postcss" scoped>
.nav-item {
  @apply text-white text-2xl py-4 block;
}
</style>
