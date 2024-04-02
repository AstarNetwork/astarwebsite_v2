<template>
  <section class="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2">
    <div class="pt-0 pb-8 sm:pt-32 sm:pb-0">
      <h2 class="title text-center mb-8 sm:mb-10 sm:text-left">
        {{ $t("community.builders.title") }}
      </h2>
      <p class="mb-8 text-center sm:mb-10 sm:text-left">
        {{ $t("community.builders.ecosystem.description") }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <Button href="/community/ecosystem">
          {{ $t("community.builders.ecosystem.button.explore") }}
        </Button>
        <Button href="https://docs.astar.network/" color="whiteBlue">
          {{ $t("community.builders.ecosystem.button.docs") }}
        </Button>
      </div>
    </div>
    <img
      src="/images/community/builders-ecosystem.svg"
      :alt="$t('community.builders.ecosystem.title')"
      class="mx-auto block"
      width="600"
      height="600"
    />
  </section>
</template>

<script setup lang="ts">
</script>
