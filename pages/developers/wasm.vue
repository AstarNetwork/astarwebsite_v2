<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="absolute z-[1] mix-blend-overlay portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-cloud.webp"
          alt=""
          width="1728"
          height="1281"
          data-not-lazy
        />
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
          data-not-lazy
        />
        <div
          class="portrait:min-h-[50vh] landscape:min-h-[60vh] flex items-center justify-start"
        >
          <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <h1
              class="text-3xl sm:text-4xl lg:text-6xl font-bold drop-shadow text-center leading-tight pt-12"
            >
              {{ data.title }}
            </h1>
          </div>
        </div>
      </div>
      <div
        class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full sm:flex sm:items-start sm:justify-between"
      >
        <div class="top-4 sticky w-1/4 pr-2 hidden sm:block">
          <p class="text-xs lg:text-sm uppercase text-gray-400 mb-3">
            Table of Contents:
          </p>
          <ul v-if="toc.length > 0" class="space-y-2 text-sm lg:text-base">
            <li v-for="link in toc" :key="link.text">
              <a :href="`#${link.id}`" class="text-gray-300 hover:text-white">
                {{ link.text }}
              </a>
              <ul v-if="link.children" class="pl-4">
                <li v-for="child in link.children">
                  <a
                    :href="`#${child.id}`"
                    class="text-gray-300 hover:text-white"
                  >
                    {{ child.text }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="sm:w-3/4 pb-24">
          <div class="mb-24">
            <h2 class="title text-center text-3xl sm:text-4xl mb-6 sm:mb-8">
              <span>Sign up for Wasm RMRK NFT</span>
            </h2>
            <div
              class="border border-gray-500 rounded-3xl overflow-hidden"
              data-tf-widget="y15vHT0R"
              data-tf-opacity="100"
              data-tf-iframe-props="title=Wasm Launch Day"
              data-tf-transitive-search-params
              data-tf-medium="snippet"
              style="width: 100%; height: 430px"
            />
            <p class="text-xs mt-4 text-gray-400">
              Astar Network may use the contact information you provide to us to
              contact you about our products and services. By clicking “submit”
              above you consent to receive such communications. You may
              unsubscribe from these communications at any time. For information
              on how to unsubscribe, as well as our privacy practices and
              commitment to protecting your privacy, please review our
              <NuxtLink
                class="text-space-cyan hover:text-space-cyan-lighter"
                to="https://docs.google.com/document/d/1jEbhRfh292TahRMRdeN4z-8MYNU27dCS_vVopV6xQgk/edit?usp=sharing"
                target="_blank"
                >Privacy Policy</NuxtLink
              >.
            </p>
          </div>

          <article class="entry-content">
            <!-- <ContentDoc path="/test" /> -->
            <ContentRenderer :value="data" />
          </article>
        </div>
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("wasm", () =>
  queryContent("/wasm").findOne()
);
let toc = [];
toc = data.value.body.toc.links;

useHead({
  script: [{ src: "//embed.typeform.com/next/embed.js" }],
});

definePageMeta({
  layout: false,
  title: "Wasm",
  slug: "wasm",
  description: "",
});
</script>

<style lang="postcss">
.space-gradient::before {
  @apply w-full h-full absolute content-[""] z-[0];
  background: linear-gradient(
    180deg,
    rgba(8, 16, 41, 0) 30%,
    rgba(8, 16, 41, 100) 100%
  );
}

.entry-content {
  @apply prose prose-invert lg:prose-xl prose-a:text-space-cyan hover:prose-a:text-space-cyan-lighter prose-headings:text-white bg-space-gray-dark font-light tracking-wider prose-headings:font-bold prose-blockquote:font-normal prose-blockquote:py-3 prose-blockquote:pl-7 prose-blockquote:pr-5 prose-blockquote:bg-white/5 prose-strong:font-medium;
}

.entry-content h2 a,
.entry-content h3 a,
.entry-content h4 a {
  @apply text-white no-underline;
}
.entry-content p code {
  font-size: 0.9em;
  @apply bg-white/20 font-normal rounded p-2;
}
.entry-content p code::before,
.entry-content p code::after {
  @apply hidden;
}
.entry-content strong {
  background: linear-gradient(transparent 60%, #69275c 60%);
}
</style>
