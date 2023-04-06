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
          <NuxtLink to="/" class="flex">
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
            <MobileNav :network="network" />
          </div>

          <div class="hidden lg:flex lg:items-center">
            <nav class="flex space-x-4 xl:space-x-10">
              <NuxtLink to="/starmap" class="nav-item">2023 Starmap</NuxtLink>
              <NuxtLink to="/developers" class="nav-item">Developers</NuxtLink>

              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="[
                    open
                      ? 'text-space-cyan-light'
                      : 'text-white hover:text-space-cyan-light',
                    'group inline-flex items-center focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium transition',
                  ]"
                >
                  <span>Network</span>
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
                    class="bg-space-gray-dark shadow-lg bg-opacity-95 absolute left-1/2 z-10 mt-5 w-screen max-w-max -translate-x-1/2 pt-10 pb-16 px-16 after:bottom-[100%] after:border-t-transparent after:border-b-space-gray-dark after:absolute after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-x-transparent after:opacity-95"
                  >
                    <ul class="grid grid-cols-3 gap-12 w-full">
                      <li v-for="item in network" class="w-48 xl:w-60">
                        <span
                          class="uppercase block border-b border-gray-600 text-gray-400 pb-1 mb-3"
                          >{{ item.label }}</span
                        >
                        <ul>
                          <li v-for="nav in item.nav">
                            <NuxtLink
                              class="inline-block py-2 text-white hover:underline transition hover:text-space-cyan-lighter whitespace-nowrap"
                              :to="nav.href"
                              target="_blank"
                            >
                              {{ nav.label }}
                              <ArrowTopRightOnSquareIcon
                                class="w-4 h-4 inline-block stroke-2"
                              />
                            </NuxtLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </PopoverPanel>
                </transition>
              </Popover>

              <Popover v-slot="{ open }" class="relative">
                <PopoverButton
                  :class="[
                    open
                      ? 'text-space-cyan-light'
                      : 'text-white hover:text-space-cyan-light',
                    'group inline-flex items-center focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium transition',
                  ]"
                >
                  <span>Community</span>
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
                    class="bg-space-gray-dark shadow-lg bg-opacity-95 absolute left-1/2 z-10 mt-5 w-screen max-w-max -translate-x-1/2 p-10 after:bottom-[100%] after:border-t-transparent after:border-b-space-gray-dark after:absolute after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-x-transparent after:opacity-95"
                  >
                    <NuxtLink
                      class="flex justify-between items-center w-36 py-2 text-white hover:underline transition hover:text-space-cyan-lighter whitespace-nowrap"
                      to="/community"
                    >
                      Overview
                      <ArrowRightIcon class="inline-block w-5 h-5" />
                    </NuxtLink>
                    <NuxtLink
                      class="flex justify-between items-center w-36 py-2 text-white hover:underline transition hover:text-space-cyan-lighter whitespace-nowrap"
                      to="/community/ecosystem"
                    >
                      Ecosystem
                      <ArrowRightIcon class="inline-block w-5 h-5" />
                    </NuxtLink>
                  </PopoverPanel>
                </transition>
              </Popover>

              <!-- <NuxtLink to="/community" class="nav-item">Community</NuxtLink> -->
              <NuxtLink to="/japan" class="nav-item">Japan</NuxtLink>
            </nav>
            <div class="ml-6 xl:ml-12">
              <Button
                variant="outlined"
                href="https://portal.astar.network/"
                target="_blank"
              >
                Launch App
                <ArrowTopRightOnSquareIcon class="w-5 h-5 ml-1 stroke-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PopoverGroup>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
} from "@headlessui/vue";
import {
  ChevronDownIcon,
  ArrowTopRightOnSquareIcon,
  ArrowRightIcon,
} from "@heroicons/vue/24/outline";

const network = [
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
        label: "OnFinality",
        href: "https://www.onfinality.io/marketplace/astar",
      },
    ],
  },
];
</script>

<style lang="postcss" scoped>
.nav-item {
  @apply text-white hover:text-space-cyan-light font-medium transition;
}
</style>
