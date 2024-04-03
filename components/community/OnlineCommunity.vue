<template>
  <div class="px-4 sm:px-6 relative z-10">
    <div class="max-w-4xl mx-auto text-center">
      <h3 class="font-bold text-3xl sm:text-4xl mb-6 sm:mb-10 leading-tight">
        {{ $t("community.online_community.social.title") }}
      </h3>
      <p class="mb-16">
        {{ $t("community.online_community.social.description") }}
      </p>
    </div>
    <ul
      class="max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3"
    >
      <li
        v-for="item in social"
        :key="item.name"
      >
        <NuxtLink
          :to="item.href"
          target="_blank"
          class="block rounded-md border border-white text-center py-6 sm:py-8 px-2 hover:bg-gray-50 transition hover:shadow-xl box"
        >
          <component
            :is="item.icon"
            class="h-10 sm:h-12 w-10 sm:w-12 mx-auto my-2 sm:my-4"
            :class="item.color"
            aria-hidden="true"
          />
          <h3 class="font-normal mt-1 sm:mt-2 text-slate-950">
            {{ item.name }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
    <div class="max-w-7xl mx-auto box mt-16 py-20">
      <h3 class="font-semibold text-3xl sm:text-4xl mb-6 leading-tight text-center max-w-screen-sm mx-auto">
        {{ $t("community.online_community.space_club.title") }}
      </h3>
      <p class="mb-10 text-center max-w-screen-sm mx-auto">
        {{ $t("community.online_community.space_club.description") }}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href="https://www.notion.so/Astar-Space-Club-2023-5e396c75fcf34d698baf288d9aa9230f?pvs=21">
          {{ $t("community.online_community.space_club.button.space_club") }}
        </Button>
        <Button
          href="https://astar.network/blog/astar-ecosystem-agent-program-41364"
          color="whiteBlue"
        >
          {{ $t("community.online_community.space_club.button.read_more") }}
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socialUrl, forumUrl } from '@/data/links'

const X = resolveComponent('IconX')
const Discord = resolveComponent('IconDiscord')
const Telegram = resolveComponent('IconTelegram')
const Reddit = resolveComponent('IconReddit')
const Github = resolveComponent('IconGithub')
const Youtube = resolveComponent('IconYoutube')
const Comments = resolveComponent('IconComments')

const { locale } = useI18n()

let twitterUrl = socialUrl.twitter.global.url
if (locale.value === 'ja') {
  twitterUrl = socialUrl.twitter.japan.url
}
else if (locale.value === 'ko') {
  twitterUrl = socialUrl.twitter.korea.url
}

const social = [
  {
    name: 'GitHub',
    href: socialUrl.github,
    icon: Github,
    color: 'text-black',
  },
  {
    name: 'X(Twitter)',
    href: twitterUrl,
    icon: X,
    color: 'text-black',
  },
  {
    name: 'Telegram',
    href: socialUrl.telegram,
    icon: Telegram,
    color: 'text-[#0088CC]',
  },
  {
    name: 'Discord',
    href: socialUrl.discord,
    icon: Discord,
    color: 'text-[#5865F2]',
  },
  {
    name: 'Reddit',
    href: socialUrl.reddit,
    icon: Reddit,
    color: 'text-[#FF4500]',
  },
  {
    name: 'YouTube',
    href: socialUrl.youtube,
    icon: Youtube,
    color: 'text-[#FF0000]',
  },
  {
    name: 'Forum',
    href: forumUrl,
    icon: Comments,
    color: 'text-slate-950',
  },
]
</script>

<style lang="postcss" scoped>
.box {
  background: rgba(255, 255, 255, 0.50);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
}
</style>
