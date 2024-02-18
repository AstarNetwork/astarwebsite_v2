<template>
  <section class="overflow-hidden">
    <div class="container-lg py-20">
      <h2 class="text-center text-4xl sm:text-6xl tracking-tight mb-8 sm:mb-12">
        Usecases
      </h2>
      <p
        class="text-center max-w-3xl mx-auto sm:text-lg leading-relaxed mb-16 sm:mb-20"
      >
        Enterprises and governments trust Astar, from Japan Airlines creating
        new tourist experiences to Shibuya City supporting it’s entrepreneurs.
        70% of the web3 market in Japan build with Astar’s high speed, low fees,
        and secure network.
      </p>

      <Swiper
        class="swiper--usecases"
        :modules="[SwiperNavigation]"
        :navigation="true"
        :slides-per-view="1.25"
        :slides-per-group="1"
        :spaceBetween="12"
        :breakpoints="{
          768: {
            slidesPerView: 2.25,
            slidesPerGroup: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.5,
            slidesPerGroup: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3.25,
            slidesPerGroup: 3,
            spaceBetween: 24,
          },
        }"
      >
        <SwiperSlide v-for="(post, index) in posts">
          <BlogArticleCard :post="post" :key="post.title" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: "KOKYO NFT",
    image: "/images/solutions/usecases/kokyo-nft.webp",
    description:
      "Special local experience packages available exclusively to NFT holders to enjoy the charm of regions across Japanese and develop deeper connections with local communities.",
    link: "https://www.kokyo-nft.jp/",
  },
  {
    title:
      "Yasushi Akimoto creates idol projects with emerging entertainment enterprises on Astar",
    image: "/images/solutions/usecases/yasushi-akimoto.webp",
    description:
      "The project introduces tokens to fundamentally change the relationship between fans and idols. Fans around the world can support idol groups beyond regional and language barriers.",
    link: "/blog/yasushi-akimoto-japan's-legendary-idol-producer-starts-54961/",
  },
  {
    title: "JR Kyushu",
    image: "/images/solutions/usecases/jr-kyushu.webp",
    description:
      "JR Kyushu Railway Company launched NFTs on Astar to boost customer engagement with it’s 331 million annual riders.",
    link: "/blog/jr-kyushu-railway-company-to-launch-nfts-on-astar-network-to-38364/",
  },
  {
    title: "Calbee",
    image: "/images/solutions/usecases/calbee.webp",
    description:
      "Calbee powers its “NFT Chips” promotional campaign with evolving potato chip NFTs to connect with customers in a new way.",
    link: "https://medium.com/astar-network/leading-japanese-snack-food-maker-calbee-inc-1df16b42b2b6/",
  },
];
</script>

<style lang="postcss">
.swiper--usecases {
  @apply overflow-visible flex justify-center flex-wrap gap-4;
  .swiper-wrapper {
    @apply overflow-visible;
  }
  .swiper-slide {
    @apply h-auto;
  }
  .swiper-button-prev,
  .swiper-button-next {
    @apply relative;
    @apply top-auto left-auto right-auto border border-slate-950 rounded-full w-12 h-12 before:content-[''] before:block before:w-0 before:h-0 before:absolute before:duration-200 before:ease-out before:rounded-full hover:before:w-12 hover:before:h-12 before:bg-blue text-slate-950 hover:text-white mt-4 sm:mt-6;
    &::after {
      @apply text-sm z-10;
    }
  }
}
</style>
