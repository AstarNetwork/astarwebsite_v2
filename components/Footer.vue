<template>
  <footer
    class="mx-auto max-w-6xl pb-12 px-4 sm:px-6 lg:pb-16"
    :class="color === 'light' ? 'text-white' : 'text-gray-500'"
  >
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="category in nav">
        <h3
          class="font-medium uppercase"
          :class="color === 'light' ? 'text-white' : 'text-space-gray-dark'"
        >
          {{ category.name }}
        </h3>
        <ul role="list" class="mt-4 space-y-4">
          <li
            v-for="item in category.nav"
            :key="item.name"
            class="leading-snug"
          >
            <NuxtLink
              :to="item.href"
              :target="item.href.includes('https') ? '_blank' : '_self'"
              class="text-tiny hover:underline transition"
              :class="
                color === 'light'
                  ? 'text-gray-200 hover:text-gray-50'
                  : 'text-gray-500 hover:text-space-gray-dark'
              "
            >
              {{ item.name }}
              <IconArrowTopRightOnSquare
                v-if="item.href.includes('https')"
                class="w-4 h-4 inline-block stroke-2"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="mt-16 border-t pt-8 lg:flex items-center justify-between"
      :class="
        color === 'light'
          ? 'text-white border-white border-opacity-30'
          : 'border-gray-200'
      "
    >
      <div class="flex space-x-6 order-2 justify-center">
        <NuxtLink
          v-for="item in social"
          target="_blank"
          :key="item.name"
          :to="item.href"
          class="transition"
          :class="
            color === 'light'
              ? 'text-gray-200 hover:text-gray-50'
              : 'text-gray-400 hover:text-gray-500'
          "
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </NuxtLink>
      </div>
      <p
        class="mt-8 order-1 text-sm lg:mt-0 text-center"
        :class="color === 'light' ? 'text-gray-200' : 'text-gray-400'"
      >
        &copy; 2023 Astar Network - The Future of Smart Contracts for
        Multichain. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Medium = resolveComponent("IconMedium");
const Github = resolveComponent("IconGithub");
const Youtube = resolveComponent("IconYoutube");

interface Props {
  color?: string;
}
const props = defineProps<Props>();

const nav = [
  {
    name: "Build",
    nav: [
      { name: "Docs", href: "https://docs.astar.network/" },
      { name: "GitHub", href: "https://github.com/AstarNetwork" },
      { name: "Discord", href: "https://discord.gg/Z3nC9U4" },
    ],
  },
  {
    name: "Apply",
    nav: [
      {
        name: "Careers",
        href: "https://angel.co/company/astar-network",
      },
      {
        name: "Astar Japan Lab",
        href: "/japan",
      },
      {
        name: "Astar Space Lab",
        href: "https://astarnetwork.notion.site/Astar-SpaceLabs-bee19d9d13ab41ba8d113347ae56448f",
      },
      {
        name: "Astar Ambassador Program",
        href: "https://github.com/AstarNetwork/growth-program",
      },
      {
        name: "Bug Bounty Program",
        href: "https://immunefi.com/bounty/astarnetwork",
      },
    ],
  },
  {
    name: "Learn",
    nav: [
      { name: "Blog", href: "https://medium.com/astar-network" },
      { name: "Videos", href: "https://www.youtube.com/c/AstarNetwork" },
      { name: "Forum", href: "https://forum.astar.network/" },
    ],
  },
  {
    name: "Other",
    nav: [
      {
        name: "Brand Assets",
        href: "https://github.com/AstarNetwork/brand-assets",
      },
      {
        name: "Privacy Policy",
        href: "https://docs.google.com/document/d/1jEbhRfh292TahRMRdeN4z-8MYNU27dCS_vVopV6xQgk/edit?usp=sharing",
      },
      {
        name: "Terms of Use",
        href: "https://docs.google.com/document/d/1gxM0PEzFq7nW5VB11pMcDUaaKxfMz3BjTDtmEem_oo4/edit?usp=sharing",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  },
];

const social = [
  {
    name: "Twitter",
    href: "https://twitter.com/astarNetwork",
    icon: Twitter,
  },
  {
    name: "Discord",
    href: "https://discord.gg/Z3nC9U4",
    icon: Discord,
  },
  {
    name: "Telegram",
    href: "https://t.me/PlasmOfficial",
    icon: Telegram,
  },
  {
    name: "Medium",
    href: "https://medium.com/astar-network",
    icon: Medium,
  },
  {
    name: "GitHub",
    href: "https://github.com/AstarNetwork",
    icon: Github,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/AstarNetwork",
    icon: Youtube,
  },
];
</script>
