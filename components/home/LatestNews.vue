<template>
  <section class="container-lg my-16 sm:my-24">
    <h2 class="text-xl mb-4">{{ $t("home.latestNews.title") }}</h2>

    <Swiper
      class="swiper--latest-news"
      :modules="[SwiperNavigation]"
      :navigation="true"
      :slides-per-view="1.25"
      :slides-per-group="1"
      :spaceBetween="12"
      :breakpoints="{
        768: {
          slidesPerView: 2.25,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.25,
          slidesPerGroup: 3,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 20,
        },
      }"
    >
      <SwiperSlide v-for="(post, index) in posts">
        <BlogArticleCard :post="post" :key="post" :blog="true" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
import gql from "graphql-tag";

// The subsocial space for news: https://polkaverse.com/10802 , and Japanese: https://polkaverse.com/11315
const { locale } = useI18n();
const astarSpace = locale.value === "ja" ? 11315 : 10802;
const query = gql`
  query PostsBySpaceId {
    posts(where: { space: { id_eq: "${astarSpace}" }, hidden_eq: false }, orderBy: id_DESC, limit: 12) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      slug
      id
    }
  }
`;

const { data } = await useAsyncQuery({ query, clientId: "subsocial" });
const posts = data.value.posts.map(
  (item: { publishedDate: string | number | Date }) => {
    const lowercaseSlug = item.slug.toLowerCase();
    const date = new Date(item.publishedDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return {
      ...item,
      image: item.image
        ? "https://ipfs.subsocial.network/ipfs/" + item.image
        : "/images/blog/placeholder.webp",
      publishedDate: formattedDate,
      slug: lowercaseSlug,
    };
  }
);
</script>

<style lang="postcss">
.swiper--latest-news {
  @apply overflow-visible;
  .swiper-wrapper {
    @apply overflow-visible;
  }
  .swiper-slide {
    @apply h-auto;
  }
  .swiper-button-prev,
  .swiper-button-next {
    @apply -top-10 left-auto border border-slate-950 rounded-full w-12 h-12 before:content-[''] before:block before:w-0 before:h-0 before:absolute before:duration-200 before:ease-out before:rounded-full hover:before:w-12 hover:before:h-12 before:bg-blue text-slate-950 hover:text-white;
    &::after {
      @apply text-sm z-10;
    }
  }
  .swiper-button-prev {
    @apply right-16;
  }
  .swiper-button-next {
    @apply right-0;
  }
}
</style>
