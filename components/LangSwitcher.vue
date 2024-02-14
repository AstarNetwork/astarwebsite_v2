<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex justify-center items-center gap-x-1.5 rounded-md border border-white px-3 py-2 text-white"
      >
        <GlobeAltIcon class="w-6 h-6 inline-block" />
        {{ currentLocale.name }}
        <ChevronDownIcon class="-mr-1 h-5 w-5" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute left-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white focus:outline-none"
      >
        <div class="py-1">
          <MenuItem v-for="locale in locales" v-slot="{ active }">
            <NuxtLink
              :to="switchLocalePath(locale.code)"
              :key="locale.code"
              :class="[
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm',
              ]"
            >
              {{ locale.name }}
            </NuxtLink>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

import { GlobeAltIcon } from "@heroicons/vue/24/outline";

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const currentLocale = computed(() => {
  return locales.value.find((i) => i.code === locale.value);
});
console.log(currentLocale.value);
</script>
