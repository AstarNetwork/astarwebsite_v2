<template>
  <div class="px-4 sm:px-6 relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="title text-center mb-8 sm:mb-12">
        <span>Build the Unstoppable, Together.</span>
      </h2>
      <p class="mb-36">
        {{ $t("community.online_community.description") }}
      </p>
      <h3 class="font-bold text-3xl sm:text-4xl mb-6 leading-tight">
        {{ $t("community.online_community.social.title") }}
      </h3>
      <p class="mb-16">
        {{ $t("community.online_community.social.description") }}
      </p>
    </div>
    <ul
      class="max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3"
    >
      <li v-for="item in social">
        <NuxtLink
          :to="item.href"
          target="_blank"
          class="bg-white block rounded-md border border-slate-300 text-center py-6 sm:py-8 px-2 hover:bg-gray-50 transition hover:shadow-xl"
        >
          <component
            :is="item.icon"
            class="h-10 sm:h-12 w-10 sm:w-12 mx-auto my-2 sm:my-4"
            :class="item.color"
            aria-hidden="true"
          />
          <h3 class="font-medium mt-1 sm:mt-2 text-slate-950">
            {{ item.name }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { socialUrl, forumUrl } from "@/data/links";

const X = resolveComponent("IconX");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Reddit = resolveComponent("IconReddit");
const Github = resolveComponent("IconGithub");
const Youtube = resolveComponent("IconYoutube");
const Comments = resolveComponent("IconComments");

const { locale } = useI18n();

let twitterUrl = socialUrl.twitter.global.url;
if (locale.value === "ja") {
  twitterUrl = socialUrl.twitter.japan.url;
} else if (locale.value === "ko") {
  twitterUrl = socialUrl.twitter.korea.url;
}

const i18n = locale.value === "ja" ? "/ja" : "";

const social = [
  {
    name: "GitHub",
    href: socialUrl.github,
    icon: Github,
    color: "text-black",
  },
  {
    name: "X(Twitter)",
    href: twitterUrl,
    icon: X,
    color: "text-black",
  },
  {
    name: "Telegram",
    href: socialUrl.telegram,
    icon: Telegram,
    color: "text-[#0088CC]",
  },
  {
    name: "Discord",
    href: socialUrl.discord,
    icon: Discord,
    color: "text-[#5865F2]",
  },
  {
    name: "Reddit",
    href: socialUrl.reddit,
    icon: Reddit,
    color: "text-[#FF4500]",
  },
  {
    name: "YouTube",
    href: socialUrl.youtube,
    icon: Youtube,
    color: "text-[#FF0000]",
  },
  {
    name: "Forum",
    href: forumUrl,
    icon: Comments,
    color: "text-slate-950",
  },
];
</script>

<style lang="postcss" scoped></style>
