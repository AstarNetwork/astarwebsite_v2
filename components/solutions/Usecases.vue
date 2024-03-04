<template>
  <section class="overflow-hidden">
    <div class="container-lg py-20">
      <h2 class="text-center text-4xl sm:text-6xl tracking-tight mb-8 sm:mb-12">
        {{ $t("solutions.usecases.title") }}
      </h2>
      <p
        class="text-center max-w-3xl mx-auto sm:text-lg leading-relaxed mb-16 sm:mb-20"
      >
        {{ $t("solutions.usecases.description") }}
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
const { t } = useI18n();

const posts = [
  {
    title: t("solutions.usecases.kokyoNft.title"),
    image: "/images/solutions/usecases/kokyo-nft.webp",
    description: t("solutions.usecases.kokyoNft.description"),
    link: "https://www.kokyo-nft.jp/",
  },
  {
    title: t("solutions.usecases.incubation.title"),
    image: "/images/solutions/usecases/incubation.webp",
    description: t("solutions.usecases.incubation.description"),
    link: "https://astar.network/incubation",
  },
  {
    title: t("solutions.usecases.yasushiAkimoto.title"),
    image: "/images/solutions/usecases/yasushi-akimoto.webp",
    description: t("solutions.usecases.yasushiAkimoto.description"),
    link: "/blog/yasushi-akimoto-japan's-legendary-idol-producer-starts-54961/",
  },
  {
    title: t("solutions.usecases.jrKyushu.title"),
    image: "/images/solutions/usecases/jr-kyushu.webp",
    description: t("solutions.usecases.jrKyushu.description"),
    link: "/blog/jr-kyushu-railway-company-to-launch-nfts-on-astar-network-to-38364/",
  },
  {
    title: t("solutions.usecases.calbee.title"),
    image: "/images/solutions/usecases/calbee.webp",
    description: t("solutions.usecases.calbee.description"),
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
      @apply text-sm z-10 block w-5 h-5 content-[''];
    }
  }
  .swiper-button-prev {
    &:after {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>');
    }
    &:hover {
      &:after {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>');
      }
    }
  }
  .swiper-button-next {
    &:after {
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>');
    }
    &:hover {
      &:after {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>');
      }
    }
  }
}
</style>
