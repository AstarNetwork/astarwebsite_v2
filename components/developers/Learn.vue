<template>
  <div class="px-4 sm:px-6 relative z-10">
    <h2 class="title text-center mb-12 sm:mb-24">
      <span>{{ $t("developers.learn.title") }}</span>
    </h2>
    <div
      class="max-w-7xl mx-auto lg:flex items-center lg:space-x-12 space-y-16 lg:space-y-0"
    >
      <DevelopersKey3Hackathon />
      <div class="lg:w-1/2">
        <h3
          class="font-bold text-3xl lg:text-4xl mb-6 text-center sm:text-left"
        >
          {{ $t("developers.learn.docs.title") }}
        </h3>
        <ul class="space-y-6">
          <li v-for="item in docs">
            <h4>
              <TextLink :href="item.href" target="_blank">{{
                item.title
              }}</TextLink>
            </h4>
            <p>{{ item.description }}</p>
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
    href: "https://docs.astar.network/docs/build/nodes/",
  },
  {
    title: t("developers.learn.docs.xcm.title"),
    description: t("developers.learn.docs.xcm.description"),
    href: "https://docs.astar.network/docs/learn/interoperability/xcm/",
  },
  {
    title: t("developers.learn.docs.tool.title"),
    description: t("developers.learn.docs.tool.description"),
    href: "https://docs.astar.network/docs/build/integrations/",
  },
];
</script>
