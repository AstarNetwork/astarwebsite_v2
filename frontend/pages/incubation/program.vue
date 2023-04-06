<template>
  <NuxtLayout name="incubation">
    <template #hero>
      <IncubationSubPageHero
        :title="$t('meta.program.title')"
        :description="$t('meta.program.description')"
      />
    </template>
    <template #main>
      <main>
        <IncubationProgramOffer class="py-16 sm:py-40" />
        <IncubationProgramTimeline />
      </main>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  pageTitle: "meta.program.title",
  slug: "program",
  description: "meta.program.description",
});
</script>
