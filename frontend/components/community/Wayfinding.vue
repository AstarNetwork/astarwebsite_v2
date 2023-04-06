<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-8 sm:mb-16">
      <span>Connect with Us</span>
    </h2>
    <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
      <li v-for="(item, index) in social">
        <NuxtLink
          :to="item.href"
          target="_blank"
          class="bg-space-gray block rounded-3xl text-center py-6 sm:py-8 px-2 sm:px-4 hover:bg-space-gray-lighter transition"
          data-aos="flip-left"
          :data-aos-delay="index * 100"
        >
          <component
            :is="item.icon"
            class="h-10 sm:h-12 w-10 sm:w-12 mx-auto my-2 sm:my-4"
            :class="item.color"
            aria-hidden="true"
          />
          <span
            class="font-mono text-xs border border-gray-500 rounded-lg py-1 px-3"
          >
            {{ item.type }}
          </span>
          <h3 class="font-medium text-xl mt-1 sm:mt-2">{{ item.name }}</h3>
          <div class="stats leading-snug">
            <span class="font-bold text-xl mr-1.5">{{ item.stats }}</span>
            <small class="block">{{ item.unit }}</small>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");
const Medium = resolveComponent("IconMedium");
const Github = resolveComponent("IconGithub");
const Youtube = resolveComponent("IconYoutube");
const Comments = resolveComponent("IconComments");

const social = [
  {
    name: "Twitter",
    href: "https://twitter.com/astarNetwork",
    icon: Twitter,
    stats: "+355K",
    unit: "followers",
    type: "Announcements",
    color: "text-[#1DA1F2]",
  },
  {
    name: "Discord",
    href: "https://discord.gg/Z3nC9U4",
    icon: Discord,
    stats: "+160K",
    unit: "members",
    type: "Engineering",
    color: "text-[#5865F2]",
  },
  {
    name: "Telegram",
    href: "https://t.me/PlasmOfficial",
    icon: Telegram,
    stats: "+28K",
    unit: "members",
    type: "Announcements",
    color: "text-[#0088CC]",
  },
  {
    name: "Medium",
    href: "https://medium.com/astar-network",
    icon: Medium,
    stats: "+7,0K",
    unit: "followers",
    type: "Announcements",
    color: "text-gray-200",
  },
  {
    name: "GitHub",
    href: "https://github.com/AstarNetwork/Astar",
    icon: Github,
    stats: "+580",
    unit: "stars",
    type: "Engineering",
    color: "text-[#FAFAFA]",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/AstarNetwork",
    icon: Youtube,
    stats: "+2,7K",
    unit: "subscribes",
    type: "Announcements",
    color: "text-[#e64747]",
  },
  {
    name: "Forum",
    href: "https://forum.astar.network/",
    icon: Comments,
    stats: "+170",
    unit: "topics",
    type: "Announcements",
    color: "text-gray-200",
  },
];
</script>

<style lang="postcss" scoped>
.stats span {
  background: linear-gradient(
    90deg,
    #e6007a -5.88%,
    #703ac2 15.42%,
    #0070eb 40.77%,
    #0297fb 72.21%,
    #0ae2ff 95.53%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
