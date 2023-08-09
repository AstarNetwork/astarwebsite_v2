<template>
  <PopoverGroup>
    <div class="relative">
      <div
        class="pointer-events-none absolute inset-0 z-30"
        aria-hidden="true"
      />

      <div
        :class="[
          open ? 'bg-space-gray-dark shadow-lg bg-opacity-95' : '',
          'transition absolute z-40 w-full',
        ]"
      >
        <div
          class="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 sm:py-8 lg:px-8"
        >
          <NuxtLink :to="localePath('/')" class="flex">
            <span class="sr-only">Astar Network</span>
            <img
              class="h-10 w-auto sm:h-14"
              src="/images/common/logo.svg"
              alt="Astar Network"
              width="188"
              height="60"
              data-not-lazy
            />
          </NuxtLink>

          <div class="-my-2 -mr-2 lg:hidden">
            <MobileNav :menus="menus" />
          </div>

          <div class="hidden lg:flex lg:items-center">
            <nav class="flex items-center space-x-4 xl:space-x-8">
              <NuxtLink
                :to="localePath('/astar2')"
                class="text-space-teal group hover:text-space-teal-lighter font-medium transition text-tiny xl:text-base flex items-center"
              >
                Astar 2.0
                <span
                  class="bg-space-teal group-hover:bg-space-teal-lighter text-space-gray-dark text-[0.7rem] block px-2 rounded-sm ml-1"
                >
                  New
                </span>
              </NuxtLink>

              <template v-for="category in menus">
                <Popover v-slot="{ open }" class="relative">
                  <PopoverButton
                    :class="[
                      open
                        ? 'text-space-cyan-light'
                        : 'text-white hover:text-space-cyan-light',
                      'group inline-flex items-center focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium transition text-tiny xl:text-base',
                    ]"
                  >
                    <span>{{ category.label }}</span>
                    <ChevronDownIcon
                      :class="[
                        open
                          ? 'text-space-cyan-light rotate-180 transform'
                          : 'text-gray-200',
                        'ml-1 h-4 w-4 group-hover:text-space-cyan-light stroke-2',
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
                      :class="`bg-space-gray-dark shadow-lg bg-opacity-95 absolute left-1/2 z-10 mt-4 -translate-x-1/2 py-12 px-8 ${
                        category.label === 'Network'
                          ? 'w-[700px] grid grid-cols-3'
                          : 'w-72'
                      }`"
                    >
                      <div v-for="item in category.nav">
                        <p
                          v-if="item.label !== ''"
                          :class="`text-xs uppercase text-gray-400 mb-1 ${
                            category.label !== 'Network' && 'mt-8'
                          }`"
                        >
                          {{ item.label }}
                        </p>
                        <NuxtLink
                          v-for="menu in item.nav"
                          class="flex items-center py-1 text-white transition hover:text-space-cyan-lighter whitespace-nowrap"
                          :to="menu.href"
                          :target="
                            menu.href.includes('https') ? '_blank' : '_self'
                          "
                        >
                          {{ menu.label }}
                          <ArrowTopRightOnSquareIcon
                            v-if="menu.href.includes('https')"
                            class="w-4 h-4 ml-1"
                          />
                        </NuxtLink>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </template>
            </nav>
            <div class="ml-4 xl:ml-6">
              <Button
                variant="outlined"
                href="https://portal.astar.network/"
                target="_blank"
              >
                {{ $t("home.hero.app") }}
                <ArrowTopRightOnSquareIcon class="w-5 h-5 ml-1 stroke-2" />
              </Button>
            </div>
          </div>

          <div class="hidden lg:block"><LangSwitcher /></div>
        </div>
      </div>
    </div>
  </PopoverGroup>
</template>

<script setup>
const localePath = useLocalePath();
const { locale } = useI18n();
const i18n = locale.value === "ja" ? "/ja" : "";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/vue";
import {
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/vue/24/outline";

let open = false;

const menus = [
  {
    label: "Developers",
    nav: [
      {
        label: "",
        nav: [{ label: "Get Started", href: i18n + "/developers" }],
      },
      {
        label: "Developer Support",
        nav: [
          {
            label: "Build2Earn",
            href: "https://docs.astar.network/docs/dapp-staking/",
          },
          { label: "ink!ubator", href: "https://use.ink/ubator/" },
        ],
      },
      {
        label: "Learn the Basics",
        nav: [
          {
            label: "Documentation",
            href: "https://docs.astar.network/",
          },
          {
            label: "Astar University",
            href: i18n + "/developers/university",
          },
        ],
      },
    ],
  },
  {
    label: "Network",
    nav: [
      {
        label: "Explorer",
        nav: [
          { label: "Subscan", href: "https://astar.subscan.io/" },
          { label: "Blockscout", href: "https://blockscout.com/astar/" },
        ],
      },
      {
        label: "Status",
        nav: [
          {
            label: "DApp Staking",
            href: "https://portal.astar.network/#/astar/dapp-staking/discover",
          },
          { label: "DeFi TVL", href: "https://defillama.com/chain/Astar" },
          {
            label: "Applications",
            href: "https://dappradar.com/rankings/protocol/astar",
          },
        ],
      },
      {
        label: "Infrastructure",
        nav: [
          {
            label: "Shiden Network",
            href: "https://shiden.astar.network",
          },
          {
            label: "Alchemy",
            href: "https://www.alchemy.com/astar",
          },
          {
            label: "Blockdeamon",
            href: "https://blockdaemon.com/protocols/astar/",
          },
          {
            label: "BlastAPI",
            href: "https://blastapi.io/",
          },
          {
            label: "Dwellir",
            href: "https://www.dwellir.com/networks/astar",
          },
          {
            label: "OnFinality",
            href: "https://www.onfinality.io/marketplace/astar",
          },
        ],
      },
    ],
  },
  {
    label: "Community",
    nav: [
      {
        label: "",
        nav: [
          { label: "Community Hub", href: i18n + "/community" },
          { label: "Ecosystem", href: i18n + "/community/ecosystem" },
        ],
      },
      {
        label: "What's on",
        nav: [{ label: "Blog", href: i18n + "/blog" }],
      },
      {
        label: "Getting Involved",
        nav: [
          {
            label: "Ambassador Program",
            href: "https://github.com/AstarNetwork/growth-program",
          },
          {
            label: "Astar Space Lab",
            href: "https://astarnetwork.notion.site/Astar-SpaceLabs-bee19d9d13ab41ba8d113347ae56448f",
          },
          { label: "Community Forum", href: "https://forum.astar.network/" },
        ],
      },
    ],
  },
  {
    label: "About",
    nav: [
      {
        label: "",
        nav: [
          { label: "2023 Starmap", href: i18n + "/starmap" },
          { label: "Astar Japan Lab", href: i18n + "/japan" },
          // {
          //   label: "Jobs",
          //   href: "https://wellfound.com/company/astar-network",
          // },
          { label: "Contact Us", href: i18n + "/contact" },
        ],
      },
    ],
  },
];

const network = [];
</script>

<style lang="postcss" scoped></style>
