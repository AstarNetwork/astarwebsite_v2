<template>
  <section class="overflow-hidden">
    <div class="container-lg pt-20 pb-40">
      <h2 class="text-center text-4xl sm:text-6xl tracking-tight mb-8 sm:mb-12">
        Japan and Asia
      </h2>
      <p
        class="text-center max-w-3xl mx-auto sm:text-lg leading-relaxed mb-16 sm:mb-20"
      >
        Our strong community includes over ## Japanese members and growing. We
        work closely with industry-leading enterprises, local/national
        government initiatives, and leaders to bring web3 to Asia and beyond.
      </p>

      <Swiper
        class="swiper--japan-and-asia"
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
          <BlogArticleCard :post="post" :key="post" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    title: "Expand big community in Asia (Korea)",
    image: "/images/solutions/japan-and-asia/korea.webp",
    description:
      "We’re bridging different local markets in Asia to realize our shared vision of global mass adoption, including the expansion of Korean web3 companies to Japan.",
    link: "",
  },
  {
    title: "Sota influence to Japan taxation and government",
    image: "/images/solutions/japan-and-asia/japanese-government-web3.webp",
    description:
      "Sota Watanabe, the founder of Astar Network and a member of the Japanese Government's web3 task force, advises the Japanese government on developing web3 as part of its national strategy.",
    link: "https://www.youtube.com/watch?v=EAe67yxlsOM",
  },
  {
    title: "Something that can tell that mass adaption is not too far",
    image: "/images/solutions/japan-and-asia/yasushi-akimoto.webp",
    description:
      "YOAKE entertainment Co, Ltd. starts an ambitious project on Astar to create global entertainment content and an idol economy through blockchain technology.",
    link: "/blog/yasushi-akimoto-japan's-legendary-idol-producer-starts-54961/",
  },
  {
    title: "Astar Japan Lab",
    image: "/images/solutions/japan-and-asia/astar-japan-lab.webp",
    description:
      "394 companies work together to fuel the growth of web3 in Japan. Learn more and register your company.",
    link: "/japan/",
  },
];
</script>

<style lang="postcss">
.swiper--japan-and-asia {
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
