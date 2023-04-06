<template>
  <div class="relative z-10">
    <div data-aos="zoom-out-right" class="absolute z-[4]">
      <img
        class="max-h-80 sm:max-h-full lg:h-auto"
        src="~/assets/images/developers/multichain-bg.svg"
        alt="Multichain Future"
        width="814"
        height="498"
      />
    </div>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:flex items-center relative z-10 pt-80"
    >
      <div class="mb-12 lg:mb-0">
        <h2 class="title mb-4 text-center lg:text-left">
          <span>Multichain Future</span>
        </h2>
        <p class="text-center lg:text-left">
          Astar Network will be the go-to blockchain for Web3 and beyond by
          focusing on the key aspect of interoperability.
        </p>
      </div>
      <ul class="grid gap-12 lg:ml-28">
        <li v-for="item in future" class="flex">
          <div class="mr-8 shrink-0">
            <img
              :src="useAsset('developers/' + item.image)"
              :alt="item.name"
              width="60"
              height="60"
            />
          </div>
          <div>
            <h3 class="font-bold text-xl mb-1">{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const future = [
  {
    name: "DeFi",
    description:
      "The quantity and quality of options available for our user base boost our decentralized finance sector. In addition to very low fees and quick transaction speed, our XCM compatibility with other parachains allow for more secure transfers and swaps within our ecosystem.",
    image: "multichain-defi.svg",
  },
  {
    name: "NFT",
    description:
      "Astar's NFT environment is inviting for small and large communities alike. From personal collections to full-scale projects by renowned Japanese IPs, we have all the tools necessary to help connect the team with the interested communities.",
    image: "multichain-nft.svg",
  },
  {
    name: "Leading Infra Providers",
    description:
      "Our goal is to provide the most secure and efficient connections to other leading blockchains. Considering the high level of importance this has, we take a rigorous approach when integrating bridges and other infra.",
    image: "multichain-providers.svg",
  },
  {
    name: "DAO",
    description:
      "Decentralized autonomous organizations are the future. Our community will help mold the shape of the network through means which are transparent and accessible.",
    image: "multichain-dao.svg",
  },
];
</script>
