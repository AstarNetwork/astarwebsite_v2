<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
    <h2
      class="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-center title"
    >
      <span>Recommended Reading</span>
    </h2>
    <p class="sm:text-xl text-center mt-4">
      Learn more about where and how Astar was born.
    </p>
    <ul class="grid sm:grid-cols-3 gap-x-4 lg:gap-x-8 mt-12 sm:mt-28">
      <template v-for="(item, index) in reading">
        <li
          class="mb-16 sm:mb-0 rounded-3xl bg-space-gray"
          data-aos="flip-left"
          :data-aos-delay="index * 200"
        >
          <div class="-mx-5 -mt-12 -mb-4">
            <img
              :src="useAsset('home/' + item.image)"
              :alt="item.title"
              width="460"
              height="370"
            />
          </div>
          <div class="px-6 lg:px-7 pb-12">
            <h3 class="text-xl lg:text-2xl font-bold leading-tight">
              {{ item.title }}
            </h3>
            <p class="my-3">{{ item.description }}</p>
            <NuxtLink
              :to="item.href"
              target="_blank"
              class="text-space-cyan hover:text-space-cyan-lighter hover:underline transition flex items-center"
            >
              Learn more<span class="sr-only"> about {{ item.title }}</span>
              <IconArrowTopRightOnSquare class="w-5 h-5 stroke-2 ml-1" />
            </NuxtLink>
          </div>
        </li>
      </template>
    </ul>

    <!-- <div
      class="gradient-outlined-box max-w-5xl mx-auto mt-12 lg:mt-24 sm:flex justify-center items-center p-8 lg:p-12 rounded-3xl sm:space-x-4 lg:space-x-6"
    >
      <div class="mb-4 sm:mb-0">
        <h3 class="font-bold text-2xl leading-tight">Receive newsletter</h3>
        <p>
          Unsubscribe at any time.
          <NuxtLink
            to="https://docs.google.com/document/d/1jEbhRfh292TahRMRdeN4z-8MYNU27dCS_vVopV6xQgk/edit?usp=sharing"
            target="_blank"
            class="text-space-cyan hover:text-space-cyan-lighter hover:underline transition whitespace-nowrap inline-flex items-center"
          >
            Privacy policy
            <IconArrowTopRightOnSquare class="w-5 h-5 stroke-2 ml-1" />
          </NuxtLink>
        </p>
      </div>
      <form class="sm:flex">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="mb-2 sm:mb-0 w-full rounded-xl border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-space-sky focus:ring-space-sky sm:max-w-xs mr-2 text-gray-900"
          placeholder="Enter your email"
        />
        <Button class="w-full sm:w-auto">Subscribe</Button>
      </form>
    </div> -->
  </div>
</template>

<script setup lang="ts">
const reading = [
  {
    title: "Welcome to Astar",
    description:
      "Vision of Astar and the powerful blockchain technology that makes it possible.",
    href: "https://docs.astar.network/docs/getting-started",
    image: "reading-astar.svg",
  },
  {
    title: "$ASTR Tokenomics",
    description: "$ASTR governance, incentives and features that unlock Web3.",
    href: "https://docs.astar.network/docs/about/token-economics/economics",
    image: "reading-token.svg",
  },
  {
    title: "Explore the ecosystem",
    description:
      "Join our ecosystem and understand the power of Astar Network.",
    href: "https://docs.astar.network/docs/ecosystem/",
    image: "reading-ecosystem.svg",
  },
];
</script>
