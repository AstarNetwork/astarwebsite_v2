<template>
  <Menu
    as="div"
    class="relative inline-block text-left"
  >
    <div>
      <MenuButton
        class="inline-flex items-center justify-center gap-x-1.5 rounded-md px-3 py-2 transition"
        :class="{
          'border border-white text-white hover:bg-white/10': color === 'white',
          'text-slate-950': color === 'black',
        }"
      >
        <GlobeAltIcon class="inline-block h-6 w-6" />
        {{ currentLocale.name }}
        <ChevronDownIcon
          class="-mr-1 h-5 w-5"
          aria-hidden="true"
        />
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
        class="absolute z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow focus:outline-none"
        :class="{
          'left-0': menuPosition === 'left',
          'right-0': menuPosition === 'right',
        }"
      >
        <div class="py-1">
          <MenuItem
            v-for="_locale in locales"
            v-slot="{ active }"
            :key="_locale.code"
          >
            <NuxtLink
              :key="_locale.code"
              :to="switchLocalePath(_locale.code)"
              :class="[
                active ? 'bg-slate-100 text-slate-900' : 'text-slate-700',
                'block px-4 py-2 text-sm',
              ]"
            >
              {{ _locale.name }}
            </NuxtLink>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

import { GlobeAltIcon } from '@heroicons/vue/24/outline'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => {
  return (
    locales.value.find(i => i.code === locale.value) ?? {
      code: 'en',
      name: 'English',
    }
  )
})

type Props = {
  color: 'white' | 'black'
  menuPosition: 'left' | 'right'
}

defineProps<Props>()
</script>
