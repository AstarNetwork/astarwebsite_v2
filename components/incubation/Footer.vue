<template>
  <IncubationCallToAction />
  <footer class="px-4 py-12 text-center">
    <nav class="flex justify-center space-x-6 sm:space-x-10">
      <NuxtLink
        v-for="item in social"
        :to="item.href"
        target="_blank"
        class="block"
      >
        <component
          :is="item.icon"
          class="h-7 sm:h-10 w-7 sm:w-10 text-black hover:text-space-blue-lighter"
          aria-hidden="true"
        />
        <span class="sr-only">{{ item.name }}</span>
      </NuxtLink>
    </nav>
    <nav
      class="py-8 space-y-2 sm:space-y-0 sm:space-x-10 flex flex-col sm:flex-row justify-center"
    >
      <NuxtLink
        to="https://docs.google.com/document/d/1gxM0PEzFq7nW5VB11pMcDUaaKxfMz3BjTDtmEem_oo4/edit?usp=sharing"
        class="text-space-blue transition hover:underline hover:text-space-blue-lighter"
      >
        {{ $t("nav.tac") }}
        <ArrowTopRightOnSquareIcon class="w-5 h-5 inline-block align-sub" />
      </NuxtLink>
      <NuxtLink
        to="https://docs.google.com/document/d/1XSEQ7pPtAt9qnIVLThwWytdoOqV0aNQh/edit?usp=sharing&ouid=106208569002643720949&rtpof=true&sd=true"
        class="text-space-blue transition hover:underline hover:text-space-blue-lighter"
      >
        {{ $t("nav.privacy") }}
        <ArrowTopRightOnSquareIcon class="w-5 h-5 inline-block align-sub" />
      </NuxtLink>
    </nav>
    <p class="text-sm">© 2023 {{ $t("meta.title") }}. All Rights Reserved</p>
  </footer>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";

const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Medium = resolveComponent("IconMedium");
const Github = resolveComponent("IconGithub");
const Youtube = resolveComponent("IconYoutube");

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
