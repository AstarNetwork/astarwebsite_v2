<template>
  <div class="bg-gradient-to-b from-white to-[#D0E9F0] relative z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <h2 class="title text-center mb-12 sm:mb-16"><span>Use Cases</span></h2>
      <ul
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-20"
      >
        <li v-for="item in cases">
          <NuxtLink :to="item.href" target="_blank" class="block group">
            <div class="mb-4">
              <img
                class="h-52 w-full object-cover rounded-3xl"
                :class="item.href !== '' && 'group-hover:brightness-125'"
                :src="'/images/japan/use-cases/' + item.image"
                :alt="item.title"
              />
            </div>
            <p
              class="font-medium mb-2 line-clamp-3"
              :class="
                item.href !== '' &&
                'transition group-hover:underline group-hover:text-blue-600'
              "
            >
              {{ item.title }}
            </p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const cases = [
  {
    title:
      "AstarFarm, a GameFi project on Astar Network, will collaborate with Hakuhodo and Calbee to raffle off actual products to game players!",
    image: "astarfarm.webp",
    href: "",
  },
  {
    title: 'Shiden NFT was distributed at "MILIYAH NFT Club".',
    image: "miliyah.webp",
    href: "",
  },
  {
    title: '"Left-Handed Ellen" NFT sales case study using Astar',
    image: "ellen.webp",
    href: "",
  },
  {
    title:
      "Distributed Shiden Network's NFT by audio at a live music concert venue.",
    image: "revolt.webp",
    href: "",
  },
  {
    title: "Astar Network advertised in Nikkei Newspaper and distributed NFT",
    image: "nikkei.webp",
    href: "",
  },
  {
    title:
      "Shiden Network's NFT was distributed in real time via audio on RKB.",
    image: "rkb.webp",
    href: "",
  },
];
</script>
