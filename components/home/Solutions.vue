<template>
  <div class="container-lg my-20 sm:my-40">
    <h2 class="text-center text-4xl sm:text-6xl tracking-tight mb-8 sm:mb-12">
      {{ $t("home.solutions.title") }}
    </h2>
    <p
      class="text-center max-w-3xl mx-auto mb-8 sm:mb-12 s:text-lg leading-relaxed"
    >
      {{ $t("home.solutions.description") }}
    </p>
    <div class="text-center mb-16 sm:mb-20">
      <Button
        type="button"
        :href="localePath('/solutions/')"
      >
        {{ $t("home.solutions.title") }}
      </Button>
    </div>

    <div class="space-y-20 sm:space-y-40">
      <div
        v-for="partner in data"
        :key="partner.name"
        class="flex flex-col lg:flex-row gap-12"
      >
        <div class="lg:w-1/3 space-y-8">
          <div>
            <img
              :src="'/images/home/' + partner.image"
              :alt="partner.name"
              class="w-full max-w-[280px] sm:max-w-[420px] mx-auto sm:mx-0"
            >
          </div>
          <p class="flex-1">
            {{ partner.description }}
          </p>
          <div>
            <TextLink :href="partner.link.url">
              {{ partner.link.label }}
            </TextLink>
          </div>
        </div>
        <div class="lg:w-2/3 border-t border-slate-300">
          <div
            v-for="item in partner.useCases"
            :key="item.name"
          >
            <NuxtLink
              class="transition flex items-center justify-center bg-white group py-8 sm:py-0"
              :class="
                item.link !== '' &&
                  'overflow-hidden before:absolute before:h-0 before:w-0 before:rounded-full before:duration-500 before:ease-out hover:before:h-[60vw] hover:before:w-[60vw] hover:before:bg-slate-50 relative hover:shadow-lg'
              "
              :to="item.link"
              :target="item.link.includes('https') ? '_blank' : '_self'"
            >
              <div
                class="flex items-center flex-col sm:flex-row sm:gap-4 relative z-10 w-full"
              >
                <div class="shrink-0">
                  <img
                    :src="'/images/home/solutions/' + item.image"
                    :alt="item.name"
                    class="aspect-4/3 max-w-[200px] sm:max-w-[240px] w-full"
                    width="240"
                    height="180"
                  >
                </div>
                <p class="text-slate-950 flex-1">
                  {{ item.description }}
                </p>
                <ArrowRightIcon
                  v-if="item.link !== ''"
                  class="w-6 h-6 shrink-0 mr-4 text-slate-500 group-hover:text-blue hidden sm:block"
                />
              </div>
            </NuxtLink>
            <hr class="border-t border-slate-300">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { startaleUrl } from '@/data/links'
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
const localePath = useLocalePath()
const { t } = useI18n()

const data = {
  startale: {
    name: t('home.solutions.startale.name'),
    image: 'startale-logo.svg',
    description: t('home.solutions.startale.description'),
    link: {
      label: t('home.solutions.startale.cta'),
      url: startaleUrl,
    },
    useCases: [
      {
        name: t('home.solutions.startale.useCases.sony.name'),
        image: 'sony.webp',
        description: t('home.solutions.startale.useCases.sony.description'),
        link: 'https://startale.com/en/blog/Sony-Network-Communications-and-Startale-Labs-Form-Joint-39274',
      },
      {
        name: t('home.solutions.startale.useCases.bobg.name'),
        image: 'bobg.webp',
        description: t('home.solutions.startale.useCases.bobg.description'),
        link: 'https://startale.com/en/blog/Announcement-of-Capital-and-Business-Alliance-between-38915',
      },
      {
        name: t('home.solutions.startale.useCases.uobAndSamsung.name'),
        image: 'uob-samsung.webp',
        description: t('home.solutions.startale.useCases.uobAndSamsung.description'),
        link: 'https://startale.com/en/blog/Startale-Labs-Raises-Additional-dollar3.5m-from-UOB-Venture-71699',
      },
    ],
  },
  japanLab: {
    name: t('home.solutions.japanLab.name'),
    image: 'astar-japan-lab-logo.svg',
    description: t('home.solutions.japanLab.description'),
    link: {
      label: 'Astar Japan Lab',
      url: '/japan/',
    },
    useCases: [
      {
        name: t('home.solutions.japanLab.useCases.shibuyaCity.name'),
        image: 'shibuya.webp',
        description: t(
          'home.solutions.japanLab.useCases.shibuyaCity.description',
        ),
        link: 'https://medium.com/astar-network/astar-partners-with-shibuya-city-6824712020da',
      },
      // {
      //   name: t("home.solutions.japanLab.useCases.doubleJumpTokyo.name"),
      //   image: "double-jump-tokyo.webp",
      //   description: t(
      //     "home.solutions.japanLab.useCases.doubleJumpTokyo.description"
      //   ),
      //   link: "https://www.doublejump.tokyo/",
      // },
      {
        name: t('home.solutions.japanLab.useCases.hakuhodo.name'),
        image: 'hakuhodo.webp',
        description: t('home.solutions.japanLab.useCases.hakuhodo.description'),
        link: 'https://www.hakuhodo-global.com/',
      },
      {
        name: t('home.solutions.japanLab.useCases.deloitteTohmatsu.name'),
        image: 'deloitte.webp',
        description: t(
          'home.solutions.japanLab.useCases.deloitteTohmatsu.description',
        ),
        link: 'https://astar.network/blog/deloitte-tohmatsu-group-transforms-the-sports-industry-with-56669',
      },
    ],
  },
}
</script>

<style lang="postcss" scoped></style>
