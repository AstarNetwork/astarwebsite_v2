<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>FAQs</span>
    </h2>
    <dl
      class="space-y-6 sm:space-y-10 divide-y divide-white/20 border-t border-b border-white/20 pb-6 sm:pb-10 bg-space-gray-dark"
    >
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question.en"
        v-slot="{ open }"
      >
        <dt class="pt-6 sm:pt-10">
          <DisclosureButton
            class="flex w-full items-start justify-between text-left text-white"
          >
            <span class="text-base sm:text-xl font-medium">
              {{ locale === "ja" ? faq.question.ja : faq.question.en }}
            </span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-6 pr-12 techstack-faqs__answer">
          <div v-html="locale === 'ja' ? faq.answer.ja : faq.answer.en" />
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

import { faqs } from "@/data/techstack_faqs";

const { locale } = useI18n();
</script>

<style lang="postcss">
.techstack-faqs__answer {
  @apply text-gray-300;
  p,
  ul {
    @apply my-6;
  }
  ul {
    @apply pl-4 list-disc;
  }
  ul li {
    @apply my-2;
  }
  a {
    @apply text-space-cyan hover:underline hover:text-space-cyan-lighter;
  }
}
</style>
