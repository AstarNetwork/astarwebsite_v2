<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-16 sm:mb-24">
      <span>Start Building on Astar</span>
    </h2>
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-2 sm:gap-y-20"
    >
      <template v-for="(item, index) in building">
        <li
          class="transition rounded-3xl mb-16 sm:mb-0 group"
          :class="
            index === 4
              ? `text-space-gray-dark ${item.color}`
              : `text-white ${item.color}`
          "
          data-aos="flip-left"
          :data-aos-delay="index * 100"
        >
          <NuxtLink
            :to="item.href"
            class="block"
            :class="item.href != '' && 'hover:brightness-125'"
            target="_blank"
          >
            <img
              class="mx-auto w-32 sm:w-auto mb-2 -mt-12"
              :src="'/images/developers/' + item.image"
              :alt="item.title"
              width="182"
              height="184"
            />
            <div class="px-4 sm:px-6 lg:px-7 pb-8 sm:pb-8">
              <h3 class="text-lg sm:text-xl font-bold leading-tight">
                {{ item.title }}
                <ArrowRightIcon
                  v-if="item.href != ''"
                  class="inline-block w-6 h-6 stroke-2"
                />
              </h3>
            </div>
          </NuxtLink>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const building = [
  {
    title: "Launch your EVM dApps",
    image: "building-ethereum.svg",
    href: "https://docs.astar.network/docs/build/EVM/",
    color: "bg-space-pink hover:bg-space-pink-lighter",
  },
  {
    title: "Launch your WASM dApps",
    image: "building-wasm.svg",
    href: "https://docs.astar.network/docs/build/wasm/",
    color: "bg-space-purple hover:bg-space-purple-lighter",
  },
  {
    title: "Run a Collator",
    image: "building-collator.svg",
    href: "https://docs.astar.network/docs/nodes/",
    color: "bg-space-blue hover:bg-space-blue-lighter",
  },
  {
    title: "Integrate an Exchange",
    image: "building-exchange.svg",
    href: "",
    color: "bg-space-sky",
  },
  {
    title: "DApps Templates",
    image: "building-template.svg",
    href: "https://github.com/orgs/swanky-dapps/repositories",
    color: "bg-space-cyan hover:bg-space-cyan-lighter",
  },
];
</script>
