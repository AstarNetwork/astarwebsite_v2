<template>
  <footer class="bg-blue">
    <div class="mx-auto max-w-6xl pb-12 px-4 sm:px-6 lg:pb-16">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div v-for="category in nav">
          <h3 class="font-medium uppercase text-white">
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
                class="hover:underline transition text-gray-200 hover:text-gray-50"
              >
                {{ item.name }}
                <ArrowTopRightOnSquareIcon
                  v-if="item.href.includes('https')"
                  class="w-4 h-4 inline-block stroke-2"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
        <LangSwitcher />
      </div>

      <div
        class="mt-16 border-t pt-8 lg:flex items-center justify-between text-white border-white border-opacity-30"
      >
        <div class="flex space-x-6 order-2 justify-center">
          <NuxtLink
            v-for="item in social"
            target="_blank"
            :key="item.name"
            :to="item.href"
            class="transition text-gray-200 hover:text-gray-50"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </NuxtLink>
        </div>
        <p class="mt-8 order-1 text-sm lg:mt-0 text-center text-gray-200">
          &copy; {{ new Date().getFullYear() }} Astar Network. All Rights
          Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();

import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

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

const { t } = useI18n();

const nav = [
  {
    name: t("footer.build"),
    nav: [
      { name: t("footer.docs"), href: "https://docs.astar.network/" },
      { name: "GitHub", href: "https://github.com/AstarNetwork" },
      { name: "Discord", href: "https://discord.gg/astarnetwork" },
    ],
  },
  {
    name: t("footer.apply"),
    nav: [
      {
        name: t("footer.careers"),
        href: "https://wellfound.com/company/astar-network",
      },
      {
        name: "Astar Ambassador Program",
        href: "https://astarnetwork.notion.site/Astar-Space-Club-2023-5e396c75fcf34d698baf288d9aa9230f?pvs=4",
      },
      {
        name: "Bug Bounty Program",
        href: "https://immunefi.com/bounty/astarnetwork",
      },
    ],
  },
  {
    name: t("footer.learn"),
    nav: [
      { name: t("footer.blog"), href: localePath("/blog") },
      {
        name: t("footer.videos"),
        href: "https://www.youtube.com/c/AstarNetwork",
      },
      { name: t("footer.forum"), href: "https://forum.astar.network/" },
    ],
  },
  {
    name: t("footer.other"),
    nav: [
      {
        name: t("footer.brand_assets"),
        href: "https://github.com/AstarNetwork/brand-assets",
      },
      {
        name: t("footer.privacy_policy"),
        href: localePath("/privacy-policy"),
      },
      {
        name: t("footer.terms_of_use"),
        href: localePath("/term-of-use"),
      },
      {
        name: t("footer.contact"),
        href: localePath("/contact"),
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
    href: "https://discord.gg/astarnetwork",
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
