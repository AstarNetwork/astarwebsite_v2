<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <h2
      class="text-center text-space-gray-dark text-3xl lg:text-4xl font-bold mb-20"
    >
      Backed By
    </h2>
    <div
      class="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-20 sm:grid-cols-4 lg:grid-cols-5"
    >
      <div v-for="item in logos" class="flex items-center justify-center">
        <!-- <nuxt-img
          format="webp"
          quality="90"
          width="400"
          class="h-12 w-32 lg:w-48 object-contain"
          :src="`/backers/${item.image}`"
          :alt="item.name"
        /> -->
        <img
          class="h-12 w-32 lg:w-48 object-contain"
          :src="useAsset('home/backers/' + item.image)"
          :alt="item.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  {
    name: "Binance Labs",
    image: "binance-labs.png",
  },
  {
    name: "Coinbase Ventures",
    image: "coinbase-ventures.png",
  },
  {
    name: "Polychain Capital",
    image: "polychain-capital.png",
  },
  {
    name: "Crypto.com Capital",
    image: "cryptocom-capital.png",
  },
  {
    name: "Fenbushi Capital",
    image: "fenbushi-capital.png",
  },
  {
    name: "Hypersphere",
    image: "hypersphere.png",
  },
  {
    name: "Hashkey Capital",
    image: "hashkey-capital.svg",
  },
  {
    name: "Huobi Ventures",
    image: "huobi-ventures.png",
  },
  {
    name: "Alchemy Ventures",
    image: "alchemy-ventures.svg",
  },
  {
    name: "DFG",
    image: "dfg.png",
  },
  {
    name: "KR1",
    image: "kr1.png",
  },
  {
    name: "Okex Blockdream Ventures",
    image: "okex-blockdream-ventures.png",
  },
  {
    name: "Longhash Ventures",
    image: "longhash-ventures.png",
  },
  {
    name: "gumi Cryptos",
    image: "gumi-cryptos.png",
  },
  {
    name: "Sub0 capital",
    image: "sub0capital.png",
  },
  {
    name: "Digital Strategies",
    image: "digital-strategies.png",
  },
  {
    name: "Altonomy",
    image: "altonomy.svg",
  },
  {
    name: "AU21 Capital",
    image: "au21capital.png",
  },
  {
    name: "TRG Capital",
    image: "trg-capital.png",
  },
  {
    name: "PAKA",
    image: "paka.png",
  },
  {
    name: "SNZ",
    image: "snz.png",
  },
  {
    name: "IOSG Ventres",
    image: "iosg-ventres.png",
  },
  {
    name: "GSR",
    image: "gsr.svg",
  },
  {
    name: "Rok Capital",
    image: "rok-capital.png",
  },
  {
    name: "Scytale Ventures",
    image: "scytale-ventures.png",
  },
  {
    name: "Vessel",
    image: "vessel.png",
  },
  {
    name: "Warburg Serres",
    image: "warburg-serres.png",
  },
];
</script>
