<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>{{ $t("university.faq.title") }}</span>
    </h2>
    <dl
      class="space-y-6 sm:space-y-10 divide-y divide-white/20 border-t border-b border-white/20 pb-6 sm:pb-10"
    >
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question"
        v-slot="{ open }"
      >
        <dt class="pt-6 sm:pt-10">
          <DisclosureButton
            class="flex w-full items-start justify-between text-left text-white"
          >
            <span class="text-base sm:text-xl font-medium">
              {{ faq.question }}
            </span>
            <span class="ml-6 flex h-7 items-center">
              <PlusSmallIcon v-if="!open" class="h-6 w-6" aria-hidden="true" />
              <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-6 pr-12 university-faqs__answer">
          <p
            v-html="faq.answer"
            class="text-base sm:text-lg text-gray-300 whitespace-pre-wrap"
          />
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  application: {
    type: String,
    default: "",
  },
});

const { t } = useI18n();

const faqs = [
  {
    question: t("university.faq.astar.q"),
    answer: t("university.faq.astar.a"),
  },
  {
    question: t("university.faq.goal.q"),
    answer: t("university.faq.goal.a"),
  },
  {
    question: t("university.faq.start.q"),
    answer: `${t("university.faq.start.a1")}<a href="${
      props.application
    }" target="_blank">${t("university.faq.start.a2")}</a>${t(
      "university.faq.start.a3"
    )}`,
  },
  {
    question: t("university.faq.apply.q"),
    answer: `${t("university.faq.apply.a1")}<a href="${
      props.application
    }" target="_blank">${t("university.faq.apply.a2")}</a>${t(
      "university.faq.apply.a3"
    )}`,
  },
  {
    question: t("university.faq.programming.q"),
    answer: t("university.faq.programming.a"),
  },
  {
    question: t("university.faq.length.q"),
    answer: t("university.faq.length.a"),
  },
  {
    question: t("university.faq.cost.q"),
    answer: t("university.faq.cost.a"),
  },
  {
    question: t("university.faq.place.q"),
    answer: t("university.faq.place.a"),
  },
];
</script>

<style lang="postcss">
.university-faqs__answer a {
  @apply text-space-cyan hover:underline hover:text-space-cyan-lighter;
}
</style>
