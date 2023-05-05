<template>
  <div
    class="mx-auto px-4 sm:px-6 relative z-10 lg:flex items-center justify-center"
  >
    <div class="sm:mr-12 mb-6" data-aos="zoom-out-right">
      <img
        class="mx-auto max-w-[280px] sm:max-w-[400px] lg:max-w-none"
        src="/images/japan/news-image.svg"
        alt="News"
        width="670"
        height="564"
      />
    </div>
    <div class="max-w-3xl">
      <h2 class="title mb-6 sm:mb-10 text-center lg:text-left">
        <span>News</span>
      </h2>
      <ul class="space-y-6">
        <li v-for="item in news" class="sm:flex">
          <time
            class="w-36 shrink-0 block text-gray-400 text-sm sm:text-base"
            >{{ item.publishedDate }}</time
          >
          <NuxtLink
            v-if="item.href !== ''"
            :to="item.href"
            target="_blank"
            class="hover:underline transition hover:text-space-cyan-light"
          >
            {{ item.text }}
          </NuxtLink>
          <span v-else>
            {{ item.text }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import gql from "graphql-tag";

// The subsocial space where the dApp staking news updates come from: https://polkaverse.com/11132
const japanNewsSpace = 11215;
const query = gql`
  query PostsBySpaceId {
    posts(where: { space: { id_eq: "${japanNewsSpace}" } }, orderBy: id_DESC) {
      publishedDate: createdOnDay
      text: title
      href: canonical
    }
  }
`;

const { data } = await useAsyncQuery({query, clientId: 'subsocial'});
const news = data.value.posts.map((item: { publishedDate: string | number | Date; }) => {
  const date = new Date(item.publishedDate);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    return {
        ...item,
        publishedDate: formattedDate
    };
});

</script>
