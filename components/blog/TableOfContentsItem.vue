<template>
  <div>
    <NuxtLink
      :to="item.link"
      :class="{
        'font-bold':
          isTopLevel || (item.subsections && item.subsections.length),
        block: true,
      }"
    >
      {{ item.title }}
    </NuxtLink>
    <div v-if="item.subsections && item.subsections.length" class="ml-4">
      <TableOfContentsItem
        v-for="subsection in item.subsections"
        :key="subsection.link"
        :item="subsection"
        :isTopLevel="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TableOfContentsItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    isTopLevel: {
      type: Boolean,
      default: true, // Assume top-level by default
    },
  },
};
</script>
