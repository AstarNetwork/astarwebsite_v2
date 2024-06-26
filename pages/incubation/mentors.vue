<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('incubation.meta.mentors.title')"
        :description="$t('incubation.meta.mentors.description')"
      />
    </template>
    <template #main>
      <ul
        class="max-w-xs sm:max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-20 my-16 sm:my-36"
      >
        <IncubationMentorsListItem
          v-for="(mentor, index) in mentors"
          :key="mentor.name"
          :mentor="mentor"
          @modal="modalAction(index)"
        />
      </ul>
      <IncubationMentorsModal
        :mentor="mentors[mentorIndex]"
        :open="open"
        @close="modalClose"
      />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { mentors } from '@/data/mentors'
import { ref } from 'vue'

const route = useRoute()
import { meta } from '@/data/meta'
const { t } = useI18n()
const seoTitle = `${t('incubation.meta.mentors.title')} | ${t(
  'incubation.meta.title',
)}`
const seoDescription = t('incubation.meta.mentors.description')
const seoUrl = `${meta.url}${route.fullPath}`
const seoImage = `${meta.image}incubation.png`

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => 'website',
  ogUrl: () => seoUrl,
  twitterCard: () => 'summary_large_image',
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
})

definePageMeta({
  layout: false,
})

const open = ref(false)
const mentorIndex = ref(0)

const modalAction = (index: number) => {
  mentorIndex.value = index
  open.value = true
}

const modalClose = () => {
  open.value = false
}
</script>
