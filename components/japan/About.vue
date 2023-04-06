<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 gap-x-6 lg:gap-x-16 gap-y-12 sm:gap-y-20"
    >
      <li v-for="(item, index) in advantages" class="text-center">
        <img
          :src="useAsset('japan/' + item.image)"
          :alt="item.text"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          width="100"
          height="100"
          class="mx-auto w-16 sm:w-24 mb-6 sm:mb-12"
        />
        <p class="text-sm sm:text-lg lg:text-xl">
          {{ item.text }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const advantages = [
  {
    text: "Creating business opportunities in Japan with Astar Network",
    image: "icon-japan.svg",
  },
  {
    text: "Proposed blockchain and NFT use cases",
    image: "icon-nft.svg",
  },
  {
    text: "Engaging Solution Providers",
    image: "icon-solution.svg",
  },
  {
    text: "Introduction of overseas VC for web startups from Japan",
    image: "icon-vc.svg",
  },
  {
    text: "Group study sessions to advance use cases for Astar",
    image: "icon-session.svg",
  },
  {
    text: "Connect with the Astar community and ambassadors",
    image: "icon-community.svg",
  },
];
</script>
