<template>
  <div class="mt-8 sm:mt-0">
    <template v-if="mentor.expertise.length !== 0">
      <h3 class="font-medium text-lg mb-2 text-black leading-snug">
        Areas of Expertise
      </h3>
      <ul class="mb-8 list-disc pl-4 text-gray-700">
        <li
          v-for="item in mentor.expertise"
          :key="item"
          class="leading-tight my-2"
        >
          {{ item }}
        </li>
      </ul>
    </template>

    <template
      v-if="
        mentor.links.website !== '' ||
          mentor.links.linkedin !== '' ||
          mentor.links.twitter !== ''
      "
    >
      <h3 class="font-medium text-lg mb-2 text-black leading-snug">
        Links
      </h3>
      <div class="flex flex-wrap items-center">
        <NuxtLink
          v-if="mentor.links.website"
          :to="mentor.links.website"
          target="_blank"
          class="link-item"
        >
          <GlobeAltIcon class="w-6 h-6 mr-1" />
          Website
        </NuxtLink>
        <NuxtLink
          v-if="mentor.links.linkedin"
          :to="mentor.links.linkedin"
          target="_blank"
          class="link-item"
        >
          <IconLinkedin class="w-6 h-6 mr-1" />
          Linkedin
        </NuxtLink>
        <NuxtLink
          v-if="mentor.links.twitter"
          :to="mentor.links.twitter"
          target="_blank"
          class="link-item"
        >
          <IconTwitter class="w-6 h-6 mr-1" />
          Twitter
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from '@heroicons/vue/24/outline'

interface Props {
  mentor: {
    expertise: string[]
    links: {
      website: string
      linkedin: string
      twitter: string
    }
  }
}

defineProps<Props>()
</script>

<style lang="postcss" scoped>
.link-item {
  @apply flex items-center text-space-blue hover:text-space-blue-lighter whitespace-nowrap mr-4 mb-2 outline-0;
}
</style>
