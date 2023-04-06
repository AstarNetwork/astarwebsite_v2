<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-6 sm:mb-16">
      <span>Why Astar?</span>
    </h2>
    <ul class="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 sm:gap-y-16">
      <li v-for="(item, index) in advantages">
        <img
          :src="'/images/developers/' + item.image"
          :alt="item.name"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          width="150"
          height="130"
        />
        <h3 class="font-bold text-lg sm:text-xl mt-4 mb-2 leading-tight">
          {{ item.name }}
        </h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const advantages = [
  {
    name: "EVM compatible",
    description: "Easily launch EVM dApps written in Solidity or Vyper.",
    image: "advantages-ethereum.svg",
  },
  {
    name: "WASM dApps",
    description: "Launch next generation Polkadot native dApps",
    image: "advantages-wasm.svg",
  },
  {
    name: "Scalable",
    description: "Astar is future-proof and built for scalability.",
    image: "advantages-scalable.svg",
  },
  {
    name: "Secure",
    description:
      "Astar Network uses the shared security of the Polkadot Relay Chain.",
    image: "advantages-secure.svg",
  },
  {
    name: "XCM",
    description: "Interact with other blockchains with trustless bridges.",
    image: "advantages-xcm.svg",
  },
  {
    name: "Build2Earn",
    description:
      "Use our dApp staking mechanism to support your development on Astar Network.",
    image: "advantages-income.svg",
  },
];
</script>
