<template>
  <div class="container">
    <h2>What's on</h2>
    <Swiper
      class="swiper--latest-news"
      :modules="[SwiperNavigation]"
      :navigation="true"
      :slides-per-view="1.25"
      :slides-per-group="1"
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
      <SwiperSlide v-for="post in posts">
        <BlogArticleCard :post="post" :key="post" />
      </SwiperSlide>
    </Swiper>
  </div>
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

<style lang="postcss" scoped>
.swiper--latest-news,
.swiper--latest-news .swiper-wrapper {
  @apply overflow-visible;
}
</style>
