<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-12 sm:mb-16"><span>News</span></h2>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-20"
    >
      <li v-for="(item, index) in news">
        <NuxtLink :to="item.href" target="_blank" class="block group">
          <div class="mb-4" data-aos="flip-left" :data-aos-delay="index * 100">
            <img
              class="h-52 w-full object-cover rounded-3xl group-hover:brightness-125"
              :src="useAsset('community/medium/' + item.id + '.jpg')"
              :alt="item.title"
            />
          </div>
          <span class="text-gray-400 text-sm">{{ item.publishedDate }}</span>
          <h3 class="text-lg font-medium mb-2">{{ item.title }}</h3>
          <p class="text-gray-400 mb-2 text-sm line-clamp-3">
            {{ item.description }}
          </p>
          <span
            class="text-space-cyan group-hover:text-space-cyan-lighter group-hover:underline flex items-center"
          >
            Read article
            <IconArrowTopRightOnSquare class="w-5 h-5 stroke-2 ml-1" />
          </span>
        </NuxtLink>
      </li>
    </ul>
    <div class="text-center mt-12 sm:mt-20">
      <Button size="lg" href="https://medium.com/astar-network" target="_blank">
        Medium
        <IconArrowTopRightOnSquare class="w-5 h-5 stroke-2 ml-1" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const news = [
  {
    publishedDate: "Jan 15 2022",
    title: "Astar roadmap 2022 — Astar & Shiden Network",
    description:
      "As promised during our latest community AMA, we want to give you an overview of the roadmap for the Astar ecosystem. Most of you already know that the Astar ecosystem contains two main networks: Shiden connected as a parachain on Kusama and Astar connected as a parachain on Polkadot.",
    href: "https://medium.com/astar-network/astar-roadmap-2022-5b49919187fc",
    id: "5b49919187fc",
  },
  {
    publishedDate: "Sep 13 2022",
    title: "Binance.US lists the Astar Native Asset (ASTR)",
    description:
      "We’re thrilled to share that the Astar token (ASTR) will be the first asset from Polkadot (not including DOT) to list on Binance.US, a leader in providing secure and reliable access to crypto assets in the United States. Americans now have the freedom to purchase, trade, or hold the most popular blockchain asset in Japan (according to a survey by Japan Blockchain Association).",
    href: "https://medium.com/astar-network/binance-us-lists-the-astar-native-asset-astr-2528cc181ee2",
    id: "2528cc181ee2",
  },
  {
    publishedDate: "Sep 12 2022",
    title: "Building a Multichain Network with XVM",
    description:
      "We are constructing a multichain network that not only allows developers to build smart contracts in either Solidity or ink!, but encourages developers to build across and between EVM and WASM. The first step was to bootstrap Astar Network by creating an ecosystem of dApps built with already successful smart contracts found on other chains, yet we do not believe this is the entire solution for the long-term success of Astar or Polkadot.",
    href: "https://medium.com/astar-network/building-a-multichain-network-with-xvm-4e905e93cd7e",
    id: "4e905e93cd7e",
  },
  {
    publishedDate: "Sep 8 2022",
    title: "New HRMP Channels Have Opened Between Moonbeam and Astar Network",
    description:
      "Throughout the history of blockchains, interoperability and multi-chain applications are considered the holy grails of Web 3.0. With the Polkadot ecosystem of parachains and cross-consensus messaging (XCM), not only do we have multi-chain assets, but we can also leverage functional interoperability. At Astar Network, we believe that this is the key to creating the next generation of innovative dApps and further progressing Web3.0.",
    href: "https://medium.com/astar-network/new-hrmp-channels-have-opened-between-moonbeam-and-astar-network-90d7cd82d14b",
    id: "90d7cd82d14b",
  },
  {
    publishedDate: "Jul 20 2022",
    title: "Swanky: The All-in-One WASM Tool",
    description:
      "Developers need tools that help write, compile, deploy, and test smart contracts. Currently, the Astar allows developers to use traditional EVM tooling, such as: Hardhat or Truffle. The cypherpunk community created a large library of tutorials, documentation, and templates that are available to Solidity developers.",
    href: "https://medium.com/astar-network/swanky-the-all-in-one-wasm-tool-50c0ed9f07a6",
    id: "50c0ed9f07a6",
  },
  {
    publishedDate: "Apr 13 2022",
    title:
      "#Build2Earn: Benefits of dApp Staking and How to dApp Stake on Astar",
    description:
      "Today, we are excited to announce the launch of dApp staking on Astar! As mentioned in the previous article, for great dApps to be built, developers need to build them. For developers to build great dApps, they need financial incentives. That’s where dApp staking comes in.",
    href: "https://medium.com/astar-network/build2earn-benefits-of-dapp-staking-and-how-to-dapp-stake-on-astar-d402085bef2b",
    id: "d402085bef2b",
  },
];
</script>
