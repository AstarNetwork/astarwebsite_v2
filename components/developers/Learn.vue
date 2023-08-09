<template>
  <div class="px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-12 sm:mb-24">
      <span>{{ $t("developers.learn.title") }}</span>
    </h2>
    <div
      class="max-w-7xl mx-auto lg:flex items-center lg:space-x-12 space-y-16 lg:space-y-0"
    >
      <div class="space-gradient rounded-3xl px-6 pt-1 pb-16 lg:w-1/2">
        <img
          src="/images/developers/university.svg"
          class="mx-auto max-w-[440px] mb-6 sm:mb-6 -mt-6 sm:-mt-16 w-full"
        />
        <h3 class="leading-tight mb-4 text-center">
          <span class="text-3xl sm:text-4xl lg:text-5xl font-extrabold block">
            Astar University
          </span>
          <small class="block text-lg sm:text-2xl">
            Online training to gain Web3 programming skills
          </small>
        </h3>
        <p class="mx-auto max-w-2xl mb-8 sm:text-lg lg:text-center">
          {{ $t("developers.learn.university") }}
        </p>
        <div class="text-center">
          <Button
            variant="outlined"
            size="lg"
            href="/developers/university"
            class="w-72"
          >
            Astar University ->
          </Button>
        </div>
      </div>
      <div class="lg:w-1/2">
        <h3
          class="font-extrabold text-3xl lg:text-4xl mb-6 text-center sm:text-left"
        >
          {{ $t("developers.learn.title") }}
        </h3>
        <ul class="space-y-6">
          <li v-for="item in docs">
            <h4>
              <NuxtLink
                :to="item.href"
                target="_blank"
                class="text-space-cyan hover:underline hover:text-space-cyan-lighter font-semibold text-lg lg:text-xl"
              >
                {{ item.title }} <span class="whitespace-nowrap">-></span>
              </NuxtLink>
            </h4>
            <p class="text-tiny lg:text-base">{{ item.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const docs = [
  {
    title: t("developers.learn.docs.build.title"),
    description: t("developers.learn.docs.build.description"),
    href: "https://docs.astar.network/docs/build/",
  },
  {
    title: t("developers.learn.docs.node.title"),
    description: t("developers.learn.docs.node.description"),
    href: "https://docs.astar.network/docs/nodes/",
  },
  {
    title: t("developers.learn.docs.xcm.title"),
    description: t("developers.learn.docs.xcm.description"),
    href: "https://docs.astar.network/docs/xcm/",
  },
  {
    title: t("developers.learn.docs.tool.title"),
    description: t("developers.learn.docs.tool.description"),
    href: "https://docs.astar.network/docs/integrations/",
  },
];
</script>
