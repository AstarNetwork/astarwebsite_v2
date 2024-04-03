<template>
  <NuxtLayout name="default">
    <JapanHero />

    <div
      class="container-md py-12 flex flex-col sm:flex-row justify-center gap-4"
    >
      <Button :href="registerForm">
        {{ $t("japan.register") }}
      </Button>
      <Button
        href="#useCases"
        color="outlinedGray"
      >
        {{ $t("japan.see_use_cases") }}
      </Button>
    </div>

    <JapanAbout class="py-16 sm:py-32" />
    <JapanUseCases class="py-16 sm:py-32" />
    <JapanBlog class="py-16 sm:py-32" />

    <div class="text-slate-700">
      <div class="">
        <JapanMembers class="py-12" />

        <div class="relative z-10 text-center pt-4 sm:pt-12">
          <Button :href="registerForm">
            {{ $t("japan.register") }}
          </Button>
        </div>

        <JapanNewsletter class="py-8 sm:py-16 lg:py-28" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

const registerForm
  = 'https://docs.google.com/forms/d/e/1FAIpQLSfjqTQyzWIlpl4T921MO8z7nn9v438lRLdlZSpF1nC7HHm3-g/viewform?usp=sf_link'

const route = useRoute()
import { meta } from '@/data/meta'
const { t } = useI18n()
const seoTitle = `${t('japan.title')} | ${meta.siteName} - ${t(
  'meta.tagline',
)}`
const seoDescription = t('japan.description')
const seoUrl = `${meta.url}${route.fullPath}`
const seoImage = `${meta.image}japan.png`

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
</script>

<style lang="postcss" scoped></style>
