<template>
  <ul
    class="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 relative z-10 lg:-mt-28"
  >
    <li v-for="(item, index) in links">
      <NuxtLink
        :to="item.href"
        target="_blank"
        class="py-12 px-6 h-full flex items-center justify-center rounded-3xl text-center shadow-xl"
        :class="
          index === 2
            ? `text-space-gray-dark ${item.color}`
            : `text-white ${item.color}`
        "
        data-aos="flip-left"
        :data-aos-delay="index * 200"
      >
        <div>
          <span class="block text-xl lg:text-2xl font-bold leading-tight">{{
            item.label
          }}</span>
          <span
            class="mt-4 border rounded-full py-1 flex justify-center items-center"
            :class="index === 2 ? 'border-space-gray-dark' : 'border-white'"
          >
            {{ item.to }}
            <IconArrowTopRightOnSquare class="w-5 h-5 stroke-2 ml-1" />
          </span>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const links = [
  {
    label: "Announcements, Developments, Articles",
    to: "Go to Medium",
    href: "https://medium.com/astar-network",
    color: "bg-space-pink hover:bg-space-pink-lighter",
  },
  {
    label: "Demos, Tutorials, Recaps, Events, AMAs",
    to: "Go to YouTube",
    href: "https://www.youtube.com/c/AstarNetwork",
    color: "bg-space-blue hover:bg-space-blue-lighter",
  },
  {
    label: "Join the Community",
    to: "Go to Discord",
    href: "https://discord.gg/Z3nC9U4",
    color: "bg-space-cyan hover:bg-space-cyan-lighter",
  },
];
</script>
