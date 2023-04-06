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
                  src="~/assets/images/common/logo.svg"
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
                  <NuxtLink
                    to="#"
                    class="text-white block border-t border-gray-600 px-6 py-5"
                  >
                    Network
                  </NuxtLink>
                  <ul class="px-6 py-4 text-sm">
                    <li v-for="item in network" class="mb-6">
                      <span
                        class="uppercase block border-b border-gray-600 text-gray-400 pb-1 mb-3"
                        >{{ item.label }}</span
                      >
                      <ul>
                        <li v-for="nav in item.nav">
                          <NuxtLink
                            class="inline-block py-2 text-white hover:underline transition hover:text-space-cyan-lighter"
                            :to="nav.href"
                            target="_blank"
                          >
                            {{ nav.label }}
                            <IconArrowTopRightOnSquare
                              class="w-4 h-4 inline-block stroke-2"
                            />
                          </NuxtLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NuxtLink
                    to="/community"
                    class="text-white block border-t border-gray-600 px-6 py-5"
                  >
                    Community
                  </NuxtLink>
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
                  <IconArrowTopRightOnSquare class="w-5 h-5 ml-1 stroke-2" />
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
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

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
