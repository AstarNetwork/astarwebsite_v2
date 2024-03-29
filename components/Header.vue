<template>
  <PopoverGroup>
    <div :class="[open ? 'bg-gray-950 shadow-lg bg-opacity-95' : '', 'transition z-40 w-full']">
      <div class="container-lg flex items-center justify-between py-2 sm:py-3 lg:py-4 gap-12">
        <NuxtLink :to="localePath('/')" class="flex">
          <span class="sr-only">Astar Network</span>
          <img
            class="h-10 w-auto sm:h-14"
            src="/images/common/logo.svg"
            alt="Astar Network"
            width="188"
            height="60"
          />
        </NuxtLink>

        <div class="-my-2 -mr-2 lg:hidden">
          <MobileNav :menus="menus" />
        </div>

        <div class="hidden lg:flex lg:items-center lg:justify-between flex-1">
          <nav class="flex items-center space-x-4 xl:space-x-8">
            <NuxtLink :to="localePath('/solutions')" class="transition text-slate-950 hover:text-blue pr-2">
              Solutions
            </NuxtLink>

            <NuxtLink :to="localePath('/astar2')" class="transition text-slate-950 hover:text-blue pr-2">
              Astar 2.0
            </NuxtLink>

            <template v-for="category in menus">
              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="[
                    open ? 'text-blue' : 'text-slate-950 hover:text-blue',
                    'group inline-flex items-center focus:outline-none focus:ring-0 focus:ring-offset-0 transition',
                  ]"
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
                    :class="`bg-white shadow-lg absolute left-1/2 z-50 mt-4 -translate-x-1/2 py-12 px-8 rounded-md ${
                      category.label === 'Network' ? 'w-[700px] grid grid-cols-3' : 'w-72'
                    }`"
                  >
                    <div v-for="item in category.nav">
                      <p
                        v-if="item.label !== ''"
                        :class="`text-xs uppercase text-slate-500 mb-1 ${
                          category.label !== 'Network' && 'mt-8'
                        }`"
                      >
                        {{ item.label }}
                      </p>
                      <NuxtLink
                        v-for="menu in item.nav"
                        class="flex items-center py-1 text-slate-950 transition hover:text-blue whitespace-nowrap"
                        :to="localePath(menu.href)"
                        :target="menu.href.includes('https') ? '_blank' : '_self'"
                      >
                        {{ menu.label }}
                        <ArrowTopRightOnSquareIcon v-if="menu.href.includes('https')" class="w-4 h-4 ml-1" />
                      </NuxtLink>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </template>
          </nav>

          <Button color="whiteBlue" href="https://portal.astar.network/" target="_blank">
            Astar Portal
          </Button>
        </div>
      </div>
    </div>
  </PopoverGroup>
</template>

<script setup>
import { docsUrl, socialUrl, ambassadorProgramUrl, forumUrl, grantsUrl } from "@/data/links";
import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from "@headlessui/vue";
import { ChevronDownIcon, ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const localePath = useLocalePath();
const { t } = useI18n();

let open = false;

const menus = [
  {
    label: "Developers",
    nav: [
      {
        label: "",
        nav: [{ label: "Get Started", href: "/developers" }],
      },
      {
        label: "Developer Support",
        nav: [
          {
            label: "Build & Earn",
            href: docsUrl.dappStaking,
          },
          { label: "ink!ubator", href: grantsUrl.inkubator },
        ],
      },
      {
        label: "Learn the Basics",
        nav: [
          {
            label: "Documentation",
            href: docsUrl.index,
          },
          {
            label: "Astar University",
            href: "/developers/university",
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
          { label: "Community Hub", href: "/community" },
          { label: "Ecosystem", href: "/community/ecosystem" },
        ],
      },
      {
        label: "What's on",
        nav: [{ label: "Blog", href: "/blog" }],
      },
      {
        label: "Getting Involved",
        nav: [
          {
            label: "Ambassador Program",
            href: ambassadorProgramUrl,
          },
          { label: "Community Forum", href: forumUrl },
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
          { label: "2023 Starmap", href: "/starmap" },
          { label: "Astar Japan Lab", href: "/japan" },
          {
            label: "Careers",
            href: socialUrl.wellfound,
          },
          { label: t("brandAssetKit.title"), href: "/brand-asset-kit" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
    ],
  },
];
</script>

<style lang="postcss" scoped></style>
