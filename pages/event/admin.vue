<template>
  <NuxtLayout name="default">
    <template #space>
      <div class="space-gradient relative">
        <img
          class="fixed z-[3] portrait:h-screen landscape:w-screen object-cover"
          src="/images/common/space-stars.svg"
          alt=""
          width="1728"
          height="1728"
        />
        <div
          class="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-start py-28"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
            <div class="text-center">
              <h1
                class="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tight drop-shadow"
              >
                Event Admin
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-12">
        <div>
          <label for="title" class="form-label">Event title</label>
          <div class="mt-2">
            <input
              type="text"
              name="title"
              class="text-form block w-full"
              placeholder="Astar Tech Talk"
            />
          </div>
        </div>
        <div>
          <label for="category" class="form-label">Event type</label>
          <div class="mt-2">
            <select name="category" class="text-form block w-full">
              <option selected>Crowdcast</option>
              <option>Twitter Space</option>
              <option>Hackathon</option>
              <option>Conference</option>
            </select>
          </div>
        </div>
        <div>
          <label for="date" class="form-label">Date</label>
          <div class="mt-2">
            <input type="datetime-local" name="date" class="text-form" />
          </div>
        </div>
        <div>
          <label for="location" class="form-label">Location</label>
          <div class="mt-2">
            <input
              type="text"
              name="location"
              class="text-form block w-full"
              placeholder="Denver, CO, USA / Online"
            />
          </div>
        </div>
        <div>
          <label for="url" class="form-label">URL</label>
          <div class="mt-2">
            <input
              type="url"
              name="url"
              class="text-form block w-full"
              placeholder="https://example.com/event"
            />
          </div>
        </div>
        <div>
          <label for="image" class="form-label">Image</label>
          <div class="mt-2">
            <input type="file" name="image" class="text-white" />
          </div>
        </div>
        <div class="text-center">
          <button
            class="space-gradient font-medium text-lg px-12 py-3 rounded-lg hover:brightness-125 focus:brightness-90 before:hidden focus:ring-2 focus:ring-space-cyan-light"
          >
            Submit
          </button>
        </div>
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
const { t } = useI18n();
import { meta } from "@/content/meta";
const seoTitle = `Event Admin | ${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = "";
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}common.png`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => "website",
  ogUrl: () => seoUrl,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
});

definePageMeta({
  layout: false,
});
</script>

<style lang="postcss" scoped>
.form-label {
  @apply block text-white;
}
.text-form {
  @apply rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-space-cyan text-lg;
}
</style>
