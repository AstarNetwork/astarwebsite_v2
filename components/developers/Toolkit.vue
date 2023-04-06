<template>
  <div class="relative">
    <div data-aos="zoom-out-left" class="absolute right-4 z-[4]">
      <img
        class="h-48 lg:h-auto float-animation"
        src="~/assets/images/developers/toolkit-bg.svg"
        alt="Astar Developer Toolkit"
        width="556"
        height="294"
      />
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-40">
      <h2 class="title text-center mb-8 sm:mb-12">
        <span>Reach into <br />Astar Developer Toolkit</span>
      </h2>
      <p class="text-center mb-12 sm:mb-28">
        All your favorite tools and integrations work natively with Astar.<br />
        <NuxtLink
          to="https://portal.astar.network/#/astar/dapp-staking/discover"
          target="_blank"
          class="text-space-cyan transition hover:text-space-cyan-light hover:underline"
        >
          Explore all projects building on Astar ->
        </NuxtLink>
      </p>
      <div class="px-4 sm:px-6">
        <div
          class="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-20 sm:grid-cols-4 lg:grid-cols-5"
        >
          <div v-for="item in logos" class="flex items-center justify-center">
            <img
              class="h-12 w-32 lg:w-48 object-contain"
              :src="useAsset('developers/toolkit/' + item.image)"
              :alt="item.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { name: "Swanky", image: "swanky.png" },
  { name: "Alchemy", image: "alchemy.svg" },
  { name: "BwareLabs", image: "bwarelabs.svg" },
  { name: "Blockdeamon", image: "blockdaemon.svg" },
  { name: "OnFinality", image: "onfinality.svg" },
  { name: "SubWallet", image: "subwallet.png" },
  { name: "Talisman", image: "talisman.svg" },
  { name: "Metamask", image: "metamask.svg" },
  { name: "Polkadot.js", image: "polkadot.svg" },
  { name: "Solidity", image: "solidity.png" },
  { name: "ink!", image: "ink.svg" },
  { name: "Remix", image: "remix.svg" },
  { name: "HardHat", image: "hardhat.svg" },
  { name: "OpenBrush", image: "openbrush.svg" },
];
</script>
