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
              <NuxtLink :to="localePath('/')" class="block">
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
                    :to="localePath('/astar2')"
                    class="text-space-teal group hover:text-space-teal-lighter flex items-center border-t border-gray-600 px-6 py-5"
                  >
                    Astar 2.0
                    <span
                      class="bg-space-teal group-hover:bg-space-teal-lighter text-space-gray-dark text-[0.7rem] block px-2 rounded-sm ml-2"
                    >
                      New
                    </span>
                  </NuxtLink>
                </li>
                <li v-for="menu in menus">
                  <Disclosure as="div" v-slot="{ open }">
                    <DisclosureButton
                      class="text-white border-t border-gray-600 px-6 py-5 w-full flex justify-between items-center"
                    >
                      <span>{{ menu.label }}</span>
                      <ChevronDownIcon
                        :class="[
                          open ? 'rotate-180 transform' : '',
                          'h-4 w-4 stroke-2',
                        ]"
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel as="div" class="px-6 pb-8">
                      <ul class="space-y-8">
                        <li v-for="category in menu.nav">
                          <span
                            v-if="category.label !== ''"
                            class="uppercase block text-gray-400 mb-2 text-xs"
                          >
                            {{ category.label }}
                          </span>
                          <ul class="space-y-2">
                            <li v-for="menu in category.nav">
                              <NuxtLink
                                class="flex items-center text-tiny"
                                :to="menu.href"
                                :target="
                                  menu.href.includes('https')
                                    ? '_blank'
                                    : '_self'
                                "
                              >
                                {{ menu.label }}
                                <ArrowTopRightOnSquareIcon
                                  v-if="menu.href.includes('https')"
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
              </ul>
              <div class="py-12 px-6">
                <Button
                  href="https://portal.astar.network/"
                  target="_blank"
                  size="lg"
                  class="w-full"
                >
                  {{ $t("home.hero.app") }}
                  <ArrowTopRightOnSquareIcon class="w-5 h-5 ml-1 stroke-2" />
                </Button>
              </div>

              <div class="text-center text-lg"><LangSwitcher /></div>
            </nav>
          </div>
        </PopoverPanel>
      </transition>
    </teleport>
  </Popover>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

import {
  XMarkIcon,
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/vue";

interface Nav {
  label: string;
  href: string;
}

interface MenuCategory {
  label: string;
  nav: Array<Nav>;
}

interface Menu {
  label: string;
  nav: Array<MenuCategory>;
}

interface Props {
  menus: Array<Menu>;
}

const props = defineProps<Props>();
</script>
