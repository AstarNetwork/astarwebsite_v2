<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 class="title text-center mb-12">
      <span>{{ $t("university.curriculum.title") }}</span>
    </h2>
    <ol
      class="space-y-6 relative before:content-[''] before:w-[1px] before:bg-white/20 before:h-full before:block before:left-1.5 before:absolute before:-z-10"
    >
      <li
        v-for="(item, index) in curriculum"
        class="flex before:content-[''] before:w-3 before:h-3 before:block before:rounded-full before:bg-space-pink before:shrink-0 before:mt-12"
      >
        <div class="bg-space-gray rounded-2xl p-8 sm:p-10 flex-1 ml-4 sm:ml-10">
          <p class="gradient-text font-medium text-lg">
            <span v-if="index === 3">
              {{ locale === "ja" ? "ボーナスモジュール" : "Bonus Module" }}
            </span>
            <span v-else>
              {{ $t("university.curriculum.module") }} {{ index + 1 }}
            </span>
          </p>
          <h3 class="font-bold text-xl sm:text-2xl mb-2 leading-tight">
            {{ item.title }}
          </h3>
          <p class="text-gray-300">{{ item.description }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const curriculum = [
  {
    title: t("university.curriculum.module1.title"),
    description: t("university.curriculum.module1.description"),
  },
  {
    title: t("university.curriculum.module2.title"),
    description: t("university.curriculum.module2.description"),
  },
  {
    title: t("university.curriculum.module3.title"),
    description: t("university.curriculum.module3.description"),
  },
  {
    title: t("university.curriculum.bonus.title"),
    description: t("university.curriculum.bonus.description"),
  },
];
</script>
