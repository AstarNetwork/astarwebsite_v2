<template>
  <section class="px-4">
    <p class="font-bold text-2xl sm:text-3xl title text-center">
      <span>{{ $t("meta.mentors.title") }}</span>
    </p>
    <h2
      class="text-center mt-2 mb-12 mx-auto max-w-5xl text-2xl sm:text-3xl font-medium text-black leading-tight sm:leading-snug"
    >
      {{ $t("meta.mentors.description") }}
    </h2>

    <ul
      class="max-w-xs sm:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-20 gap-y-20 my-12"
    >
      <IncubationMentorsListItem
        v-for="(mentor, index) in indexMentors"
        :mentor="mentor"
        @modal="modalAction(index)"
      />
    </ul>
    <IncubationMentorsModal
      :mentor="indexMentors[mentorIndex]"
      :open="open"
      @close="modalClose"
    />
    <div class="text-center">
      <IncubationButton
        variant="outlined"
        color="primary"
        :href="localePath('/incubation/mentors')"
      >
        <span>
          {{ $t("mentors.learn_more") }}
          <ArrowRightIcon class="w-6 h-6 inline-block ml-1" />
        </span>
      </IncubationButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
import { mentors } from "../../../content/mentors";
import { ref } from "vue";

const localePath = useLocalePath();

const indexMentors = mentors.filter((x) => x.index === true);

const open = ref(false);
const mentorIndex = ref(0);

const modalAction = (index: number) => {
  mentorIndex.value = index;
  open.value = true;
};

const modalClose = () => {
  open.value = false;
};
</script>
