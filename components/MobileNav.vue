<template>
  <Popover>
    <PopoverButton
      class="inline-flex items-center justify-center rounded-md p-2 text-slate-950 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
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
          <div class="bg-white shadow-lg min-h-screen pb-96">
            <div
              class="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 lg:py-4"
            >
              <NuxtLink
                :to="localePath('/')"
                class="block"
              >
                <img
                  class="h-10 w-auto sm:h-14"
                  src="/images/common/logo.svg"
                  alt="Astar Network"
                  width="188"
                  height="60"
                >
              </NuxtLink>
              <div class="-mr-2 sm:mr-0">
                <PopoverButton
                  class="inline-flex items-center justify-center rounded-md p-2 text-slate-950 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>
            </div>
            <nav class="py-6">
              <ul class="space-y-3">
                <li
                  v-for="category in menus"
                  :key="category.label"
                >
                  <Disclosure
                    v-slot="{ open }"
                    as="div"
                  >
                    <DisclosureButton
                      class="p-4 w-full flex justify-between items-center text-xl"
                      :class="open ? 'text-blue' : 'text-slate-950'"
                    >
                      <span>{{ category.label }}</span>
                      <ChevronDownIcon
                        :class="[
                          open ? 'rotate-180 transform' : '',
                          'h-4 w-4 stroke-2',
                        ]"
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      as="div"
                      class="px-4 pb-8"
                    >
                      <ul class="space-y-6">
                        <template
                          v-for="(item, index) in category.nav"
                          :key="`${category.label}-${item.label}`"
                        >
                          <li>
                            <div
                              v-if="item.label !== ''"
                              class="flex flex-row gap-2 items-center px-4 py-3"
                            >
                              <component
                                :is="item.icon"
                                class="h-6 w-6 text-white"
                              />
                              <span class="text-slate-500 text-base font-semibold">{{ item.label }}</span>
                            </div>
                            <ul class="space-y-1">
                              <NuxtLink
                                v-for="menu in item.nav"
                                :key="menu.label"
                                :href="menu.href"
                                :target="
                                  menu.href.includes('https')
                                    ? '_blank'
                                    : '_self'
                                "
                              >
                                <li class="w-full px-4 py-3 space-y-1">
                                  <div class="flex flex-row gap-1 items-center">
                                    <img
                                      v-if="typeof menu.icon === 'string'"
                                      :src="menu.icon"
                                      :alt="menu.label"
                                      class="h-6 w-6"
                                    >
                                    <component
                                      :is="menu.icon"
                                      v-else
                                      :class="['h-6 w-6', menu.iconColor ? `text-[${menu.iconColor}]` : 'text-white']"
                                    />
                                    <span class="text-base font-semiold text-slate-950">{{ menu.label }}</span>
                                    <ArrowTopRightOnSquareIcon
                                      v-if="menu.href.includes('https')"
                                      class="w-4 h-4 text-slate-950"
                                    />
                                  </div>
                                  <p class="text-sm text-slate-950 font-normal break-all whitespace-pre-line">
                                    {{ menu.description }}
                                  </p>
                                </li>
                              </NuxtLink>
                            </ul>
                          </li>
                          <div
                            v-if="category.nav.length !== index + 1"
                            class="h-[1px] w-full bg-slate-200"
                          />
                        </template>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </li>
                <li>
                  <Disclosure
                    v-slot="{ open }"
                    as="div"
                  >
                    <DisclosureButton
                      class="p-4 w-full flex justify-between items-center text-xl"
                      :class="open ? 'text-blue' : 'text-slate-950'"
                    >
                      <div class="flex flex-row justify-start items-center gap-2">
                        <GlobeAltIcon class="w-6 h-6 inline-block" />
                        {{ currentLocale.name }}
                      </div>
                      <ChevronDownIcon
                        :class="[
                          open ? 'rotate-180 transform' : '',
                          'h-4 w-4 stroke-2',
                        ]"
                        aria-hidden="true"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      as="div"
                      class="px-4 pb-8"
                    >
                      <ul class="space-y-6">
                        <li>
                          <ul class="space-y-1">
                            <li
                              v-for="_locale in locales"
                              :key="_locale.code"
                              class="w-full px-4 py-3 space-y-1"
                            >
                              <NuxtLink
                                class="flex flex-row gap-1 items-center"
                                :to="switchLocalePath(_locale.code)"
                              >
                                <span class="text-base font-semiold text-slate-950">{{ _locale.name }}</span>
                              </NuxtLink>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </li>
              </ul>
            </nav>
          </div>
        </PopoverPanel>
      </transition>
    </teleport>
  </Popover>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

import {
  XMarkIcon,
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  GlobeAltIcon,
} from '@heroicons/vue/24/outline'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

interface Menu {
  label: string
  nav: Array<{
    label: string
    icon?: ReturnType<typeof resolveComponent>
    nav: {
      label: string
      description: string
      href: string
      icon?: ReturnType<typeof resolveComponent>
      iconColor?: string
    }[]
  }>
}
interface Props {
  menus: Array<Menu>
}

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const currentLocale = computed(() => {
  return locales.value.find(i => i.code === locale.value) ?? {
    code: 'en',
    name: 'English',
  }
})

defineProps<Props>()
</script>
