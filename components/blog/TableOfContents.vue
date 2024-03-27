<template>
  <div
    v-if="toc.table_of_contents.length > 1"
    class="table-of-contents mb-20 rounded-lg p-6 shadow-lg lg:p-12 lg:pb-6"
  >
    <p
      class="mb-0 text-xl font-semibold tracking-tight text-slate-950 lg:text-2xl"
    >
      Table of Contents
    </p>
    <ul>
      <TableOfContentsItem
        v-for="item in toc.table_of_contents"
        :key="item.link"
        :item="item"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { parse } from "node-html-parser";
import TableOfContentsItem from "./TableOfContentsItem.vue";

interface TableOfContentsItem {
  title: string;
  link: string;
  subsections: TableOfContentsItem[];
}

function removeEmptyLinkLayers(
  section: TableOfContentsItem[]
): TableOfContentsItem[] {
  return section.reduce<TableOfContentsItem[]>((acc, current) => {
    // If the current section has an empty link, we don't include it directly,
    // but its subsections should be leveled up.
    if (current.link === "") {
      const leveledUpSubsections = removeEmptyLinkLayers(current.subsections);
      acc.push(...leveledUpSubsections);
    } else {
      // If the current section has a non-empty link, process its subsections normally.
      const processedSubsections = removeEmptyLinkLayers(current.subsections);
      acc.push({ ...current, subsections: processedSubsections });
    }
    return acc;
  }, []);
}

export default defineComponent({
  name: "TableOfContents",
  components: {
    TableOfContentsItem,
  },
  props: {
    body: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const toc = ref<{ table_of_contents: TableOfContentsItem[] }>({
      table_of_contents: [],
    });

    const parseHTMLContent = (html: string) => {
      const doc = parse(html);
      const headings = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
      let currentToc: TableOfContentsItem[] = [];
      let levels: Array<TableOfContentsItem[]> = [currentToc];

      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.substring(1)); // e.g., "2" for "h2"
        const title = heading.textContent || "";
        const link = `#${heading.id}`;

        while (level >= levels.length) {
          let lastLevel = levels[levels.length - 1];
          if (lastLevel.length === 0) {
            // If the last level is empty, this means there's a level jump
            // Create a dummy item to act as the parent for the next level
            const dummyItem: TableOfContentsItem = {
              title: "",
              link: "",
              subsections: [],
            };
            lastLevel.push(dummyItem);
          }
          let newLevel: TableOfContentsItem[] = [];
          lastLevel[lastLevel.length - 1].subsections = newLevel;
          levels.push(newLevel);
        }

        while (level < levels.length - 1) {
          levels.pop();
        }

        const tocItem: TableOfContentsItem = { title, link, subsections: [] };
        levels[levels.length - 1].push(tocItem);

        if (tocItem.subsections) {
          levels[levels.length] = tocItem.subsections;
        }
      });

      toc.value.table_of_contents = removeEmptyLinkLayers(currentToc);
    };

    // Directly parse the provided HTML content
    parseHTMLContent(props.body);

    return {
      toc,
    };
  },
});
</script>
