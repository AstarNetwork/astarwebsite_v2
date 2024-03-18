<template>
  <div>
    <ul>
      <li v-for="item in safeToc.table_of_contents" :key="item.link">
        <a :href="item.link">{{ item.title }}</a>
        <ul v-if="item.subsections.length">
          <li v-for="subsection in item.subsections" :key="subsection.link">
            <a :href="subsection.link">{{ subsection.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

interface Subsection {
  title: string;
  link: string;
}

interface TableOfContentsItem {
  title: string;
  link: string;
  subsections: Subsection[];
}

interface TableOfContents {
  table_of_contents: TableOfContentsItem[];
}

export default defineComponent({
  name: 'TableOfContents',
  props: {
    toc: {
      type: Object as PropType<TableOfContents>,
      default: () => ({ table_of_contents: [] }),
    },
  },
  setup(props) {
    const safeToc = computed(() => props.toc || { table_of_contents: [] });

    return {
      safeToc,
    };
  },
});
</script>
