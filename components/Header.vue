<template>
  <PopoverGroup>
    <div class="z-40 w-full transition">
      <div class="container-lg flex items-center justify-between gap-12 py-2 sm:py-3 lg:py-4">
        <NuxtLink
          :to="localePath('/')"
          class="flex"
        >
          <span class="sr-only">Astar Network</span>
          <img
            class="h-10 w-auto sm:h-14"
            src="/images/common/logo.svg"
            alt="Astar Network"
            width="188"
            height="60"
          >
        </NuxtLink>

        <div class="-my-2 -mr-2 lg:hidden">
          <MobileNav :menus="menus" />
        </div>
        <nav class="hidden items-center space-x-8 lg:flex">
          <Popover
            v-for="(category, categoryIndex) in menus"
            v-slot="{ open, close }"
            ref="menuRefs"
            :key="category.label"
            class="relative"
          >
            <PopoverButton
              :class="[
                open ? 'text-blue' : 'text-slate-950 hover:text-blue',
                'group inline-flex items-center focus:outline-none focus:ring-0 focus:ring-offset-0 transition',
              ]"
              @mouseover="(e) => handleMouseEnter(e, categoryIndex)"
              @mouseleave="(e) => handleMouseLeave(e, close)"
            >
              <span>{{ category.label }}</span>
              <ChevronDownIcon
                :class="[
                  open ? 'text-blue rotate-180 transform' : 'text-slate-950',
                  'ml-1 h-3 w-3 group-hover:text-blue stroke-2',
                ]"
                aria-hidden="true"
              />
            </PopoverButton>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-1"
            >
              <PopoverPanel
                class="absolute left-1/2 z-50 mt-4 flex -translate-x-1/2 flex-row gap-3 rounded-md bg-white px-3 py-6 shadow-lg"
              >
                <template
                  v-for="(item, index) in category.nav"
                  :key="`${category.label}-${item.label}`"
                >
                  <div
                    class="flex flex-col"
                    @mouseover="(e) => handleMouseEnter(e, categoryIndex)"
                    @mouseleave="(e) => handleMouseLeave(e, close)"
                  >
                    <div
                      v-if="item.label !== ''"
                      class="flex w-72 flex-row items-center justify-start gap-2 px-6 py-3"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6 text-white"
                      />
                      <span class="text-base font-semibold text-slate-500">{{ item.label }}</span>
                    </div>
                    <NuxtLink
                      v-for="menu in item.nav"
                      :key="menu.label"
                      class="flex w-72 flex-col items-start gap-1 whitespace-nowrap bg-white px-6 py-3 transition hover:bg-slate-50"
                      :to="menu.href"
                      :target="menu.href.includes('https') ? '_blank' : '_self'"
                    >
                      <div class="flex flex-row items-center gap-1">
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
                        <span class="text-base font-semibold text-slate-950">{{ menu.label }}</span>
                        <ArrowTopRightOnSquareIcon
                          v-if="menu.href.includes('https')"
                          class="h-4 w-4 text-slate-950"
                        />
                      </div>
                      <p class="whitespace-pre-line break-all text-sm font-normal text-slate-500">
                        {{ menu.description }}
                      </p>
                    </NuxtLink>
                  </div>
                  <div
                    v-if="category.nav.length !== index + 1"
                    class="min-h-full w-[1px] bg-slate-200"
                  />
                </template>
              </PopoverPanel>
            </transition>
          </Popover>
        </nav>

        <div class="hidden items-center gap-2 lg:flex">
          <LangSwitcher
            color="black"
            menu-position="right"
          />
          <Button
            color="whiteBlue"
            href="https://portal.astar.network/"
            target="_blank"
          >
            Astar Portal
          </Button>
        </div>
      </div>
    </div>
  </PopoverGroup>
</template>

<script setup lang="ts">
import { docsUrl, socialUrl, ambassadorProgramUrl, forumUrl, portalUrl, careerUrl, startaleUrl } from '@/data/links'
import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/vue'
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

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

const localePath = useLocalePath()
const { t } = useI18n()

const isOpenedByHover = ref<number | null>(null)
let settledTimouts: NodeJS.Timeout[] = []

const menuRefs = ref<ComponentPublicInstance<HTMLDivElement>[]>([])

