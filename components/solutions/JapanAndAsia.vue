<template>
  <section class="overflow-hidden">
    <div class="container-lg pt-20 pb-40">
      <h2 class="text-center text-4xl sm:text-6xl tracking-tight mb-8 sm:mb-12">
        {{ $t("solutions.japanAndAsia.title") }}
      </h2>
      <p
        class="text-center max-w-3xl mx-auto sm:text-lg leading-relaxed mb-16 sm:mb-20"
      >
        {{ $t("solutions.japanAndAsia.description") }}
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
    title: t("solutions.japanAndAsia.korea.title"),
    image: "/images/solutions/japan-and-asia/korea.webp",
    description: t("solutions.japanAndAsia.korea.description"),
    link: "https://startale.org/blog/71699",
  },
  {
    title: t("solutions.japanAndAsia.japanTaxationAndGovernment.title"),
    image: "/images/solutions/japan-and-asia/japanese-government-web3.webp",
    description: t(
      "solutions.japanAndAsia.japanTaxationAndGovernment.description"
    ),
    link: "https://www.youtube.com/watch?v=EAe67yxlsOM",
  },
  {
    title: t("solutions.japanAndAsia.yoake.title"),
    image: "/images/solutions/japan-and-asia/yasushi-akimoto.webp",
    description: t("solutions.japanAndAsia.yoake.description"),
    link: "/blog/yasushi-akimoto-japan's-legendary-idol-producer-starts-54961/",
  },
  {
    title: t("solutions.japanAndAsia.japanLab.title"),
    image: "/images/solutions/japan-and-asia/astar-japan-lab.webp",
    description: t("solutions.japanAndAsia.japanLab.description"),
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
