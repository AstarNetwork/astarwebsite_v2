<template>
  <section class="max-w-4xl mx-auto px-4">
    <h2 class="text-center font-bold text-4xl title"><span>FAQ</span></h2>
    <dl
      class="mt-10 divide-y divide-gray-500 border-b border-t border-gray-500"
    >
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question.en"
        v-slot="{ open }"
      >
        <dt>
          <DisclosureButton
            class="flex w-full items-start justify-between text-left text-gray-900 py-6 hover:text-space-blue-lighter"
          >
            <span class="text-base font-semibold leading-7">
              <template v-if="locale === 'ja'">{{ faq.question.ja }}</template>
              <template v-else>{{ faq.question.en }}</template>
            </span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="pr-12 pb-6">
          <p class="text-base leading-7 text-gray-600 whitespace-pre-line">
            <template v-if="locale === 'ja'">{{ faq.answer.ja }}</template>
            <template v-else>{{ faq.answer.en }}</template>
          </p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { faqs } from "../../../content/faqs";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const { locale } = useI18n();
</script>