const menus: Menu[] = [
  {
    label: t('header.solution.title'),
    nav: [
      {
        label: '',
        nav: [
          {
            label: t('header.solution.solutions.label'),
            description: t('header.solution.solutions.description'),
            href: localePath('/solutions'),
          },
          {
            label: t('header.solution.startale.label'),
            description: t('header.solution.startale.description'),
            href: startaleUrl,
            icon: '/images/header/startale-symbol.svg',
          },
          {
            label: t('header.solution.japan.label'),
            description: t('header.solution.japan.description'),
            href: localePath('/japan'),
            icon: '/images/common/symbol.svg',
          },
          {
            label: t('header.solution.astar2.label'),
            description: t('header.solution.astar2.description'),
            href: localePath('/astar2'),
            icon: '/images/common/symbol.svg',
          },
        ],
      },
    ],
  },
  {
    label: t('header.ecosystem.title'),
    nav: [
      {
        label: t('header.ecosystem.use.label'),
        icon: resolveComponent('IconCursorClick'),
        nav: [
          {
            label: t('header.ecosystem.use.portal.label'),
            description: t('header.ecosystem.use.portal.description'),
            href: portalUrl.index,
          },
          {
            label: t('header.ecosystem.use.dappStaking.label'),
            description: t('header.ecosystem.use.dappStaking.description'),
            href: portalUrl.dappStaking,
          },
          {
            label: t('header.ecosystem.use.ecosystem.label'),
            description: t('header.ecosystem.use.ecosystem.description'),
            href: localePath('/ecosystem'),
          },
        ],
      },
      {
        label: t('header.ecosystem.developer.label'),
        icon: resolveComponent('IconCode'),
        nav: [
          {
            label: t('header.ecosystem.developer.start.label'),
            description: t('header.ecosystem.developer.start.description'),
            href: localePath('/developers'),
          },
          {
            label: t('header.ecosystem.developer.docs.label'),
            description: t('header.ecosystem.developer.docs.description'),
            href: docsUrl.index,
          },
        ],
      },
      {
        label: t('header.ecosystem.explore.label'),
        icon: resolveComponent('IconExplore'),
        nav: [
          {
            label: t('header.ecosystem.explore.community.label'),
            description: t('header.ecosystem.explore.community.description'),
            href: localePath('/community'),
          },
          {
            label: t('header.ecosystem.explore.blog.label'),
            description: t('header.ecosystem.explore.blog.description'),
            href: localePath('/blog'),
          },
          {
            label: t('header.ecosystem.explore.agent.label'),
            description: t('header.ecosystem.explore.agent.description'),
            href: ambassadorProgramUrl,
          },
          {
            label: t('header.ecosystem.explore.discord.label'),
            description: t('header.ecosystem.explore.discord.description'),
            icon: resolveComponent('IconDiscord'),
            href: socialUrl.discord,
            iconColor: '#5865F2',
          },
          {
            label: t('header.ecosystem.explore.forum.label'),
            description: t('header.ecosystem.explore.forum.description'),
            href: forumUrl,
          },
        ],
      },
    ],
  },
  {
    label: t('header.about.title'),
    nav: [
      {
        label: '',
        nav: [
          {
            label: t('header.about.brand.label'),
            description: t('header.about.brand.description'),
            href: localePath('/brand-asset-kit'),
          },
          {
            label: t('header.about.career.label'),
            description: t('header.about.career.description'),
            href: careerUrl,
          },
          {
            label: t('header.about.contact.label'),
            description: t('header.about.contact.description'),
            href: localePath('/contact'),
          },
        ],
      },
    ],
  },
]

const handleMouseEnter = (e: MouseEvent, index: number) => {
  e.preventDefault()

  const _ref = menuRefs.value[index]

  if (!_ref) return

  for (const timeout of settledTimouts) {
    clearTimeout(timeout)
  }

  settledTimouts = []

  if (isOpenedByHover.value === index) return

  isOpenedByHover.value = index

  const target = _ref.$el.querySelector('button')

  target?.click()
}

const handleMouseLeave = (e: MouseEvent, close: () => void) => {
  e.preventDefault()

  if (!isOpenedByHover.value) return

  const timeoutId = setTimeout(() => {
    isOpenedByHover.value = null
    close()
  }, 200)

  settledTimouts.push(timeoutId)
}
</script>

<style lang="postcss" scoped></style>
