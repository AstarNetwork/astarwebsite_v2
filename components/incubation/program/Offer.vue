<template>
  <section class="max-w-7xl mx-auto px-4">
    <div class="space-y-24 sm:space-y-32">
      <template
        v-for="(item, index) in offer"
        :key="item.id"
      >
        <div
          :id="item.id"
          class="sm:flex items-center"
        >
          <div
            class="mb-12 sm:mb-0"
            :class="
              index === 1 ? 'order-2 sm:ml-8 lg:ml-20' : 'sm:mr-8 lg:mr-20'
            "
          >
            <h2
              class="mb-6 text-2xl sm:text-3xl font-medium text-black leading-tight sm:leading-snug"
            >
              {{ item.lead }}
            </h2>
            <p class="text-lg sm:leading-loose">
              {{ item.text }}
            </p>
          </div>
          <div
            class="lg:shrink-0"
            :class="index === 1 && 'order-1'"
          >
            <img
              :src="'/images/incubation/program/' + item.image"
              :alt="item.text"
              class="w-full"
              :class="item.class"
            >
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const offer = [
  {
    lead: t('incubation.program.offer.connection.lead'),
    text: t('incubation.program.offer.connection.text'),
    image: 'connection.svg',
    id: 'connection',
    class: 'lg:max-w-[540px] min-w-[340px]',
  },
  {
    lead: t('incubation.program.offer.support.lead'),
    text: t('incubation.program.offer.support.text'),
    image: 'support.webp',
    id: 'support',
    class: 'lg:max-w-[456px] min-w-[340px]',
  },
  {
    lead: t('incubation.program.offer.grow.lead'),
    text: t('incubation.program.offer.grow.text'),
    image: 'grow.svg',
    id: 'grow',
    class: 'lg:max-w-[680px] min-w-[340px]',
  },
]
</script>
