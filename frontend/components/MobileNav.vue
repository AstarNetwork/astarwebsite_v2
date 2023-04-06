<template>
  <Popover>
    <PopoverButton
      class="inline-flex items-center justify-center rounded-md p-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
    >
      <span class="sr-only">Open menu</span>
      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
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
          <div class="bg-space-gray-dark shadow-lg min-h-screen pb-96">
            <div
              class="flex items-center justify-between px-4 py-5 sm:px-6 sm:py-8"
            >
              <NuxtLink to="/" class="block">
                <img
                  class="h-10 w-auto sm:h-14"
                  src="/images/common/logo.svg"
                  alt="Astar Network"
                  width="188"
                  height="60"
                />
              </NuxtLink>
              <div class="-mr-2 sm:mr-0">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md p-2 text-gray-200 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <nav class="">
              <ul class="border-b border-gray-600">
                <li>
                  <NuxtLink
                    to="/starmap"
                    class="text-white block border-t border-gray-600 px-6 py-5"
                  >
                    2023 Starmap
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/developers"
                    class="text-white block border-t border-gray-600 px-6 py-5"
                  >
                    Developers
                  </NuxtLink>
                </li>
                <li>
                  <Disclosure as="div" v-slot="{ open }">
                    <DisclosureButton
                      class="text-white border-t border-gray-600 px-6 py-5 w-full flex justify-between items-center"
                    >
                      <span>Network</span>
                      <ChevronDownIcon
                        :class="[
                          open ? 'rotate-180 transform' : '',
                          'h-4 w-4 stroke-2',
                        ]"
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel as="div" class="px-10 pb-8 text-sm">
                      <ul class="space-y-8">
                        <li v-for="item in network">
                          <span class="uppercase block text-gray-400 mb-2">
                            {{ item.label }}
                          </span>
                          <ul class="space-y-2">
                            <li v-for="nav in item.nav">
                              <NuxtLink
                                class="flex items-center"
                                :to="nav.href"
                                target="_blank"
                              >
                                {{ nav.label }}
                                <ArrowTopRightOnSquareIcon
                                  class="w-4 h-4 stroke-2 ml-1"
                                />
                              </NuxtLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </li>
                <li>
                  <Disclosure as="div" v-slot="{ open }">
                    <DisclosureButton
                      class="text-white border-t border-gray-600 px-6 py-5 w-full flex justify-between items-center"
                    >
                      <span>Community</span>
                      <ChevronDownIcon
                        :class="[
                          open ? 'rotate-180 transform' : '',
                          'h-4 w-4 stroke-2',
                        ]"
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel as="div" class="px-10 pb-8 text-sm">
                      <NuxtLink
                        class="flex items-center py-2 text-white hover:underline transition hover:text-space-cyan-lighter whitespace-nowrap"
                        to="/community"
                      >
                        Overview
                        <ArrowRightIcon class="w-4 h-4 ml-2" />
                      </NuxtLink>
                      <NuxtLink
                        class="flex items-center py-2 text-white hover:underline transition hover:text-space-cyan-lighter whitespace-nowrap"
                        to="/community/ecosystem"
                      >
                        Ecosystem
                        <ArrowRightIcon class="w-4 h-4 ml-2" />
                      </NuxtLink>
                    </DisclosurePanel>
                  </Disclosure>
                </li>
                <li>
                  <NuxtLink
                    to="/japan"
                    class="text-white block border-t border-gray-600 px-6 py-5"
                  >
                    Japan
                  </NuxtLink>
                </li>
              </ul>
              <div class="py-12 px-6">
                <Button
                  href="https://portal.astar.network/"
                  target="_blank"
                  size="lg"
                  class="w-full"
                >
                  Launch App
                  <ArrowTopRightOnSquareIcon class="w-5 h-5 ml-1 stroke-2" />
                </Button>
              </div>
            </nav>
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
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";

interface Network {
  label: string;
  nav: Array<Nav>;
}

interface Nav {
  label: string;
  href: string;
}

interface Props {
  network: Array<Network>;
}

const props = defineProps<Props>();
</script>
