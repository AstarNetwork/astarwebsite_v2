<template>
  <li>
    <div class="group cursor-pointer" @click="handleClick">
      <img
        class="w-full object-cover rounded-sm shadow-lg group-hover:opacity-90 transition"
        :src="'/images/incubation/mentors/' + mentor.image"
        :alt="mentor.name"
      />
      <h2
        class="text-xl font-medium mt-4 group-hover:text-space-blue-lighter transition text-black leading-snug"
      >
        {{ mentor.name }}
      </h2>
    </div>
    <p class="leading-tight text-gray-500 mb-3">
      {{ mentor.title }}
    </p>
    <div class="flex items-center space-x-3">
      <NuxtLink
        :to="mentor.links.website"
        v-if="mentor.links.website"
        target="_blank"
      >
        <GlobeAltIcon class="w-6 h-6 text-gray-400 hover:text-space-blue" />
      </NuxtLink>
      <NuxtLink
        :to="mentor.links.linkedin"
        v-if="mentor.links.linkedin"
        target="_blank"
      >
        <IconLinkedin class="w-6 h-6 text-gray-400 hover:text-space-blue" />
      </NuxtLink>
      <NuxtLink
        :to="mentor.links.twitter"
        v-if="mentor.links.twitter"
        target="_blank"
      >
        <IconTwitter class="w-6 h-6 text-gray-400 hover:text-space-blue" />
      </NuxtLink>
    </div>
  </li>
</template>

<script setup lang="ts">
import { GlobeAltIcon } from "@heroicons/vue/24/outline";

defineProps({
  mentor: {},
});

const emit = defineEmits(["modal"]);

const handleClick = () => {
  emit("modal");
};

const { locale } = useI18n();
</script>
